import Lightbox from "../components/Lightbox";

export default function GraphicPage({graphicCards, openLightbox, selectedCard, closeLightbox}){
    return(
        <>
            <div className="flex flex-wrap justify-start m-4">
                {graphicCards.map((card,i)=>(
                    <div key={i} className="card relative m-2 border-2 border-amber-500 rounded-lg overflow-hidden w-64 h-64 transition-transform duration-300 hover:scale-105" onClick={()=>openLightbox(card)}onKeyDown={(e)=>e.key === 'Enter' && openLightbox(card)} tabIndex={0} role="button" aria-label={`View ${card.title} in lightbox`} >
                        <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-light opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opaticy-50">{card.info}</div>
                        <img src={card.bgc} alt={card.title} loading="lazy" className="w-full h-full object-cover transition-filter duration-300 hover:brightness-75" />
                    </div>
                ))}
            </div>
            <Lightbox card={selectedCard} onclose={closeLightbox} />
        </>
    )
}