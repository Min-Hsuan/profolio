import Lightbox from "../components/Lightbox";

export default function GraphicPage({graphicCards, openLightbox, selectedCard, closeLightbox}){
    return(
        <>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 justify-left gap-5">
                {graphicCards.map((card,i)=>(
                    <div key={i} className="card relative border-2 border-amber-500 rounded-lg overflow-hidden w-full h-64 transition-transform duration-300  cursor-pointer" onClick={()=>openLightbox(card)}onKeyDown={(e)=>e.key === 'Enter' && openLightbox(card)} tabIndex={0} role="button" aria-label={`View ${card.title} in lightbox`} >
                        <div className="absolute inset-0 flex items-center justify-center text-white text-base font-medium opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">Click to see details</div>
                        <img src={card.bgc} alt={card.title} loading="lazy" className="w-full h-full object-cover transition-filter duration-300 hover:brightness-75 hover:scale-105" />
                    </div>
                ))}
            </div>
            <Lightbox card={selectedCard} onClose={closeLightbox} />
        </>
    )
}