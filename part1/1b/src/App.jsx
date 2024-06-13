
// const Part = (props) =>{
//   return (
//     <p>
//         {props.part} {props.exercises}
//     </p>
//   )
// }
// const Content = (props) =>{
//   return(
//     <div>
//       <Part part = {props.part1} exercises={props.exercises1}/>
//       <Part part = {props.part2} exercises={props.exercises2}/>
//       <Part part = {props.part3} exercises={props.exercises3}/>
//     </div>
//   )
// }
// const Total = (props) =>{
//   return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
// }

// // < 1.3 >>>>>>>>>>>>>>>>
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content 
//       part1={part1.name} 
//       part3={part3.name} 
//       part2={part2.name}
//       exercises1 = {part1.exercises}
//       exercises2={part2.exercises}
//       exercises3 = {part3.exercises}
//       />
//       <Total 
//       exercises1 = {part1.exercises}
//       exercises2={part2.exercises}
//       exercises3 = {part3.exercises} 
//       />
    
//     </div>
//   )
// }
// < 1.3 />>>>>>>>>>>>>
////////////////////////////////////////////////////////////////////////////////////////////
// const Part = (props) =>{
//   // console.log(props);
//   return (
//     <p>
//         {props.part.name} {props.part.exercises}
//     </p>
//   )
// }
// const Content = (props) =>{
//   return(
//     <div>
//       <Part part = {props.parts[0]}/>
//       <Part part = {props.parts[1]}/>
//       <Part part = {props.parts[2]}/>
//     </div>
//   )
// }
// const Total = (props) =>{
//   return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
// }

// // < 1.4 >>>>>>>>>>>>>>>>
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts = {parts}/>
//       <Total parts = {parts}/>
//     </div>
//   )
// }
// // < 1.4 />>>>>>>>>>>>>
// ////////////////////////////////////////////////////////////////////////////////////////////


const Header = (props) =>{
  return <h1>{props.course}</h1>
}
const Part = (props) =>{
  // console.log(props);
  return (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
  )
}
const Content = (props) =>{
  return(
    <div>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>
  )
}
const Total = (props) =>{
  return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}
export default App