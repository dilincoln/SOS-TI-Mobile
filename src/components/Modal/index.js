import React from 'react'
import PropTypes from 'prop-types'

import { Platform, KeyboardAvoidingView, Modal as RNModal } from 'react-native'

import { Container, Content } from './styles'

const Modal = ({ visible, children, onRequestClose }) => (
    <RNModal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={onRequestClose}
    >
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <Content>{children}</Content>
            </KeyboardAvoidingView>
        </Container>
    </RNModal>
)

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
}

export default Modal
