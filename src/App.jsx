import { useState } from 'react';
import './App.sass';
import MainMenu from './components/main/mainMenu/mainMenu'
import Quiz from './components/game/quiz/quiz'

function App() {
  const [page, setPage] = useState('main')
  console.log(page);
  return (
    <div className="App">
      {page === 'main' ?
        <MainMenu setPage={setPage}></MainMenu>
        : ''}
      {page === 'game' ?
        <Quiz setPage={setPage}></Quiz>
        : ''}
    </div>
  );
}

export default App;
