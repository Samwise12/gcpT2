import React from 'react';

function Header() {
	return (
    	<div className="ml-2" style={{display: 'inline-flex'}}> 	    	
			<img
					style={{height:'55px'}}
					src={process.env.PUBLIC_URL + '/images/chatimg.png'} 
					alt="l" 
				 />
	    	<h1 className="txtRobo ml-1 mt-2">Chat Box</h1>
    	</div>	
		)
}

export default Header;