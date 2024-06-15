import React from 'react'
import { useState } from 'react'
const StatisticLine = (props)=>{
  return(
    <>
      <tr>

        <td> 
        {props.text} 
        </td>
        <td>
        {(Number.isInteger(props.value) === false)? (props.value.toFixed(1)) :(props.value) } {props.suf}
        </td>
      </tr>
    </>
  );
}
const Statistics = (props) =>{
  if(props.good + props.bad + props.neutral == 0){
    return <>
      <p>No feedback given</p>
    </>
  }
  return <>
      <table>
      <tbody>

      <StatisticLine text={"good"} value={props.good}/>
      <StatisticLine text={"neutral"} value={props.neutral}/>
      <StatisticLine text={"bad"} value={props.bad}/>
      <StatisticLine text={"all"} value={props.good+props.neutral+props.bad}/>
      <StatisticLine text={"average"} value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
      <StatisticLine text={"positive"} value={(props.good/(props.good+props.neutral+props.bad))*100} suf={"%"}/>
      </tbody>
      </table>
  </>
}
function App() {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] =  useState(0);
  const [bad,setBad] =  useState(0);
  const handleInc = (func) =>{
    return () => func(state=>(state+1));
  }
  return (
    <div>
      <h1>
        give feedback
      </h1>
      <button onClick={handleInc(setGood)}>good</button>
      <button onClick={handleInc(setNeutral)}>neutral</button >
      <button onClick={handleInc(setBad)}>bad</button>
      <h1>statistics</h1>

      <Statistics good = {good} bad = {bad} neutral={neutral}/>
    </div>
  )
}

export default App
