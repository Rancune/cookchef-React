import React, { useState } from 'react';
import logo from '../assets/images/cookchef-d.png';
import styles from '../assets/styles/components/Header.module.scss';
import HeaderMenuResponsive from './HeaderMenuResponsive';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className={`${styles.header} d-flex flex-row align-items-center`}>
			<div className="flex-fill">
				<img src={logo} alt="cookchef logo" />
			</div>
			<ul className={styles.headerList}>
				<button className="mr-5 btn btn-reverse-primary">Wishlist</button>
				<button className="btn btn-primary">connexion</button>
			</ul>
			<i
				onClick={() => setShowMenu(!showMenu)}
				className={`${styles.headerXs} fa-solid fa-bars`}
			></i>
			{showMenu && (
				<>
					<div onClick={() => setShowMenu(false)} className="calc"></div>
					<HeaderMenuResponsive />
				</>
			)}
		</header>
	);
};

export default Header;
