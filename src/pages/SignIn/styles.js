import { Platform } from 'react-native'
import styled from 'styled-components/native'

import Input from '~/components/Input'
import Button from '~/components/Button'

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`

export const Form = styled.View`
    align-self: stretch;
    margin-top: 20px;
`

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`

export const SubmitButton = styled(Button)`
    margin-top: 10px;
`

export const ForgotPasswordLink = styled.TouchableOpacity`
    margin-top: 20px;
`

export const ForgotPasswordText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`
