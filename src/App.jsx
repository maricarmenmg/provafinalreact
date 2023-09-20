import {useState} from 'react';
import data from './data/Data';
import Listin from './components/Listin';
import {Title, Subtitle} from './components/styles';
import './App.css'


function App() {

    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleItemClick = (name) => {
        setSelectedItemName(name);
    };


    return (
        <>
            
            <Title>Prueba Final - Front End React</Title>
                <Title>Listado de Personas</Title>
                <Listin data={data}
                    onItemClick={handleItemClick}/> {
                selectedItemName && (
                    <Subtitle>Has seleccionado: {selectedItemName}</Subtitle>
                )
            } 


        </>
    )
}

export default App
