import './App.css';
import {useEffect, useState, useRef} from 'react';
import rand from './Functions/rand';


const cats = [
    'Mulkis',
    'Kakius',
    'Pilkius',
    'Balčius'
];

const dog = [
    'Sniego',
    'Dingo',
    'Atsirado',
    'Pifas',
    'Bobikas'
]

function App() {
    const [cat, setCat] = useState([]);
    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

    // pirmam puslapio uzkrovimui 
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv')));
        // gali buti null arba []
    }, [])

    // prisijungimas prie local storage
    // saugos pokycius
    useEffect(() => {
        // cia nera ko saugot
        if(null === kv) {
            return;
        }
        // cia jau yra ka saugot
        localStorage.setItem('kv', JSON.stringify(kv));
    }, [kv]);

    const prideti = () => {
        const kiekis = rand(5, 20);
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push('--^o^--');
        }
        setKv(k => {
            istorija.current.unshift( null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
            console.log(istorija.current);
            return   null === k ? [...kvadratukai] : [...k, ...kvadratukai];
        });
    }

    const addCat = () => {
        // setCat([...cat, ...cats])
        // setCat(cat);
        setCat(k =>[...k, ...cats])
    }

    const addDog = () => {
        setCat(dog);
    }

    const rem = () => {
        setCat([]);
    }

    const isvalyti = () => {
        setKv([]);
    }

    const atgal = () => {
        let senas = istorija.current.shift();
        if (!senas) {
            setKv([]);
        } else if (senas.length === kv.length) {
            senas = istorija.current.shift();
            if (!senas) {
                setKv([]);
            } else {
                setKv(senas);
            }
        }
        else {
            setKv(senas);
        }    
    }
      
    return (
        <div className="App">
            <header className="App-header">
                <h1>PRAKTIMUMAS</h1>
                <div className="flex">
                    {
                       kv ? kv.map((_, i) => <div key={i} className="kvadratukas"></div>) : null
                    }
                </div>
                <div className="flex">
                    <button onClick={prideti}>Prideti</button>
                    <button onClick={isvalyti}>Isvalyti</button>  
                    <button onClick={atgal}>Atgal</button> 
                </div>

                <div>
                    {
                        cat.map((k, i) => <div key={i}>{k}</div>)
                    }
                </div>
                <div>
                    <button onClick={addCat}>cat</button>
                    <button onClick={addDog}>dog</button>
                    <button onClick={rem}>Isvalyti</button>
                </div>

            </header>
        </div>
    );
}

export default App;
