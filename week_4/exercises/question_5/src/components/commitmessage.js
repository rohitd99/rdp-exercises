import React,{useState, useEffect} from 'react';
import Button from './button';

function CommitMessage()
{
    const [message,setMessage] = useState("");
    
    useEffect(() => {
        getMessage("https://whatthecommit.com/index.json");
    }, []);

    async function getMessage(resource)
    {
        const response = await fetch(resource);
        const data = await response.json();
        const newMessage = data.commit_message;
        console.log(newMessage);
        setMessage(newMessage);
        
    }

    function handleClick()
    {
        getMessage("https://whatthecommit.com/index.json");

    }

    return(
        <div className="commitMessage__container">
            <h1 className='commitMessage__title'>Commit Message</h1>
            <p className='commitMessage__message'>&quot;{message}&quot;</p>
            <Button text="Generate New Message" handleClick={handleClick}></Button>
        </div>
    );
}

export default CommitMessage;