import React, { useContext } from 'react';
import { useState,useEffect,useRef,useCallback} from 'react';
import HabitInput from './components/habitinput';
import Habit from './components/habit';
import { initializeApp } from "firebase/app";
import { getFirestore,collection,query,onSnapshot,addDoc,serverTimestamp,orderBy,deleteDoc,doc,updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { DarkthemeContext } from './contexts/themecontext';

function App() {

    // Habits Array
    const [Habits,setHabits] = useState([]);
    const [darkTheme,setdarkTheme] = useState(false);

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAU0k0ptoGaTS7tMNArOQEKcQdVkCbAP3g",
        authDomain: "buildahabit-1e93e.firebaseapp.com",
        projectId: "buildahabit-1e93e",
        storageBucket: "buildahabit-1e93e.appspot.com",
        messagingSenderId: "569686856715",
        appId: "1:569686856715:web:e9d9a99de2b07cf933230e"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize db
    const db = getFirestore(app);

    // Styles depending on context
    const bgFrom = darkTheme ? "from-slate-800" : "from-indigo-800";
    const bgTo = darkTheme ? "to-slate-900" : "to-indigo-900";

    // Read Habits
    useEffect(() => {
        const q = query(collection(db,'habits'),orderBy('createdAt'));
        const unsubscribe = onSnapshot(q,(querySnapshot) => {
        let habitsArr = [];
        querySnapshot.forEach((doc) => {
            habitsArr.push({...doc.data(),id : doc.id})
        });
        setHabits(habitsArr);
        });
        return () => unsubscribe();
    },[]);
    

    // Add Habit to Database.
    const addHabit = async (habitText) => {

        const days = [];
        for(let i = 0;i < 21;i++)
        {
        days.push({
            id: uuidv4(),
            completed: false
        });
        }

        await addDoc(collection(db,'habits'),{
        createdAt: serverTimestamp(),
        name: habitText,
        days: days
        });  
    };

    // Delete a Habit
    const deleteHabit = async (id) => {
        await deleteDoc(doc(db,'habits',id));
    };
    
    // Update a Habit Name
    const updateHabitName = async (updatedName,id) => {
        await updateDoc(doc(db,'habits',id), {
            name: updatedName
        });  
    };
    
    // Update Habit checkbox
    const updateCheckBox = async (updatedDays,id) => {
        await updateDoc(doc(db,'habits',id),{
        days: updatedDays
        })
    };
    
    // Fire Confetti
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
        refAnimationInstance.current({
            ...opts,
            particleCount: Math.floor(200 * particleRatio)
        });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
        origin: { x:0,y: 0.75}
        });

        makeShot(0.2, {
        spread: 60,
        startVelocity: 75,
        origin: { x:0,y: 0.75}
        });

        makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        startVelocity: 75,
        origin: { x:0,y: 0.75}
        });

        makeShot(0.1, {
        spread: 120,
        startVelocity: 55,
        decay: 0.92,
        scalar: 1.2,
        origin: { x:0,y: 0.75}
        });

        makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
        origin: { x:0,y: 0.75}
        });

        makeShot(0.25, {
        spread: 56,
        startVelocity: 55,
        origin: { x:1,y: 0.75}
        });

        makeShot(0.2, {
        spread: 60,
        startVelocity: 75,
        origin: { x:1,y: 0.75}
        });

        makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        startVelocity: 75,
        origin: { x:1,y: 0.75}
        });

        makeShot(0.1, {
        spread: 120,
        startVelocity: 55,
        decay: 0.92,
        scalar: 1.2,
        origin: { x:1,y: 0.75}
        });

        makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
        origin: { x:0,y: 0.75}
        });
    }, [makeShot]);

    // JSX
    return (
        <DarkthemeContext.Provider value={darkTheme}>
            <div className={`min-h-[100vh] bg-gradient-to-r ${bgFrom} ${bgTo}`}>
            <header className="p-2 flex justify-end">
                <div className="p-4">   
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" onChange={() => setdarkTheme(prev => !prev)} value={darkTheme} class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-300 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {
                                darkTheme ? "Dark Mode" : "Light Mode"
                            }
                        </span>
                    </label>
                </div>
            </header>
            <main className="flex justify-center p-4 md:p-12 lg:p-14">
                <div className="max-w-[800px] w-full flex flex-col gap-4">
                <HabitInput addHabit={addHabit}></HabitInput>
                <div className="flex flex-col gap-4">
                    {
                        Habits.map((habit) => {
                            return(
                            <Habit key={habit.id} habit={habit} deleteHabit={deleteHabit} updateHabitName={updateHabitName} updateCheckBox={updateCheckBox} fireConfetti={fire}>
                            </Habit>);
                    })
                    }
                </div>
                </div>
            </main>
            <footer></footer>
            <ReactCanvasConfetti refConfetti={getInstance} className="w-full h-full pointer-events-none fixed top-0 left-0"></ReactCanvasConfetti>
            </div>
        </DarkthemeContext.Provider>
);
}

export default App;
