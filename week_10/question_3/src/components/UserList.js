import {useState} from 'react';
import User from './User';

function UserList(props)
{
    const {users} = props;
    const [theme,setTheme] = useState(false);

    return(
        <div className='w-full flex flex-col gap-4 items-center'>
            <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setTheme(prev => !prev)}>Theme</button>
            <ul className='w-full flex flex-col gap-4 items-center p-4'>
                {
                    users.map((user,index) => {
                        if(index % 2 === 1)
                        {
                            return (<User key={user.id} user={user} theme={theme}></User>);
                        }else{
                            return (<User key={user.id} user={user}></User>);
                        }
                    })
                }
            </ul>
        </div>
    
    );
}
export default UserList;