export default function Lightbox({card, onClose}){
    if(!card) return null
    const handleKeyDown = (e)=>{
        if(e.key === 'Escape') onClose()
    }
    
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" role="dialog" aria-labelledby="lightbox-title" aria-modal="true" tabIndex={-1} onKeyDown={handleKeyDown} onClick={onClose}>
            <div className="relative bg-gray-900 rounded-lg p-4 max-w-4xl w-full mx-4" onClick={e=>e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-white text-2xl focus:outline focus:outline-amber-500" onClick={onClose} aria-label="Close lightbox">&times;</button>
                <h4 id="lightbox-title" className="text-lg font-medium mb-4">{card.info}</h4>
                <img src={card.bgc} alt={card.title} loading="lazy" className="w-full h-auto max-h-[80vh] object-contain" />
            </div>
        </div>
    )
}