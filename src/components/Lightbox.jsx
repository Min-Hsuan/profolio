export default function Lightbox({card, onClose}){
    if(!card) return null
    const handleKeyDown = (e)=>{
        if(e.key === 'Escape') onClose()
    }
    
    
    return (
        <div className="fixed inset-0 bg-gray-800/85 bg-opacity-75 flex items-center justify-center z-50" role="dialog" aria-labelledby="lightbox-title" aria-modal="true" tabIndex={-1} onKeyDown={handleKeyDown} onClick={onClose}>
            <div className="relative rounded-lg p-4 max-w-4xl w-full mx-4" onClick={e=>e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-white text-2xl focus:outline focus:outline-amber-500 cursor-pointer" onClick={onClose} aria-label="Close lightbox">&times;</button>
                <h4 id="lightbox-title" className="text-sm font-normal mb-4 text-white tracking-wide sm:w-[80%] sm:mx-auto sm:text-[0.925rem]" dangerouslySetInnerHTML={{__html:card.en_info}}/>
                <img src={card.bgc} alt={card.title} loading="lazy" className="w-full h-auto max-h-[80vh] object-contain" />
            </div>
        </div>
    )
}