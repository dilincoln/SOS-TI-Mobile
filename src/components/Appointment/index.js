import React, { useMemo, useState } from 'react'
import { parseISO, formatRelative, formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { TouchableOpacity, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import CancelAppointment from '~/components/CancelAppointment'

import {
    Container,
    Content,
    Avatar,
    Info,
    Description,
    Id,
    Time,
    Status,
    Line,
    Label,
} from './styles'

export default function Appointment({ data, cancelAppointment }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function toggleModalOpen() {
        setIsModalOpen(true)
    }

    function toggleModalClose() {
        setIsModalOpen(false)
    }

    const {
        id,
        finished_at,
        accept_at,
        canceled_at,
        updatedAt,
        createdAt,
        description,
        provider,
    } = data

    const dateParsed = useMemo(() => {
        return formatRelative(parseISO(createdAt), new Date(), {
            locale: ptBR,
            addSuffix: true,
        })
    }, [createdAt])

    const dateDistance = useMemo(() => {
        return formatDistance(parseISO(updatedAt), new Date(), {
            locale: ptBR,
            addSuffix: true,
        })
    }, [updatedAt])

    const helpAlert = doubt => {
        switch (doubt) {
            case 'resolvido':
                Alert.alert(
                    'RESOLVIDO',
                    'O seu chamado foi atendido e resolvido pelo técnico.'
                )
                break
            case 'aceito':
                Alert.alert(
                    'ACEITO',
                    'O seu chamado foi visualizado pelo técnico e ele está trabalhando na solução.'
                )
                break
            case 'cancelado':
                Alert.alert(
                    'CANCELADO',
                    'O seu chamado foi cancelado. Para mais informações entre em contato com o técnico.'
                )
                break
            case 'aguardando':
                Alert.alert(
                    'AGUARDANDO',
                    'O seu chamado está aguardando atendimento do técnico.'
                )
                break
            default:
                Alert.alert('Opa', 'Não entendi sua solicitação =(')
                break
        }
    }

    return (
        <Container opacity={canceled_at || finished_at ? '0.5' : null}>
            <Content>
                <Avatar
                    source={{
                        uri: `https://api.adorable.io/avatar/30/${
                            provider ? provider.name : 'null'
                        }.png`,
                    }}
                />

                <Info>
                    <Description>
                        {description || 'Motivo do chamado não informado'}
                        <Id>{` #${id}`}</Id>
                    </Description>
                    <Time>{dateParsed}</Time>
                </Info>

                {(() => {
                    if (canceled_at) {
                        return (
                            <Status
                                color="#ff7173"
                                onPress={() => {
                                    helpAlert('cancelado')
                                }}
                            >
                                Cancelado
                            </Status>
                        )
                    }
                    if (finished_at) {
                        return (
                            <Status
                                color="#50fa7b"
                                onPress={() => {
                                    helpAlert('resolvido')
                                }}
                            >
                                Resolvido
                            </Status>
                        )
                    }
                    if (accept_at) {
                        return (
                            <Status
                                color="#70a9f6"
                                onPress={() => {
                                    helpAlert('aceito')
                                }}
                            >
                                Aceito
                            </Status>
                        )
                    }
                    return (
                        <Status
                            color="#ffae33"
                            onPress={() => {
                                helpAlert('aguardando')
                            }}
                        >
                            Aguardando
                        </Status>
                    )
                })()}
            </Content>
            <Line />
            <Content space_between>
                <Label color="#fff" strong>
                    {provider && (
                        <>
                            <Label color="#fff" strong>
                                Técnico:{' '}
                            </Label>
                            <Label color="#fff">
                                {provider.name.split(' ')[0]}
                            </Label>
                        </>
                    )}
                </Label>

                {(() => {
                    if (!(finished_at || canceled_at)) {
                        return (
                            <TouchableOpacity
                                onPress={toggleModalOpen}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon
                                    name="event-busy"
                                    size={20}
                                    color="#f64c75"
                                />
                                <Label color="#f64c75">Cancelar chamado</Label>
                            </TouchableOpacity>
                        )
                    }

                    return <Label color="#fff">{dateDistance}</Label>
                })()}
            </Content>

            <CancelAppointment
                id={data.id}
                visible={isModalOpen}
                onRequestClose={toggleModalClose}
                onConfirm={cancelAppointment}
            />
        </Container>
    )
}
