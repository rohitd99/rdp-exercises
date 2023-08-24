import React,{useState} from 'react';
import Button from "./button";

function SignUp()
{
    const [formData,setFormData] = useState({ firstName: '', lastName: '', email: '' });

    function handleClick()
    {   
        console.log(formData.firstName);
        console.log(formData.lastName);
        console.log(formData.email);
        alert("Your Data is submitted, Thank You !");
    }

    return(
        <div className="signUp">
            <form>
                <div className='inputField'>
                    <label htmlFor="firstName">First Name :</label>
                    <input type="text" id="firstName" name="lastName" value={formData.firstName} onChange={(e) => setFormData(
                        {...formData,firstName:e.target.value}
                    )}></input>
                </div>
                <div className='inputField'>
                    <label htmlFor="lastName">Last Name :</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => setFormData(
                        {...formData,lastName: e.target.value}
                    )}></input>
                </div>
                 <div className='inputField'>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="lastName" name="email" value={formData.email} onChange={(e) => setFormData(
                        {...formData,email: e.target.value}
                    )}></input>
                </div>
                <div>
                    <Button type="submit" text="Submit" handleClick={handleClick}></Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;