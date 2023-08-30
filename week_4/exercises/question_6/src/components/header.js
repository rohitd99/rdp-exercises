function Header(props)
{
    const {setSelectedTab,selectedTab} = props;
    const Categories = [
        "Recent",
        "Popular",
        "Trending"
    ];
    
    function handleClick(tabIndex)
    {
        setSelectedTab(tabIndex);
    }

    return(
        <header>
            <nav>
                <ul>
                    {
                        Categories.map((category,index) => {
                            
                            let classes = selectedTab === index ? "category category__selected" : "category category__hover";
                            
                            return(
                                
                                <li className={classes} onClick={(e) => handleClick(index)}>{category}</li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;