
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebPage from './pages/Webpage';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import SwitchButton from './components/SwitchButton';
import GraphicPage from './pages/GraphicPage';


const API = import.meta.env.VITE_API_URL
function App() {
  const [modeId, setModeId] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [webCards, setWebcards] = useState([])
  const [graphicCards, setGraphicCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)

  
  useEffect( ()=>{
    async function fetchData(){
      try{
        const response = await fetch(API)
        if(!response.ok) throw new Error('Failed to fetch data')
          const data = await response.json()
          const transformedData = Object.values(data)[0]
          setWebcards(transformedData.web)
          setGraphicCards(transformedData.graphic.map(card=>({...card, isCardOpen: false})))
      }catch(error){
          console.log(error)
      }finally{
        setTimeout(()=> setIsLoading(false),2000)
      }
    }
    fetchData() 
  },[])

  const switchMode = (delta)=>{
    setModeId((prev) => (prev + delta + 2) % 2);
  }
  const openLightbox = (card)=>{
    setSelectedCard(card)
    document.body.style.overflow = 'hidden'

  }
  const closeLightbox = ()=>{
    setSelectedCard(null)
    document.body.style.overflow = 'auto'
  }
  return (
    <div>
     {isLoading? <Loading/>
     : <div className="content p-4 md:p-8 min-xl:w-7xl mx-auto">
        <SwitchButton modeId={modeId} switchMode={switchMode}/>
        {modeId === 0 && <WebPage webCards={webCards} />}
        {modeId === 1 && <GraphicPage graphicCards={graphicCards} selectedCard={selectedCard} openLightbox={openLightbox} closeLightbox={closeLightbox} />}

     </div>}
    </div>
  )
}

export default App
