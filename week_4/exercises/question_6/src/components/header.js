import React,{useRef} from 'react';

function Header(props)
{
    const {setTopic} = props;
    const ulRef = useRef(null);
    
    const recentTopics = [
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
    ];

    const popularTopics = [
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
    ];

    const trendingTopics = [
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
    ];


    function handleClick(e)
    {
        Array.from(ulRef.current.children).forEach((item) => {
            if(item.classList.contains("category__selected"))
            {
                item.classList.remove("category__selected");
                item.classList.add("category__hover");
            }
        });
        e.target.className = "category category__selected";
        if(e.target.innerText === "Popular")
        {
            setTopic(popularTopics);
        }else if(e.target.innerText === "Recent")
        {
            setTopic(recentTopics);
        }else if(e.target.innerText === "Trending")
        {
            setTopic(trendingTopics);
        }
    }

    return(
        <header>
            <nav>
                <ul ref={ulRef}>
                    <li className="category category__selected" onClick={(e) => handleClick(e)}>Recent</li>
                    <li className="category category__hover" onClick={(e) => handleClick(e)}>Popular</li>
                    <li className="category category__hover" onClick={(e) => handleClick(e)}>Trending</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;