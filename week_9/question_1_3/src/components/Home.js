import {useState,useReducer} from 'react';
import {createPortal} from 'react-dom';
import {Link} from 'react-router-dom';
import { employeesList } from '../utils/utility';
import { departments } from '../utils/utility';
import { v4 as uuidv4 } from 'uuid';
import { ACTIONS } from '../utils/utility';
import View from './View';
import Form from './Form';

function reducer(state,action)
{
  switch(action.type)
  {
    case ACTIONS.ADD:
      return [...state,action.payload.newEmp];
    case ACTIONS.DELETE:
      return state.filter(emp => emp.id !== action.payload.id);
    default:
      return employeesList;
  }
}

function Home(props)
{
  const {filter} = props;
  const [state,dispatch] = useReducer(reducer,employeesList);
  const [dropdownVisible,setDropdownVisible] = useState(false);
  const [modalVisible,setModalVisible] = useState(false);

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col gap-4 justify-center p-4">
      <div className='flex gap-4 justify-center'>
        <div className='relative'>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setDropdownVisible(prev => !prev)}>Filter<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="dropdown" className={`z-10 ${dropdownVisible ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}>
              <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                {
                    departments.map((dept) => {
                        return(
                          <li key={uuidv4()} className="block hover:bg-gray-100">
                            <Link className='block w-full h-full px-4 py-2' 
                                  to={`/${dept.toLowerCase()}`} 
                                  onClick={() => setDropdownVisible(false)}
                            >
                              {dept}
                            </Link>
                          </li>
                        );
                    })
                }
                <li className="block hover:bg-gray-100">
                  <Link className='block w-full h-full px-4 py-2' onClick={() => setDropdownVisible(false)} to="/">All</Link>
                </li>
              </ul>
          </div>
        </div>
        <div>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => {setModalVisible(prev => !prev)}}>Add an Employee</button>
          {
            modalVisible 
            &&
            createPortal(<Form isVisible={modalVisible} setIsVisible={setModalVisible} dispatch={dispatch}></Form>,document.body)
          }
        </div>
      </div>
      <View dispatch={dispatch} state={state} view={filter}></View>
    </div>
  );
}

export default Home;