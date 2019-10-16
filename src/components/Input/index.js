import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TInput } from './styles'

function Input({ style, icon, ...rest }, ref) {
    return (
        <Container style={style}>
            {icon && (
                <Icon
                    style={{ marginLeft: 10 }}
                    name={icon}
                    size={20}
                    color="rgba(0, 0, 0, 1)"
                />
            )}
            <TInput {...rest} ref={ref} />
        </Container>
    )
}

Input.propTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Input.defaultProps = {
    icon: null,
    style: {},
}

export default forwardRef(Input)
