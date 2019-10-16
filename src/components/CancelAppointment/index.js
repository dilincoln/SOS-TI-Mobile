import React from 'react'
import { TouchableOpacity } from 'react-native'

import Modal from '~/components/Modal'

import { Cancel, CancelText, Title, Button, ButtonText } from './styles'

export default function CancelAppointment({
    id,
    visible,
    onRequestClose,
    onConfirm,
}) {
    function confirm() {
        onConfirm()
        onRequestClose()
    }

    return (
        <Modal visible={visible} onRequestClose={onRequestClose}>
            <Title>Deseja realmente cancelar o chamado #{id}?</Title>
            <TouchableOpacity onPress={confirm}>
                <Button>
                    <ButtonText>Cancelar chamado</ButtonText>
                </Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={onRequestClose}>
                <Cancel>
                    <CancelText>Voltar</CancelText>
                </Cancel>
            </TouchableOpacity>
        </Modal>
    )
}
