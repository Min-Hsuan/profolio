export default function ProjectCard(){
    return(
        <div className="border-1">
            <img src={image} alt={title} className="img"/>
            <h3 className="">{title}</h3>
            <p className="">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Have a look!</a>
        </div>
    )
}