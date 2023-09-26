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

Section.componentName = "Section";

export default WithLogging(Section);