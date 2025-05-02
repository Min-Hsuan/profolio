export default function WebPage({webCards}){
    return(
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {webCards.map((card,i)=>(
                <a href={card.link} key={i} target="_blank" rel="noopener noreferrer" className="w-full card relative border-2 border-amber-500 rounded-lg overflow-hidden transition-transform duration-300"
                aria-label={`View ${card.title} project`} >
                    <div className="text absolute inset-0 flex items-center justify-center text-white text-base font-medium opacity-0 transition-opacity duration-300 hover:opacity-100 z-20">View it</div>
                    <img src={card.bgc} alt={card.title} loading="lazy" className="w-full h-64 object-cover transition-filter duration-300 hover:brightness-75" />
                    <div className="flex flex-warp absolute bottom-0 left-0 z-10">
                        {card.hashtag.map((tag,j)=>(
                            <span key={j} className="inline-block px-2 py-1 m-1 text-xs bg-gray-400 text-white opacity-85 rounded-full">{tag}</span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    )
}