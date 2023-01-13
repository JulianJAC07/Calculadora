import React, { createContext, useContext, useState } from 'react'
//creo contexto para hacer las sumas y poner los valores
const AppContext=createContext({
    /*state*/
    memory:null,
    operation:null,
    currentValue:0,
    isDecimal:false,
    /*methods (metodos)*/
    addNumber:(value)=>{},
    addOperation:(operation)=>{},
    getResult:()=>{},
    executeAction:(action)=>{},
});

export const CalulatorState = ({children}) => {
    //creo los estados para que cambien los estados de los valores
  const [memory,setmemory]=useState(null);
  const [operation,setOperation]=useState(null);
  const [currentValue, setCurrentvalue]=useState(0)
  const [isReset,setReset]=useState(true)
  const [isDecimal,setisDecimal]=useState(false)



  //creo las funciones de los estados (nombres genericos)

  function handleAddNumber(value){
    if(isReset){
        //is reset es cuando el valor esta vacio
        if(value === '.'){
            setisDecimal(true);
            const point = isDecimal ? '.':"";
            
            const newvalue=currentValue.toString()+point+value.toString();
            
            setCurrentvalue(parseFloat(newvalue));
            
            setReset(false);
            
            setisDecimal(false);

        }else{
            if(value==='.'){
                setisDecimal(true)
            }else{
                const point = isDecimal ? '.':"";
            
                const newvalue=currentValue.toString()+point+value.toString();

                setisDecimal(false);
                setCurrentvalue(parseFloat(newvalue));
            }
            

        }
        setCurrentvalue(parseInt(value))
        setReset(false)
    }else{
        const newvalue=currentValue.toString()+value;
        setCurrentvalue(parseFloat(newvalue))
    }

  }

  function handleAddOperation(op){
    if(currentValue){
        if(operation){
            //si  hay operacion tenemos que resolver
            handlegetResult( );
            setOperation(op);

        }else{
            setOperation(op);
            setmemory(currentValue);
            setCurrentvalue(0);
            setReset(true);

        }
    }

  }

  function handlegetResult(){
    let result =0;
    if(currentValue && operation && memory ){
        switch (operation){
            case "+":
            result=parseFloat(currentValue)+ parseFloat(memory);
            break;

            case "-":
            result=parseFloat(memory)- parseFloat(currentValue);
            break;

            case "/":
            result=parseFloat(memory)/ parseFloat(currentValue);
            break;

            case "*":
            result=parseFloat(currentValue)* parseFloat(memory);
            break;

            case "%":
            result=parseFloat(memory)/ 100*parseFloat(currentValue);
            break;
            default:
        }
        setCurrentvalue(result);
        setOperation(null);
        setmemory(result);
        setReset(true);

    }

  }

  function clean(){
    setCurrentvalue(0);
    setOperation(null);
    setmemory(0);
    setReset(true);
    setisDecimal(false);

  }

  function deleteNumber(){
   // setCurrentvalue(parseInt(currentValue/10))
   const index = currentValue.toString().indexOf(".")
   if(index>0){
    const numberofDecimal = currentValue.toString().slice(index+1).length;

    if(numberofDecimal===1){
       const min =Math.floor(currentValue);
       setCurrentvalue(min)

    }else{
        const newNumber =parseFloat(currentValue).toFixed(numberofDecimal-1);
        setCurrentvalue(newNumber)
    }

   }else{
    setCurrentvalue(parseInt(currentValue/10))
   }

  }

  function changesign(){
    setCurrentvalue(currentValue* -1)    
  }


  function convertoFloat(){
    if(currentValue.toString().indexOf(".")>0){

    }else{
        handleAddNumber(".")
    }
  }

  function handleExecuteAction(action){
    switch(action){
        case "=":
            handlegetResult();
            break;
        case "AC":
            clean()
            break;
        case "<=":
            deleteNumber();
            break;
        case "+/-":
            changesign();
            break;
        case ".":
            convertoFloat();
            break;
    }

  }



  return <AppContext.Provider value={{memory,operation,currentValue,
    isDecimal,addNumber:handleAddNumber,addOperation:handleAddOperation,getResult:handlegetResult,executeAction:handleExecuteAction,}}>{children}</AppContext.Provider>
}


export function useAppContext(){
    return useContext(AppContext);
}