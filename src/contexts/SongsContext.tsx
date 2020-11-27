import React, { createContext, useState } from 'react';
import data from '../data';
import { songInfoType, songsContextType } from '../types/Song.td';

const defaultValue: songsContextType = {
	songs: data(),
	setSongs: null!,
};

export const SongContext = createContext<songsContextType>(defaultValue);

export const SongProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [songs, setSongs] = useState<songInfoType[]>(data());
	return <SongContext.Provider value={{ songs, setSongs }}>{children}</SongContext.Provider>;
};
