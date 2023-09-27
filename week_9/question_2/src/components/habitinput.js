import { useContext, useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import { DarkthemeContext } from '../contexts/themecontext';

function HabitInput(props)
{
    // Props
    const {addHabit} = props;
    
    // States
    const [validInput,setValidInput] = useState(true);
    const [habitText,setHabitText] = useState("");

    // Context
    const darkTheme = useContext(DarkthemeContext);

    // Styles depending on context
    console.log(darkTheme);
    const btnBg = darkTheme ? "bg-gray-600" : "bg-sky-500";
    const btnBgHover = darkTheme ? "hover:bg-gray-700" : "hover:bg-sky-300";
    const btnBgOutline = darkTheme ? "focus:ring-gray-800" : "focus:ring-sky-800";
    const inputBg = darkTheme ? "bg-gray-600" : "bg-gray-50";
    const inputText = darkTheme ? "text-white" : "text-gray-900";
    const inputFocus = darkTheme ? "focus:ring-gray-900 focus:border-gray-900" : "focus:ring-blue-500 focus:border-blue-500";

    // Handlers
    function handleClick()
    {
        if(habitText === "")
        {
            setValidInput(false);
            setTimeout(() => {
                setValidInput(true);
            },3000);

        }else{
            setValidInput(true);
            addHabit(habitText);
            setHabitText("");
        }
    }

    // JSX
    return(
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-center text-slate-50 animate-fade-down animate-duration-1000 animate-delay-500">Build A Habit</h1>
            <form >
              <label htmlFor='habit' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white animate-fade-down animate-duration-1000 animate-delay-500">Your New Habit</label>
              <div className="flex justify-between gap-4 animate-fade-down animate-duration-1000 animate-delay-500">
              <input type='text' placeholder='Name A Habit You Want To Build' className={validInput ? `inline ${inputBg} border border-gray-300 ${inputText} text-sm rounded-lg ${inputFocus} block w-full p-2.5` : `inline ${inputBg} border border-gray-300 ${inputText} text-sm rounded-lg ${inputFocus} block w-full p-2.5 border-red-500 border-2`} name='habit' value={habitText} onChange={(e)=> setHabitText(e.target.value)} required></input>
              <button className={`p-4 ml-2 ${btnBg} text-slate-100 rounded-lg ${btnBgHover} focus:ring-4 focus:outline-none ${btnBgOutline}`} onClick={handleClick} type='button'><AiOutlinePlus></AiOutlinePlus></button>
              </div>
            </form>
          </div>
    );
}

export default HabitInput;