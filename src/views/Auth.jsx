import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { signUp, signIn } from '../utils/fetch-utils';


export const Auth = () => {
  const location = useLocation();
  const history = useHistory();
  const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn({ password, email });
      console.log(res);
      setUser(res);
      window.localStorage.setItem('user', JSON.stringify(res));
      history.push(location.state.from);
    } catch (error) {
      throw error;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await signUp({ username, password, email });
      setUser(res);
      window.localStorage.setItem('user', JSON.stringify(res));
      history.push(location.state.from);
    } catch (error) {
      throw error;
    }
  };

  let content;

  hasAccount
    ? (content = (
        <>
          <form onSubmit={handleSignIn}>
            <legend>Sign In</legend>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button>Submit</button>
            <button onClick={() => setHasAccount(false)}>
              Don't have an account?
            </button>
          </form>
        </>
      ))
    : (content = (
        <>
          <form onSubmit={handleSignUp}>
            <legend>Sign Up</legend>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              placeholder="username"
              type="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button>Submit</button>
            <button onClick={() => setHasAccount(true)}>
              Already have an account?
            </button>
          </form>
        </>
      ));

  return content;
};
// This line exists for no reason
