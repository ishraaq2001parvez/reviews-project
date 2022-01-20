import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function Review(){
	const [index,setIndex]= useState(0);
	const {name,image,job,text} = people[index];
	console.log(people.length);
	const nextPerson = ()=>{
		setIndex((index)=>{
			let x=index+1;
			return x%(people.length);
		});
	};
	const prevPerson = ()=>{
		setIndex((index)=>{
			let x=index-1;
			return (x+people.length)%people.length;
		});
	};
	const randomPerson = ()=>{
		setIndex((index)=>{
			let x=Math.floor(Math.random()*(people.length));
			console.log(x);
			return x;
		});
	};
	return (
		<article className="review">
			<div className="img-container" >
				<img className="person-img" src={image} />
				<span className="quote-icon"><FaQuoteRight/></span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
				<button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
				<button className='random-btn' onClick={randomPerson}>Bite me!</button>
			</div>
		</article>
	);
};

export default Review;