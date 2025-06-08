import React from 'react'

export default function Cards({ data, onclick, score, bestScore }) {

  const cards = data.slice(0, 12).map((card) => {
    return <div className="card" key={card.name} onClick={() => onclick(card.name)}>
      <img src={card.sprites.front_default} alt={card.name} />
    </div>
  })
  return (
    <main>
      <div className="score">
        <h2 className='scoreName'>Score: {score}</h2>
        <h2 className='scoreName'>Best Score: {bestScore}</h2>
      </div>
      <div className='cards'>
        {cards}
      </div>
    </main>
  )
}
