import { Button } from '@mantine/core'
import React from 'react'
/*
button values can be:
0-9, +/-, +, -, *, /, =
*/

const ButtonValues = {
    '1': 1,
}

const CalculatorButton = (props) => {
    const buttonValue = props.buttonValue
    const onButtonClick = props.onButtonClick || Function

    return (
        <Button size='md'
            onClick={onButtonClick}
        >
            {buttonValue}
        </Button>
    )
}

export default CalculatorButton
