import WithFadeIn from "./withFadeIn";

function Card(props)
{
    const {src,text} = props
    return(
        <div className="w-64 h-96 text-white bg-zinc-500 rounded-lg">
            <div className="p-2">
                <img src={src} alt="People" className="rounded-lg"/>
            </div>
            <div className="p-2">
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default WithFadeIn(Card);