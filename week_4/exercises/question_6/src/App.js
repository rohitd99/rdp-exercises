import './App.scss';
import Header from './components/header';
import Card from './components/card';
import React,{useState} from "react";

function App() {


    const [selectedTopics,setSelectedTopic] = useState([{
            title: "Does drinking coffee make you smarter?",
            timeline: "5h ago",
            comments: 5,
            shares: 2
        },
        {
            title: "So you've bought coffee... now what?",
            timeline: "2h ago",
            comments: 3,
            shares: 2
        }]); 

    return (
        <div className="App">
            <div className='container'>
                <Header setTopic={setSelectedTopic}></Header>
                <main>
                    <Card selectedTopics={selectedTopics}>
                    </Card>
                </main>
            </div>
        </div>
    );
}

export default App;
