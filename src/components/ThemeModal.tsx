import React, { useContext, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { ThemeContext } from '../contexts/ThemeContext';
import 'react-responsive-modal/styles.css';

const ThemeModal: React.FC = () => {
	const { toggleDark, isThemeSet, setThemeSet } = useContext(ThemeContext);
	const [open, setOpen] = useState(!isThemeSet);
	const onCloseModal = () => setOpen(false);
	const selectTheme = (theme: string) => {
		if (theme === 'system') {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				toggleDark();
			}
		} else if (theme === 'dark') {
			toggleDark();
		} else if (theme === 'light') {
		}
		setOpen(false);

		setThemeSet();
	};

	return (
		<Modal
			classNames={{ modal: 'customModal', overlay: 'customOverlay' }}
			open={open}
			onClose={onCloseModal}
			center
			closeIcon={<span></span>}>
			<h2>Select theme</h2>
			<div className='cards'>
				<div className='card' onClick={() => selectTheme('system')}>
					<span>System default</span>
					<div className='card-body card-body-1'></div>
				</div>
				<div className='card' onClick={() => selectTheme('dark')}>
					<span>Dark</span>
					<div className='card-body card-body-2'></div>
				</div>
				<div className='card' onClick={() => selectTheme('light')}>
					<span>Light</span>
					<div className='card-body card-body-3'></div>
				</div>
			</div>
		</Modal>
	);
};

export default ThemeModal;
