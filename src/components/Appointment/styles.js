import styled from 'styled-components/native'

export const Container = styled.View`
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);

    /* elevation: 4;
    shadow-color: #ff00ff;
    shadow-offset: 10px 2px;
    shadow-opacity: 1;
    shadow-radius: 2; */

    ${props => (props.opacity ? `opacity: ${props.opacity};` : '')}
`

export const Content = styled.View`
    flex-direction: row;
    align-items: flex-start;

    ${props => (props.space_between ? 'justify-content: space-between;' : '')}
`
export const Avatar = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
`
export const Info = styled.View`
    margin-left: 10px;
    max-width: 205px;
`

export const Description = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #fff;
`

export const Id = styled.Text`
    font-weight: normal;
`

export const Time = styled.Text`
    color: #fff;
    opacity: 0.5;
`

export const Status = styled.Text`
    position: absolute;
    right: 0;
    padding-left: 3px;
    padding-right: 3px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    border-radius: 2px;

    background-color: ${props => props.color};
`

export const Line = styled.View`
    border-top-width: 1px;
    border-top-color: rgba(255, 255, 255, 0.1);
    margin-top: 5px;
    margin-bottom: 5px;
`

export const Label = styled.Text`
    font-size: 15px;

    ${props => (props.strong ? `font-weight: bold;` : 'font-weight: normal;')}
    ${props => (props.color ? `color: ${props.color};` : '')}
`
