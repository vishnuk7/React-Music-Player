import React, { useContext } from 'react';
import { LibraryContext } from './contexts/LibraryContext';

const PageContent: React.FC<React.ReactNode> = ({ children }) => {
	const { isLibraryOpen } = useContext(LibraryContext);
	console.log(isLibraryOpen);
	return <div className={`app ${isLibraryOpen && 'library-open'}`}>{children}</div>;
};

export default PageContent;
