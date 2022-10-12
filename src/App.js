import './App.css';
import Question from './component/Question';
import data from'./data'
import {useState} from 'react'
function App() {
  const [question,setQuestions] = useState(data) 
  return (
    <div className="App">
     <div className="container">
        <div className="left">
          <h2>Questions and Answers About Login</h2>
        </div>
        <div className="right">
        {question.map(q => 
          <Question  key ={q.id} {...q}/> )
        }
        </div>
     </div>
    </div>
  );
}

export default App;
