import { Button, Grid } from '@mantine/core'
import CalculatorButton from './calculatorButton'
import React, { useState } from 'react'
import { ButtonNames } from './ButtonNames'



const NumberPad = (props) => {
    const [ numberDigits, setNumberDigits ] = useState<number>()
    const ButtonOrder = [
        ButtonNames.close,
        ButtonNames.invert,
        ButtonNames.ac,
        ButtonNames.one,
        ButtonNames.two,
        ButtonNames.three,
        ButtonNames.four,
        ButtonNames.five,
        ButtonNames.six,
        ButtonNames.seven,
        ButtonNames.eight,
        ButtonNames.nine,
        ButtonNames.zero,
        ButtonNames.add,
        ButtonNames.subtract,
        ButtonNames.multiply,
        ButtonNames.divide,
        ButtonNames.equal,
    ]

    const ButtonList : React.JSX.Element[] = [

    ]

    for (let i = 0; i < ButtonOrder.length; i++) {
        ButtonList.push(<CalculatorButton buttonValue={ButtonOrder[i]} onButtonClick={() => pushButton(ButtonOrder[i])} />)
    }

    const appendDigit = (newDigit: number) => {
        const newNumber = (numberDigits) ? numberDigits * 10 + newDigit : newDigit
    }

    const pushButton = (buttonName: string, value?: number) => {
        console.log(buttonName, 'button name')
        if (!isNaN(+buttonName)) {

        } else {
            props.updateParent(buttonName)
        }
        
        // if (!isNaN(+buttonName)) {
        //     props.updateParent(buttonName)
        // } else if (buttonName === ButtonNames.close){
        //     console.log('shut')
        // } else {
        //     props.updateParent(buttonName)
        // }
    }

    // const buttonNames = [
    //     'one'
    // ]

    // for (i=1; i<=9; i++) {
    //     numberButtons.push(
    //         <CalculatorButton>
    //             i
    //         </CalculatorButton>
    //     )
    // }
    return(
        // {numberButtons}
        // <Nums />
        // <div>heh</div>
        <Grid>
            <Grid.Col>
                {ButtonList.slice(0, 3)}
            </Grid.Col>
            <Grid.Col>
                {ButtonList.slice(3, 6)}
            </Grid.Col>
            <Grid.Col>
                {ButtonList.slice(6, 9)}
            </Grid.Col>
            <Grid.Col>
                {ButtonList.slice(9, 12)}
            </Grid.Col>
            <Grid.Col>
                {ButtonList.slice(12, 15)}
            </Grid.Col>
            <Grid.Col>
                {ButtonList.slice(15, 18)}
            </Grid.Col>
            {/* <Grid.Col>
                <CalculatorButton buttonValue={1}>
                    
                </CalculatorButton>
                <CalculatorButton buttonValue={ButtonNames.two}>
                    2
                </CalculatorButton>
                <CalculatorButton buttonValue={1}>
                    3
                </CalculatorButton >
            </Grid.Col>
            <Grid.Col>
            <CalculatorButton buttonValue={1}>
                    4
                </CalculatorButton>
                <CalculatorButton buttonValue={1}>
                    5
                </CalculatorButton>
                <CalculatorButton buttonValue={1}>
                    6
                </CalculatorButton>
            </Grid.Col>
            <Grid.Col>
                <CalculatorButton>
                    7
                </CalculatorButton>
                <CalculatorButton>
                    8
                </CalculatorButton>
                <CalculatorButton>
                    9
                </CalculatorButton>
            </Grid.Col>
            <Grid.Col>
                <CalculatorButton>
                    +/-
                </CalculatorButton>
                <CalculatorButton>
                    0
                </CalculatorButton>
                <CalculatorButton>
                    .
                </CalculatorButton>
            </Grid.Col> */}
        </Grid>
    )
}

export default NumberPad