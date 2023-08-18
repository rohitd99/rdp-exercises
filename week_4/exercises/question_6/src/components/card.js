import CardTopic from "./cardTopic";

function Card(props)
{
    const {selectedTopics} = props;
    
    return(
        <div className="card">
            {
                selectedTopics.map(cardTopic => {
                    return (
                        <CardTopic title={cardTopic.title} timeline={cardTopic.timeline} comments={cardTopic.comments} shares={cardTopic.shares}>
                        </CardTopic>
                    );    
                })
            }
        </div>
    );
}

export default Card;