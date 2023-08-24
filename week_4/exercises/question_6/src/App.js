import './App.scss';
import Header from './components/header';
import Card from './components/card';
import React,{useState} from "react";

function App() {

    const [selectedTab, setSelectedTab] = useState(0)
    const Tabs = [
        [
            {
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
            }
        ],
        [
            {
                title: "Is tech making coffee better or worse?",
                timeline: "Jan 27",
                comments: 29,
                shares: 16
            },
            {
                title: "The most innovative things happening in coffee",
                timeline: "Mar 19",
                comments: 24,
                shares: 12
            }
        ],
        [
            {
                title: "Ask me anything: 10 answers to your questions about coffee",
                timeline: "2d ago",
                comments: 9,
                shares: 5
            },
            {
                title: "The worst advice we've ever heard about coffee",
                timeline: "4d ago",
                comments: 1,
                shares: 2
            }
        ]
    ];

    return (
        <div className="App">
            <div className='container'>
                <Header setSelectedTab={setSelectedTab} selectedTab={selectedTab}></Header>
                <main>
                    <Card selectedTopics={Tabs[selectedTab]}>
                    </Card>
                </main>
            </div>
        </div>
    );
}

export default App;
