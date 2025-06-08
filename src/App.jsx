import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
function App() {
  const [data, setData] = useState([])
  const [isClicked, setIsClicked] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    try {
      
      const fetchData = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=24`)
        const fetchedData = await res.json()
        
        const detailedPoke = await Promise.all(
          fetchedData.results.map(async (poke) => {
            const res = await fetch(poke.url)
            return await res.json()
          })
        )
        setData(detailedPoke)
      }
      fetchData()
    } catch (error) {
      console.error("the error is: " + error);
    }
  }, [])

 function handleClick(index) {
     const shuffled = [...data].sort(() => 0.5 - Math.random())
    
     if(!isClicked.includes(index)) {
        setIsClicked(prev => [...prev, index])
        setScore(score + 1)
     } else {
       setIsClicked([])
       if(score > bestScore) {
         setBestScore(score)
        }
        setScore(0)
     }

     setData(shuffled)
     
  }

  return (
    <div>
      <Header />
      {data && <Cards data={data} onclick={handleClick} score={score} bestScore={bestScore}/>}
    </div>
  )
}

export default App