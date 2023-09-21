import WithLogging from "./withLogging";

function Section(props)
{
    const {text} = props;
    return(
        <section>
            {text}
        </section>
    );
}

export default WithLogging(Section);