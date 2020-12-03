import React, { useContext, useState } from 'react';
import {
	FiMusic,
	FiSun,
	FiMoon,
	FiPlay,
	FiPause,
	FiSkipForward,
	FiSkipBack,
	FiShuffle,
	FiRepeat,
} from 'react-icons/fi';
import { GoKeyboard } from 'react-icons/go';
import { LibraryContext } from '../contexts/LibraryContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { Modal } from 'react-responsive-modal';

const Navbar = () => {
	const { toggleLibraryOpen } = useContext(LibraryContext);
	const { isDark, toggleDark } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);
	const onCloseModal = () => setOpen(false);
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
				<GoKeyboard className={'hot-key'} size={'2em'} onClick={() => setOpen(!open)} />
				<Modal classNames={{ modal: 'navModal' }} open={open} onClose={onCloseModal} center>
					<table>
						<thead>
							<tr>
								<th>Action</th>
								<th>Hot Keys</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='action-td'>
									<FiPlay size={'1.5em'} /> <span className='action-title'>Play</span>
								</td>
								<td>
									<span className='keyboard'>spacebar</span>
								</td>
							</tr>
							<tr>
								<td className='action-td'>
									<FiPause size={'1.5em'} /> <span className='action-title'>Pause</span>
								</td>
								<td>
									<span className='keyboard'>spacebar</span>
								</td>
							</tr>
							<tr>
								<td className='action-td'>
									<FiSkipForward size={'1.5em'} /> <span className='action-title'>Next Song</span>
								</td>
								<td>
									<span className='keyboard'>right arrow</span>
								</td>
							</tr>
							<tr>
								<td className='action-td'>
									<FiSkipBack size={'1.5em'} /> <span className='action-title'>Previous Song</span>
								</td>
								<td>
									<span className='keyboard'>left arrow</span>
								</td>
							</tr>
							<tr>
								<td className='action-td'>
									<FiShuffle size={'1.5em'} /> <span className='action-title'>Shuffle</span>
								</td>
								<td>
									<span className='keyboard'>s</span>
								</td>
							</tr>
							<tr>
								<td className='action-td'>
									<FiRepeat size={'1.5em'} /> <span className='action-title'>Repeat</span>
								</td>
								<td>
									<span className='keyboard'>r</span>
								</td>
							</tr>
						</tbody>
					</table>
				</Modal>
			</div>
		</div>
	);
};

export default Navbar;
