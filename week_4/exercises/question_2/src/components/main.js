import Shape from "./shape";

function Main()
{
    const title = "Sending Money Abroad has never been cheaper.";
    const description = "Send Money with no limits to over 140 countries. Enjoy live exchange rate with our flat \u20AC 2 and a slick app thats made for you.";
    return(
        <main className="">
            <h1 className="lg:text-8xl md:text-8xl text-6xl pl-5 pt-10 xl:mr-96 ">
                {title}
            </h1>
            <p className="pl-5 pt-6 text-gray-400 text-xl">
                {description}
            </p>
            <button className="ml-5 mt-6 py-2 px-12 bg-black text-white rounded-full">
                Try it
            </button>
            <div className="flex overflow-x-auto">
                <Shape classes="min-w-[20rem] w-80 h-80 bg-sky-500 mx-5 my-8 rounded-3xl flex justify-center items-center" 
                       classesInside="w-72 h-72 bg-pink-400 rounded-full">     
                </Shape>
                <Shape classes="min-w-[20rem] w-80 h-80 bg-indigo-600 mx-5 my-8 rounded-3xl flex justify-center items-center"
                       classesInside="w-48 h-48 bg-lime-400 mx-5 my-8 rotate-45"></Shape>
                <Shape classes="min-w-[20rem] w-80 h-80 bg-yellow-300 mx-5 my-8 rounded-3xl flex justify-center items-center" svg={true}></Shape>
                <Shape classes="min-w-[20rem] w-80 h-80 bg-emerald-400 mx-5 my-8 rounded-3xl flex justify-center items-center"
                       classesInside="w-0 h-0 border-l-[9rem] border-l-transparent border-b-[13.5rem] border-b-red-400 border-r-[9rem] border-r-transparent">
                </Shape>
            </div>
        </main>
    );
}

export default Main;