import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast'

import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '~/services/api'

import Background from '~/components/Background'
import Appointment from '~/components/Appointment'

import { Container, Title, List } from './styles'

export default function Home() {
    const [appointments, setAppointments] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        async function loadAppointments() {
            try {
                const response = await api.get('appointments')

                setAppointments(response.data)
            } catch (err) {
                dispatch(
                    ToastActionsCreators.displayError(
                        err.response
                            ? err.response.data.error
                            : 'Erro ao conectar ao servidor',
                        15000
                    )
                )
            }
        }

        loadAppointments()
    }, [])

    async function handleCancel(id) {
        try {
            const response = await api.delete(`appointments/${id}`)

            setAppointments(
                appointments.map(appointment =>
                    appointment.id === id
                        ? {
                              ...appointment,
                              canceled_at: response.data.canceled_at,
                              updatedAt: response.data.updatedAt,
                          }
                        : appointment
                )
            )

            dispatch(
                ToastActionsCreators.displayInfo(
                    'Chamado cancelado com sucesso!',
                    5000
                )
            )
        } catch (err) {
            dispatch(
                ToastActionsCreators.displayError(
                    err.response
                        ? err.response.data.error
                        : 'Erro ao conectar ao servidor',
                    5000
                )
            )
        }
    }

    return (
        <Background>
            <Container>
                <Title>Chamados</Title>

                <List
                    data={appointments}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <Appointment
                            data={item}
                            cancelAppointment={() => handleCancel(item.id)}
                        />
                    )}
                />
            </Container>
        </Background>
    )
}

Home.navigationOptions = {
    tabBarLabel: 'Chamados',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={25} color={tintColor} />
    ),
}
