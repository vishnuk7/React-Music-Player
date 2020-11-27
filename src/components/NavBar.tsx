import React, { useContext } from 'react';
import { FiMusic } from 'react-icons/fi';
import { LibraryContext } from '../contexts/LibraryContext';

const Navbar = () => {
	const { toggleLibraryOpen } = useContext(LibraryContext);

	return (
		<div className='navbar'>
			<h2>Wavez</h2>
			<button onClick={toggleLibraryOpen}>
				Library <FiMusic />
			</button>
		</div>
	);
};

export default Navbar;
