import React from 'react';
import Game from './components/game'
// import './index.css';

// import  Pra from './components/pra'

function App() {
  const name=['a','b','c']
  return (
    <div className="App">
       <Game />
       {/* {
         name.map(n=>
            <Pra key={name} />
          )
       } */}

    </div>
  );
}

export default App;
