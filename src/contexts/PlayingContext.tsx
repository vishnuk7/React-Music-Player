import React, { createContext, useState } from 'react';
import data from '../data';
//type defination
import { playingSongContext, songInfoType } from '../types/Song.td';

const defaultValue: playingSongContext = {
	currentSong: null!,
	setCurrentSong: null!,
};

export const PlayingContext = createContext<playingSongContext>(defaultValue);

export const PlayingProvider: React.FC<{}> = (props) => {
	const song = data()[0];
	const [currentSong, setCurrentSong] = useState<songInfoType>(song);
	const value = { currentSong, setCurrentSong };
	return <PlayingContext.Provider value={value}>{props.children}</PlayingContext.Provider>;
};
