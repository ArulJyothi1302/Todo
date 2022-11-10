import './App.css';
import Todo from './components/todo';

function App() {
  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      background: `url(https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?auto=compress&cs=tinysrgb&w=600)`,
      backgroundSize: 'cover'
    }}
    >
      <Todo/>

    </div>
  );
}

export default App;