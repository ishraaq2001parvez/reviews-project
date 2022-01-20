import React, { useState, useEffect } from 'react';
import Review from './Review';
function App(){
	return (
		<main>
			<section className="container">
				<div className="title">
					<h2> Our reviews</h2>
				</div>
				<div className="underline"></div>
				<Review />
			</section>
		</main>
	);
};

export default App;