import './style.css';
import {useState, useEffect} from 'react';

function App() {

    const [title,
        setTitle] = useState("");
    const [media,
        setMedia] = useState("");
    const [author,
        setAuthor] = useState("");
    const [cat,
        setCat] = useState("");
    const [red,
        setRed] = useState(0);
    const [blue,
        setBlue] = useState(0);
    const [green,
        setGreen] = useState(0);
    
        const [red1,
            setRed1] = useState(0);
        const [blue1,
            setBlue1] = useState(0);
        const [green1,
            setGreen1] = useState(0);
            const [red2,
                setRed2] = useState(0);
            const [blue2,
                setBlue2] = useState(0);
            const [green2,
                setGreen2] = useState(0);


    const getNewQuote = async() => {
        await fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?id=&t=Kindness&maxR=1&size=mediu" +
                "m", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "healthruwords.p.rapidapi.com",
                "x-rapidapi-key": "7b6ec313e8msh1da103fd887b303p1be7fcjsnafae59897f5f"
            }
        }).then(response => response.json(),).then(data => [
            setTitle(data[0].title),
            setMedia(data[0].media),
            setAuthor(data[0].author),
            setCat(data[0].cat)
        ]);

        setRed(Math.floor(Math.random() * Math.floor(250)));
        setBlue(Math.floor(Math.random() * Math.floor(250)));
        setGreen(Math.floor(Math.random() * Math.floor(250)));
        setRed1(Math.floor(Math.random() * Math.floor(250)));
        setBlue1(Math.floor(Math.random() * Math.floor(250)));
        setGreen1(Math.floor(Math.random() * Math.floor(250)));
        setRed2(Math.floor(Math.random() * Math.floor(250)));
        setBlue2(Math.floor(Math.random() * Math.floor(250)));
        setGreen2(Math.floor(Math.random() * Math.floor(250)));

    }

    useEffect(() => {
        getNewQuote()
    }, [])

    let button = {
        backgroundImage: `linear-gradient(to right, rgb(${red}, ${blue}, ${green}) 0%,rgb(${red1}, ${blue1}, ${green1}) 51%, rgb(${red2}, ${blue2}, ${green2})  100%)`
        
    }

    return (
        <div className="App">
            <div >
                <div className="divisor" >
                    <h1>
                        {title}
                    </h1>
                    <img src={media}/>
                    <p>
                        {cat + ' by '}
                        {author}
                    </p>
                    <button style={button} onClick={() => getNewQuote()}>New Quote</button>
                </div>
            </div>
        </div>
    );
}

export default App;
