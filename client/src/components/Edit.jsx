import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';
import Axios from 'axios';


const Edit = props => {

  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [errors, setErrors] = useState({});

  useEffect( () => {
    Axios.get(`http://localhost:8000/api/jokes/${props._id}`)
      .then(res => {
        console.log(res);
        setSetup(res.data.setup);
        setPunchline(res.data.punchline);
      }).catch(err => console.log(err));
  }, []);

  const modifyJoke = e => {
    e.preventDefault();
    Axios.put(`http://localhost:8000/api/jokes/${props._id}`, {
      _id: props._id, setup, punchline
    })
      .then(res => {
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={ modifyJoke }>
      <div className="form-group">
        <input 
          value={setup} 
          onChange={e => setSetup(e.target.value)}
          className="form-control"
        />
        {
          errors.setup ?
          <p style={{color: "red"}}>{errors.setup.message}</p> :
          ""
        }
      </div>
      <div className="form-group">
        <input 
          value={punchline} 
          onChange={e => setPunchline(e.target.value)}
          className="form-control"
        />
        {
          errors.punchline ?
          <p style={{color: "red"}}>{errors.punchline.message}</p> :
          ""
        }
      </div>
      <input type="submit" value="Edit" className="btn btn-outline-success" />
    </form>
  )

}

export default Edit;