export default function WebPage({webCards}){
    return(
        <div className="flex flex-wrap justify-start m-4">
            {webCards.map((card)=>(
                <a href={card.link} key={card.id} target="_blank" rel="noopener noreferrer" className="card relative m-2 border-2 border-amber-500 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                aria-label={`View ${card.title} project`} >
                    <div className="word absolute inset-0 flex items-center justify-center text-white text-base font-medium opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bo-opacity-50">View it</div>
                    <img src={card.bgc} alt={card.title} loading="lazy" className="w-full h-64 object-cover transition-filter duration-300 hover:brightness-75" />
                    <div className="flex flex-warp m-2">
                        {card.hashtag.map((tag,i)=>(
                            <span key={i} className="inline-block px-2 py-1 m-1 text-xs bg-black bg-opacity-50 text-white rounded-full">{tag}</span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    )
}