import React, { useState, useEffect } from 'react';
import Name from './componentes/Characters';
import Spinner from './componentes/Spinner';

const initialName = {
  name: 'name',
  portrayed: 'portrayed',
  img: "img"
}


const initialPosition = 1;

function App() {
  const [name, setName] = useState(initialName);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  
  const updateName = async () => {
    setLoading(true);
    const url = ""https://www.breakingbadapi.com/api/characters?category=Breaking+Bad" + position; // out of danger
    const res = await fetch(url);
    const [newName] = await res.json(); 
    const {name, portrayed, img} = newName;
    position===57 ? setPosition(1):setPosition(position+1);

    setName({
      name: name,
      portrayed: portrayed,
      img: img
    });

    
    setLoading(false);
  }


  useEffect(() => {
    updateName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <button onClick={() => updateName()}>Characters</button>
      { loading ? <Spinner /> : <Name name={name} /> }
    </div>
  );
}

export default App;
