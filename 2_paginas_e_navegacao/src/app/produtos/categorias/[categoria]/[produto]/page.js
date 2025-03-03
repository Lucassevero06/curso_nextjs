import React from 'react'

const Productpage = ({params}) => {
    const produto = params.produto
  return (
    <div>
      <h1>Vendo produto: {produto}</h1>
    </div>
  )
}

export default Productpage
