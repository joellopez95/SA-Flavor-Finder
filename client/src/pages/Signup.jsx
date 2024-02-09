import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


     

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  
    const myStyle = {
      backgroundImage: "url('images/banner.webp')",
      // height: "100vh",
      marginTop: "10px",
      marginRight: "-170px",
      marginLeft: "-170px",
      fontSize: "40px",
      backgroundSize: "2000px",
      backgroundRepeat: "no-repeat",
    };
  

  return (

    <div className="container my-1">
      <center>
      <h1><strong> Welcome to SA Flavor Finder! </strong></h1>
      {/* <h2><strong><span className="dis">Disc</span>over The Best Local <span className="in">Dining Spots For An Authentic</span> Expe<span className="rie">rie</span>nce...</strong></h2> */}
      <h2>Discover The Best Local Dining Spots For An Authentic Experience...</h2>
      </center>
      <div style={myStyle}>
        <br></br>
        
<center>
        <h3><strong>Signup</strong></h3><br></br>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName"><strong>First Name:</strong></label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName"><strong>Last Name:</strong></label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email"><strong>Email:</strong></label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd"><strong>Password:</strong></label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
          <br></br>
        </form>
        </center>
        <Link className="login" to="/login" to="/login">← Go to Login</Link>
      </div>
    </div>
  );
}

export default Signup;
