import {useRef} from 'react';

function Tooltip()
{
    const containerRef = useRef(null);
    const tooltipRef = useRef(null);
    
    function handleMouseEnter(event)
    {
        if(!tooltipRef.current || !containerRef.current)
            return;
        const containerBox = containerRef.current.getBoundingClientRect();
        positionTooltip(containerBox,event.clientX,event.clientY)
    }
    function positionTooltip(containerBox,x,y)
    {
        console.log(x,y);
        const MidY = containerBox.top + (containerBox.bottom - containerBox.top)/2;
        if(x >= containerBox.left && x <= (containerBox.left + 30))
        {
            console.log("1",x,containerBox.left + 30,containerBox.left);
            tooltipRef.current.style.right = (containerBox.width + 10) + "px";
        }else if(x <= containerBox.right && x > (containerBox.right - 30))
        {
            console.log("2",containerBox.right,containerBox.right - 30);
            tooltipRef.current.style.left = (containerBox.width + 10) + "px";

        }else if(y < MidY)
        {
            console.log("3",y,MidY);
            tooltipRef.current.style.bottom = (containerBox.height + 10) + "px";
            tooltipRef.current.style.right = (containerBox.width/2 - 50) + "px";

        }else if(y >= MidY){
            console.log("4",y,MidY);
            tooltipRef.current.style.top = (containerBox.height + 10) + "px";
            tooltipRef.current.style.right = (containerBox.width/2 - 50) + "px";
        }
    }

    function handleMouseLeave()
    {
        tooltipRef.current.style = {};
    }

    return(
            <div ref={containerRef} className='tooltip__container group relative inline-block'>
                <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 " onMouseEnter={(event) => handleMouseEnter(event)} onMouseLeave={handleMouseLeave}>Hover for Tooltip</button>
                {
                    <span ref={tooltipRef} className="invisible group-hover:visible w-24 text-xs text-white bg-zinc-700 p-2 rounded-md absolute ">Hey this is the tooltip !!</span>
                }
            </div>
    );
}

export default Tooltip;