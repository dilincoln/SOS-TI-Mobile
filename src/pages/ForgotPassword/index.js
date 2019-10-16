import React from 'react'
import { Image } from 'react-native'

import logo from '~/assets/logo-w.png'

import Background from '~/components/Background'

import {
    Container,
    Title,
    Form,
    FormInput,
    SubmitButton,
    BackLink,
    BackText,
} from './styles'

export default function ForgotPassword({ navigation }) {
    function handleSubmit() {
        console.tron.log('Recuperou senha')
    }

    return (
        <>

            <Background>
                <Container>
                    <Image style={{ width: 115, height: 120 }} source={logo} />

                    <Title>Recuperar senha</Title>

                    <Form>
                        <FormInput
                            icon="mail-outline"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu e-mail"
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                        />

                        <SubmitButton onPress={handleSubmit}>
                            Recuperar
                        </SubmitButton>

                        <BackLink onPress={() => navigation.navigate('SignIn')}>
                            <BackText>Voltar</BackText>
                        </BackLink>
                    </Form>
                </Container>
            </Background>
        </>
    )
}
