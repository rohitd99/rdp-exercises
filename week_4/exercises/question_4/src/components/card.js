function Card(props)
{
    const {title,imgSrc,imgAlt,category,timeToRead} = props;

    return(
        <>
            <article className="card">
                <div className="card--img">
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className="card--content">
                    <h2>{title}</h2>
                    <p><span>{category}</span><span>.</span><span>{timeToRead}</span></p>
                </div>
            </article>  
        </>
    );
}

export default Card;