import React from 'react'
import { useAppContext } from './CalulatorState'

export default function Button({type,value}) {

    const calculator=useAppContext();

    //una vez que tnemos el usecontext tenemos que validar que tipo de boton presionamos

    function handleClick(){
        switch(type){
            case 'number':
                calculator.addNumber(parseInt(value));
                break;
            case 'operator':
                calculator.addOperation(value)
                break;
            case 'action':
                calculator.executeAction(value)
                break;
        }


    }
  return (
    <div>
        <button className='calculatorButton'  onClick={handleClick} >{value}</button>


    </div>
  )
}
