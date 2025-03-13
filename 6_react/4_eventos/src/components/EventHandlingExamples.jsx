import React from 'react'

const EventHandlingExamples = () => {

   const handleClick = () => {
      console.log("hello world")
   }

   return (
      <div>
         <button onClick={() => alert("oi")}>Oi</button>
         <button onClick={handleClick}>Handle</button>
         <br/>
      </div>
   )
}

export default EventHandlingExamples
