import { Button } from '@mui/material';
import { Route } from 'react-router-dom';
import './App.css';
import ChatsPage from './Pages/ChatsPage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact />
      <Route path='/chats' component={ChatsPage} />
    </div>
  );
}

export default App;
