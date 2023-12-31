import { useState } from 'react'
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
console.log(puppies);
  return (
    <>
    {
      puppies.map((puppy)=>{
        return <p onClick={()=>{setFeatPupId(puppy.id)}} key = {puppy.id}>{puppy.name}</p>
      })

    }
    { featPupId && <p>{featPupId} </p>}
   
    </>
  )
}

export default App
