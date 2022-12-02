import { setRevalidateHeaders } from 'next/dist/server/send-payload';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(218, 210, 210, 1);
  overflow: hidden;

  display: flex; 
  flex-direction: column;
  align-items: center;
	justify-content: center;

	background: white;

	position: relative;
`

const Liquid = styled.div`
	position: relative;
	width: 950px;
	height: 550px;
	box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
		// 25px 35px 20px rgba(0,0,0,0.05),
		// 25px 30px 30px rgba(0,0,0,0.05),
		25px 35px 20px rgba(173, 40, 145, 0.05),
		25px 30px 30px rgba(173, 40, 145, 0.05),
		inset -20px -20px 25px rgba(255,255,255,.9);
	transition: 3s linear;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 5.9em;
	font-weight: bold;

	background: rgba(173, 40, 145, 0.12);
	color: rgba(173, 40, 145, 1);
	// font-family: 'Rubik Distressed', cursive;
	font-family: 'Dancing Script', cursive;

	border-radius: ${props => {

		return `${props.rad.a}% ${100-props.rad.a}% ${props.rad.b}% ${100-props.rad.b}%` + 
		`/ ${props.rad.c}% ${props.rad.d}% ${100 - props.rad.d}% ${100 - props.rad.c}%`
	}};

	&:before 
	{
		content: "";
		position: absolute;
		top: 100px;
		left: 220px;
		width: 40px;
		height: 30px;
		background: white;
		opacity: 0.9;
		border-radius:  ${props => {

			return `${props.rad.a}% ${100-props.rad.a}% ${props.rad.b}% ${100-props.rad.b}%` + 
			`/ ${props.rad.c}% ${props.rad.d}% ${100 - props.rad.d}% ${100 - props.rad.c}%`
		}};
		
		transition: 3s linear;
	}
	&:after
	{
		content: "";
		position: absolute;
		top: 130px;
		left: 290px;
		width: 95px;
		height: 55px;
		background: white;
		opacity: 0.9;
		border-radius:  ${props => {

			return `${props.rad.a}% ${100-props.rad.a}% ${props.rad.b}% ${100-props.rad.b}%` + 
			`/ ${props.rad.c}% ${props.rad.d}% ${100 - props.rad.d}% ${100 - props.rad.c}%`
		}};
		
		transition: 3s linear;
	}
`;


const LiquidDiv = () => {
	const [rad, setRad] = useState({a: 40, b:60, c:30, d:20})
	const [inter, setInter] = useState(null)
	const setRandomRad = () => {
		console.log("here")
		const st = {
			a: Math.floor(Math.random() * 50) + 25,
			b: Math.floor(Math.random() * 50) + 25,
			c: Math.floor(Math.random() * 50) + 25,
			d: Math.floor(Math.random() * 50) + 25
		}
		setRad(st)
	}
	const handleMouseEnter = (e) => {
		e.preventDefault()

		// const st = {
		// 	a: 50,
		// 	b: 50,
		// 	c: 50,
		// 	d: 50
		// }
		// setRad(st)
		setRandomRad()
		setInter(setInterval(setRandomRad, 3000))
	}

	const handleMouseLeave = (e) => { 
		e.preventDefault()

		clearInterval(inter)
	}

	return (
		<Wrapper>
			<Liquid rad={rad} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<div style={{marginRight:15}}>
					{"I love you Faru"}
				</div>
				<img src="/heart.png"></img> 
			</Liquid>
		</Wrapper>
	)
}

export default LiquidDiv