import React, { useEffect, useState } from 'react'
// import '@mantine/core/styles.css'
import { Button, Paper, Text, Group, CloseButton, Center, Space, Box, ButtonStylesNames } from '@mantine/core'
import NumberPad from './numberPad'
import OutputDisplay from './outputDisplay'
import { ButtonNames } from './ButtonNames'

const Calculator = () => {
    const [ currentValue, setCurrentValue ] = useState<Number>(0.0)
    const [ currentOperator, setCurrentOperator ] = useState<string>('')
    const [ history, setHistory ] = useState<number[]>([])
    const [ displayValue, setDisplayValue ] = useState('e')
    const [ lastInput, setLastInput ] = useState<string>()
    const [ result, setResult ] = useState<String>('')

    useEffect(() => {

    }, [displayValue])

    const updateDisplay = (newVal: string) => {
        console.log(newVal, 'clicked button')
        // console.log(typeof ButtonNames.ac, 'does it match')
        if (newVal === '=') {
            if (history.length > 1) {
                // const newResult = calculate(Number(result), newInputNum, currentOperator)
                const newResult = calculate(
                    history[history.length - 2], 
                    history[history.length - 1], 
                    currentOperator
                )
                setResult(newResult)
                console.log(newResult)
            } else {
                console.log(history, 'did not calculate cause insufficient history')
            }
            // const newInputNum: number = 15
            // const newResult = calculate(Number(result), newInputNum, currentOperator)
            // setResult(newResult)
        } else if (newVal === 'AC') {
            console.log('erase')
            setHistory([])
        } else if (newVal in [
            ButtonNames.add, 
            ButtonNames.subtract, 
            ButtonNames.multiply,
            ButtonNames.divide
        ]) {
            setCurrentOperator(newVal)
        } else if (!isNaN(+newVal)) {
            console.log('else button')
        // setDisplayValue(displayValue + newVal)
        // console.log(displayValue)
        // setLastInput(newVal)
            setHistory(history => [...history, Number(newVal)])
        }
        
    }

    const updateHistory = () => {
        history[history.length - 1]
    }

    const updateResult = () => {
        // displayValue.split(' ')


    }

    const calculate = (left: number, right: number, operator: string) => {
        console.log(left, right, currentOperator, 'calculate ops')
        switch (operator) {
            case '+':
                return (left + right).toString()
            case '-':
                return (left - right).toString()
            case '\u00D7':
                return (left * right).toString()
            case '\u00F7':
                if (right === 0) {
                    return 'Cannot divide by zero'
                } else {
                    return (left / right).toString()
                }
            default:
                return ''
        }
    }
    
    return(
        <div>
            <Center>
                <Box bg='gray.5' w='30%' h='50%'>
                {/* <CookiesBanner /> */}
                {/* <Button /> */}
                <Center>
                    <OutputDisplay displayValue={displayValue} resultDisplayValue={result} />
                </Center>
                
                <NumberPad updateParent={updateDisplay} />
                </Box>
            </Center>
        </div>
        
    )
}

export default Calculator
