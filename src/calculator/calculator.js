import React,{useState} from 'react';
import './calculator.css';
const Calculator=()=>{
    const [result,setResult]=useState("");
    const clickButton=(event)=>{
        setResult(result.concat(event.target.value))
    }
    const clearDisplay=()=>{
        setResult("");
    }
    const calculate=()=>{
        setResult(eval(result).toString())
    }
    const backSpace=()=>{
        setResult(result.slice(0,result.length-1));
    }
    return(
        <div className='calc'>
            <div className='container'>
            <input type='text' placeholder='0' id='answer' value={result}/>
            <input type='button' value='7' onClick={clickButton}/>
            <input type='button' value='8' onClick={clickButton}/>
            <input type='button' value='9' onClick={clickButton}/>
            <input type='button' value='/' className='btn2' onClick={clickButton}/>
            <input type='button' value='4' onClick={clickButton}/>
            <input type='button' value='5' onClick={clickButton}/>
            <input type='button' value='6' onClick={clickButton}/>
            <input type='button' value='*' className='btn2' onClick={clickButton}/>
            <input type='button' value='1' onClick={clickButton}/>
            <input type='button' value='2' onClick={clickButton}/>
            <input type='button' value='3' onClick={clickButton}/>
            <input type='button' value='-' className='btn2' onClick={clickButton}/>
            <input type='button' value='0' onClick={clickButton}/>
            <input type='button' value='00' onClick={clickButton}/>
            <input type='button' value='.' onClick={clickButton}/>
            <input type='button' value='+' className='btn2' onClick={clickButton}/>
            <input type='button' value='Clear' className='btn1 btn2' onClick={clearDisplay}/>
            <input type='button' value='C' className=' btn2' onClick={backSpace}/>
            <input type='button' value='=' className=' btn2' onClick={calculate}/>
            </div>
        </div>

    );
}
export default Calculator;