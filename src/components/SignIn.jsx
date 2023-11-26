// SignIn.js

import React from 'react';

const SignIn = () => {
  // Basic structure of a sign-in component
  return (
    <div>
      <h2>Sign In Page</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
