import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 0 5px;
    height: 46px;
    background: rgb(232, 240, 254);
    border-radius: 4px;

    flex-direction: row;
    align-items: center;
`

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0, 0, 0, 1)',
})`
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    color: rgba(0, 0, 0, 1);
`
