import { Route } from 'react-router-dom';
import './App.css';
import ChatsPage from './pages/ChatsPage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact />
      <Route path='/chats' component={ChatsPage} />
    </div>
  );
}

export default App;
