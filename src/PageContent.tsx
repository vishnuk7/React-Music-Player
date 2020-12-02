import React, { useContext, useEffect } from 'react';
import { LibraryContext } from './contexts/LibraryContext';
import { ThemeContext } from './contexts/ThemeContext';

const PageContent: React.FC<React.ReactNode> = ({ children }) => {
	const { isLibraryOpen } = useContext(LibraryContext);
	const { isDark } = useContext(ThemeContext);

	useEffect(() => {
		if (isDark) {
			document.body.style.backgroundColor = ' #222831';
			document.body.style.transition = 'background-color 0.5s ease-in-out';
		} else {
			document.body.style.backgroundColor = ' #eeeeee';
			document.body.style.transition = 'background-color 0.5s ease-in-out';
		}

		window.localStorage.setItem('isDark', isDark.toString());
	}, [isDark]);

	return <div className={`app ${isDark && 'dark-theme'} ${isLibraryOpen && 'library-open'}`}>{children}</div>;
};

export default PageContent;
