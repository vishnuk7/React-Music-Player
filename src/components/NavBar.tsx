import React, { useContext } from 'react';
import { FiMusic, FiSun, FiMoon } from 'react-icons/fi';
import { LibraryContext } from '../contexts/LibraryContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
	const { toggleLibraryOpen } = useContext(LibraryContext);
	const { isDark, toggleDark } = useContext(ThemeContext);
	return (
		<div className='navbar'>
			<h2>Wavez</h2>
			<div className='button-group'>
				{isDark ? (
					<FiSun size={'1.8em'} onClick={toggleDark} />
				) : (
					<FiMoon size={'1.8em'} onClick={toggleDark} />
				)}

				<button onClick={toggleLibraryOpen}>
					<span>Library</span> <FiMusic />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
