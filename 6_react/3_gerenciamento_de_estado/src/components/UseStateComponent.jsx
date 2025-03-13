import { useState } from 'react'

const UseStateComponent = () => {
   const [count, setCount] = useState(0)

   const increment = () => {
      setCount((prevCount) => prevCount + 1) //usa o setCount para pegar o valor anterioro do count e somar + 1
      console.log(count)
   }

   const [user, setUser] = useState({
      name: "ana",
      age: 25,
      hobbies: ["Leitura", "Programação"]
   })

   return (
      <div>
         <h2>Contador</h2>
         <p>Voce clicou {count} vezes</p>

         <button onClick={increment}>Count</button>

         <p>Nome: {user.name} e Idade: {user.age}</p>

         
      </div>
   )
}

export default UseStateComponent
