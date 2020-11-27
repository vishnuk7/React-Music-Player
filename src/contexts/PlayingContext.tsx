import React, { createContext, useState } from 'react';
import data from '../data';
import useToggle from '../hooks/useToggle';
import useAudioRef from '../hooks/useAudioRef';
//type defination
import { playingSongContext, songInfoType } from '../types/Song.td';

const defaultValue: playingSongContext = {
	currentSong: null!,
	setCurrentSong: null!,
};

export const PlayingContext = createContext<playingSongContext>(defaultValue);

export const PlayingProvider: React.FC<{}> = (props) => {
	//useref for audio element
	const audioRef = useAudioRef();
	const song = data()[0];
	const [isPlaying, playingToggle] = useToggle();
	const [currentSong, setCurrentSong] = useState<songInfoType>(song);
	const value = { currentSong, setCurrentSong, isPlaying, playingToggle, audioRef };
	return <PlayingContext.Provider value={value}>{props.children}</PlayingContext.Provider>;
};
