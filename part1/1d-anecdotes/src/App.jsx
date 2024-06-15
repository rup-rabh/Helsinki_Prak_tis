import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let randomNumber;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [highestVoted,setHighestVoted]= useState(0);
  const handleNext = () =>{
    randomNumber = Math.floor(Math.random() * anecdotes.length); 
    console.log(randomNumber);
    setSelected(randomNumber);
  }
  const handleVote = ()=>{
    const newVotes = [...votes];
    newVotes[selected] += 1;
    if(newVotes[selected] >newVotes[highestVoted]){
      setHighestVoted(selected);
    }    
    setVotes(newVotes);
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>

        {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={() => handleVote()}>votes</button>
      <button onClick={() => handleNext()}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      
      {anecdotes[highestVoted]}
      <br />
      has {votes[highestVoted]} votes
    </div>
  )
}
//Earlier I found highest voted anecdote by looping through votes
//But I though its way easier to decide it during votes, just added an extra state but it lowers time consuming ig lol
export default App