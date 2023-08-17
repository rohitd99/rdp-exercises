function Button(props)
{
    const {text,handleClick} = props;

    return(
        <div className="commitMessage__generateBtn">
            <button onClick={handleClick}>{text}</button>
        </div>
    );
}

export default Button;