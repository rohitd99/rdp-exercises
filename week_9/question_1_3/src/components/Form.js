import { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';
import { departments } from '../utils/utility';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { ACTIONS } from '../utils/utility';

function Form(props)
{
    const {dispatch} = props;
    const {isVisible,setIsVisible} = props;
    const [option,setOption] = useState("");
    const [name,setName] = useState("");
    const { register, handleSubmit,formState} = useForm();
    const {errors} = formState;

    const onSubmit = (data) => {
        setIsVisible(false);
        dispatch({
            type: ACTIONS.ADD,
            payload: {
                newEmp: {
                    id: uuidv4(),
                    name: data.name,
                    department: data.department
                }
            }
        });
    }

    return(
        <div className={`fixed left-0 top-0 w-full h-full flex ${isVisible ? '' : 'hidden'} items-center justify-center bg-gray-500/[0.5] p-4`}>
            <div className='bg-white shadow-lg max-w-xl w-full rounded-lg'>
                <div className="p-4 flex justify-between items-center">
                    <h1 className='text-lg'>Add an Employee</h1>
                    <AiFillCloseCircle className='text-red-500 text-2xl' onClick={() => setIsVisible(false)}></AiFillCloseCircle>
                </div>
                <div>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <div className='px-4 flex flex-col gap-2'>
                            <label htmlFor='name'>Your Name</label>
                            <input id="name" {...register("name", { required: true})} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" value={name} onChange={(e) => setName(e.target.value)}/>
                            <p className='text-red-500 text-sm'>
                                {
                                    errors.name?.type === "required" ? "Name is required" : ""
                                }
                            </p>
                        </div>
                        <div className='px-4 flex flex-col gap-2'>
                            <label htmlFor="departments">Select an option</label>
                            <select {...register("department", { required: true})} id="departments" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Select A Department'>
                                <option value={option} defaultValue>Select A Department</option>
                                {
                                    departments.map((dept) => {
                                        return(
                                        <option key={uuidv4()} onClick={() => setOption(dept)}>
                                            {dept}
                                        </option>
                                        );
                                    })
                                }
                            </select>
                            <p className='text-red-500 text-sm'>
                                {
                                    errors.department?.type === "required" ? "Department is required" : ""
                                }
                            </p>
                        </div>
                        <div className='px-4 flex flex-col items-center gap-2'>
                            <button type="submit" className="max-w-xs w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;