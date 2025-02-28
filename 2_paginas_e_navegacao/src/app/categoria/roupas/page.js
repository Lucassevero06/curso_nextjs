import React from 'react'

const RoupasPage = () => {
    const roupas = [
        {
            "id": 1,
            "name": "Camiseta",
            "price": 19.90
        },
        {
            "id": 2,
            "name": "Calça",
            "price": 49.90
        },
        {
            "id": 3,
            "name": "Jaqueta",
            "price": 79.90
        }
    ];
  return (
    <div>
        <h1 className="flex flex-col gap-8 row-start-2 items-center sm:items-start">Roupas</h1>
        
        <ul>
            {roupas.map((roupa) => {
                return <li key={roupa.id}>
                    {roupa.name}
                </li>
            })}
        </ul>
    </div>
  )
}

export default RoupasPage
