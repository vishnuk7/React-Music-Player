import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';

import { darkThemeType } from '../types/Song.td';

export const ThemeContext = createContext<darkThemeType>({
	isDark: false,
	toggleDark: null!,
	isThemeSet: false,
	setThemeSet: null!,
});

export const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [isDark, toggleDark] = useToggle(window.localStorage.getItem('isDark') === 'true');

	const isThemeSet = window.localStorage.getItem('isThemeSet') === 'true';

	const setThemeSet = (): void => {
		window.localStorage.setItem('isThemeSet', 'true');
	};
	return (
		<ThemeContext.Provider value={{ isDark, toggleDark, isThemeSet, setThemeSet }}>
			{children}
		</ThemeContext.Provider>
	);
};
