import { useState } from 'react';
import { signUp, signIn } from '../utils/fetch-utils';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await signUp({ username, password, email });
      console.log('****response****', res);
    } catch (error) {
      throw error;
    }
  }

  let content; 

  hasAccount ? content = (<>
      <form onSubmit={handleSubmit}>
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
        <button onClick={() => setHasAccount(false)}>Don't have an account?</button>
      </form>
    </>) : content = (<>
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
        <button onClick={() => setHasAccount(true)}>Already have an account?</button>
      </form>
    </>)

  return (
    content
  );
};
