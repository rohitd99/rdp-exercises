import './App.css';
import Card from './components/card';

function App() {


    const Cards = [
        {
            title      : "The evolution of design thinking: insights and perspectives",
            imgSrc     : "./img/image1.jpg", 
            imgAlt     : "Image of sunset",
            category   : "Thoughts",
            timeToRead : "4min"
        },
        {
            title      : "The evolution of design thinking: insights and perspectives",
            imgSrc     : "./img/image1.jpg", 
            imgAlt     : "Image of sunset",
            category   : "Thoughts",
            timeToRead : "4min"
        },
        {
            title      : "The evolution of design thinking: insights and perspectives",
            imgSrc     : "./img/image1.jpg", 
            imgAlt     : "Image of sunset",
            category   : "Thoughts",
            timeToRead : "4min"
        },
        {
            title      : "The evolution of design thinking: insights and perspectives",
            imgSrc     : "./img/image1.jpg", 
            imgAlt     : "Image of sunset",
            category   : "Thoughts",
            timeToRead : "4min"
        },
        {
            title      : "The evolution of design thinking: insights and perspectives",
            imgSrc     : "./img/image1.jpg", 
            imgAlt     : "Image of sunset",
            category   : "Thoughts",
            timeToRead : "4min"
        },
        {
            title      : "The evolution of design thinking: insights and perspectives",
            imgSrc     : "./img/image1.jpg", 
            imgAlt     : "Image of sunset",
            category   : "Thoughts",
            timeToRead : "4min"
        }
    ];
        
    return (
        <div className="App">
            <main>
                <section className="cards">
                    {
                        Cards.map((card) => {
                            return(
                                <Card   title={card.title} 
                                        imgSrc={card.imgSrc} 
                                        imgAlt={card.imgAlt}
                                        category={card.category}
                                        timeToRead={card.timeToRead}
                                ></Card>
                            );
                        })
                    }
                </section>
            </main>
        </div>
    );
}

export default App;
