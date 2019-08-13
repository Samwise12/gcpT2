import React from 'react';

import Messages from './components/Messages';
import Navbar from './components/Navbar';
import Header from './components/Header';

import'./css/App.scss';

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
    	<Navbar />

    	<div className="ml-1"> 	
    		<Header />
	    	<br/>
	    	<Messages />	
    	</div>

    </div>
  );
}

export default App;
