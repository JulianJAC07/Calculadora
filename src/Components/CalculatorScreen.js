import React from 'react'
import {useAppContext} from "./CalulatorState"

export const CalculatorScreen = () => {
  //llamamos a los dato que pusimos en calculator state meidante el contextapp

  const calculator=useAppContext();
  return (
    <div className='calculatorscreen'>
        <div>
          <div className='Screen'>
            <span>
                memory:{calculator.memory}
            </span>
              
            <span>
               operation:{calculator.operation}
            </span>

            <span>
              Decimal: {calculator.isDecimal ? "Decimal": "Entero"}
            </span>
          </div>         
            
        </div>
        <div className='calculatorCurrentValue'>
          {calculator.currentValue} {calculator.isDecimal?'.': ""}</div>
    </div>
  )
}
