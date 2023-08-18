function CardTopic(props)
{
    const {title,timeline,comments,shares} = props;
    return(
        <div className="card__topic">
            <h3>{title}</h3>
            <p>
              <span>{timeline}</span><span>&#8226;</span><span>{comments + " comments"}</span>
              <span>&#8226;</span><span>{shares + " shares"}</span>
            </p>
        </div>
    );
}

export default CardTopic;