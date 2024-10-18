import { Badge, Box, Card, Group, Table } from '@mantine/core'
import React from 'react'

const OutputDisplay = (props) => {
    const value: string = props.displayValue
    const resultValue: string = props.resultDisplayValue

    return (
        <>
            <Box bg='white' h='25px' miw='50%'>
                {typeof value === 'string' ? value : 'placeholder'}
            </Box>
            <Box bg='gray' h='25px' miw='25%'>
                {typeof resultValue === 'string' ? resultValue : 'placeholder'}
            </Box>
        </>
        
    )
}

export default OutputDisplay
