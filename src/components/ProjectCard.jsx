export default function ProjectCard(){
    return(
        <div className="border-3 border-amber-600 rounded-xl cursor-pointer m-2.5 hidden transition-[0.5] relative">
            <img src={image} alt={title} className="w-full h-full bg-center bg-cover flex align-end transition-[0.5]"/>
            <h3 className="">{title}</h3>
            <p className="">{description}</p>
            <a className="absolute w-full h-full left-0 top-0 flex items-center justify-center text-sm tracking-tighter font-normal text-white text-opacity-80 opacity-0 z-20" href={link} target="_blank" rel="noopener noreferrer">Have a look!</a>
        </div>
    )
}