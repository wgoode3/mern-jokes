import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const JokeCard = props => {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="title">{props.setup}</h4>
        <p 
          onClick={e => setShowPunchline(!showPunchline)} 
          style={{backgroundColor: "rebeccapurple", color: "#fff", cursor: "pointer", fontSize: "2rem", padding: "10px"}}
        >
          {
            showPunchline ?
            props.punchline : 
            "click to reveal"
          }
        </p>
        {
          props.children
        }
      </div>
    </div>
  );

}

const Joke = props => {
  
  const [jokes, setJokes] = useState([]);
  
  useEffect( () => {
    axios.get("http://localhost:8000/api/jokes")
      .then(res => setJokes(res.data))
      .catch(err => console.log(err));
  }, []);

  const edit = _id => {
    navigate(`/edit/${_id}`)
  }

  return(
    <>
      {
        jokes.map( (j, i) => 
          <JokeCard key={i} setup={j.setup} punchline={j.punchline}>
            <button className="btn btn-outline-danger" onClick={ e => edit(j._id) }>Edit</button>
          </JokeCard>   
        )
      }
    </>
  );
}

export default Joke;