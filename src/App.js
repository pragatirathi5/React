import React, { useState } from 'react';
import info from './Birthday/info'
import List from './Birthday/List'
import './App.css';

function App(){
  const [people, setPeople]=useState(info)
  function clearAllData() {
    setPeople([])
  }
  return (
    <main>
      <section className='container'>
     <h3>{people.length} Birthdays Today</h3>
     <List people={people} />
     <button onClick={clearAllData}>Clear All</button>
      </section>
      </main>
  );
}
export default App