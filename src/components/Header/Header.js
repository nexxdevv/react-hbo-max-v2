import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Bottombar from './Bottombar/Bottombar'
import Sidebar from './Sidebar/Sidebar'
import Drawer from './Sidebar/Drawer/Drawer'
import Overlay from './Sidebar/Overlay/Overlay'

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	/* position: fixed; */
	top: 0;
	left: 0;
	height: 60px;
	width: 100%;
	max-width: var(--maxWidth);
	margin: 0 auto;
	color: #fff;
	background-color: var(--brandBlack);

	#icon {
		cursor: pointer;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
		z-index: 100;
		background-color: var(--brandBlack);
		#logoContainer {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			max-width: 130px;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				filter: brightness(0) invert(1);
			}
		}
		& > div {
			display: flex;
			align-items: center;
		}
		> div:first-child {
			margin-left: -3px;
		}
	}
`

const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleClick = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}
	}
	const handleClose = () => {
		setIsOpen(false)
		if (isOpen) {
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}
	}
	return (
		<StyledHeader>
			<nav className="">
				<div>
					<div onClick={handleClick}>
						{isOpen ? (
							<ion-icon id="icon" name="close-outline" size="large" />
						) : (
							<ion-icon id="icon" name="menu-outline" size="large" />
						)}
					</div>
					<div />
				</div>
				<div id="logoContainer">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				{/* <div>right</div> */}
			</nav>
			<Sidebar clicked={handleClose} />
			<Drawer open={isOpen} clicked={handleClose} />
			<Overlay open={isOpen} clicked={handleClose} />
			<Bottombar />
		</StyledHeader>
	)
}

export default Header
