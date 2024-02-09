import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <h3><strong>Login</strong></h3><br></br>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email"><strong>Email address:</strong></label>
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </center>
      <br></br>
      <Link className="signup" to="/signup">← Go to Signup</Link>
    </div>
    </div>
  );
}

export default Login;
