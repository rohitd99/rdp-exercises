import React,{useState} from 'react';
import Button from "./button";

function SignUp()
{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");

    function handleClick()
    {   
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        alert("Your Data is submitted, Thank You !");
    }

    return(
        <div className="signUp">
            <form>
                <div className='inputField'>
                    <label htmlFor="firstName">First Name :</label>
                    <input type="text" id="firstName" name="lastName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className='inputField'>
                    <label htmlFor="lastName">Last Name :</label>
                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                 <div className='inputField'>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="lastName" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <Button type="submit" text="Submit" handleClick={handleClick}></Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;