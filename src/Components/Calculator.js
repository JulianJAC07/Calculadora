import React from 'react'
import { CalculatorScreen } from './CalculatorScreen'
import { CalulatorState } from './CalulatorState'
import Button from './Button'
import '../App.css'

export const Calculator = () => {
  return (
    <CalulatorState>
        <div className='CalculatorContainer'>
          <CalculatorScreen/>
          <div className='container'>
             <Button  type="action" value="AC"/>
             <Button  type="operator" value="%"/>
             <Button  type="action" value="<="/>
             <Button  type="operator" value="/"/>
             <Button  type="number" value="7"/>
             <Button  type="number" value="8"/>
             <Button  type="number" value="9"/>
             <Button  type="operator" value="*"/>
             <Button  type="number" value="4"/>
             <Button  type="number" value="5"/>
             <Button  type="number" value="6"/>
             <Button  type="operator" value="-"/>
             <Button  type="number" value="1"/>
             <Button  type="number" value="2"/>
             <Button  type="number" value="3"/>
             <Button  type="operator" value="+"/>
             <Button  type="action" value="+/-"/>
             <Button  type="number" value="0"/>
             <Button  type="action" value="."/>
             <Button  type="action" value="="/>
        

          </div>

        </div>

        
        
      </ CalulatorState>
    
  )
}
