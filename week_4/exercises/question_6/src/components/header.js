function Header(props)
{
    const {setSelectedTab,selectedTab} = props;
    const Categories = [
        "Recent",
        "Popular",
        "Trending"
    ];
    
    function handleClick(e,tabIndex)
    {
        setSelectedTab(tabIndex);
        // console.log(e);
        e.target.classList.add("category__selected");
        e.target.classList.remove("category__hover");
    }
    
    return(
        <header>
            <nav>
                <ul>
                    {
                        Categories.map((category,index) => {
                            
                            let classes = selectedTab === index ? "category category__selected" : "category category__hover";
                            
                            return(
                                
                                <li className={classes} onClick={(e) => handleClick(e,index)}>{category}</li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;