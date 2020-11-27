import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';

const defaultValues = {
	isLibraryOpen: null!,
	toggleLibraryOpen: null!,
};

export const LibraryContext = createContext<{ isLibraryOpen: boolean; toggleLibraryOpen: () => void }>(defaultValues);

export const LibraryProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [isLibraryOpen, toggleLibraryOpen] = useToggle();
	return <LibraryContext.Provider value={{ isLibraryOpen, toggleLibraryOpen }}>{children}</LibraryContext.Provider>;
};
