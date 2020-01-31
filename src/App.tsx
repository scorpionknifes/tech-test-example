import React, { useContext } from 'react';
import Navbar from './Navbar'
import Generate from './Generate'
import { Context } from './Context';
import Saved from './Saved';

const App = () => {
  const {page} = useContext(Context)
  return (
    <>
      <Navbar />
      {page === "generate" ? <Generate />: <Saved/>}
    </>
  );
}

export default App;
