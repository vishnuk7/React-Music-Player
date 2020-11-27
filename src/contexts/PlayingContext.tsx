import React, { createContext, useState, useContext } from 'react';

import useToggle from '../hooks/useToggle';
import useAudioRef from '../hooks/useAudioRef';
//type defination
import { playingSongContextType, songInfoType } from '../types/Song.td';
import { SongContext } from './SongsContext';

const defaultValue: playingSongContextType = {
	currentSong: null!,
	setCurrentSong: null!,
};

export const PlayingContext = createContext<playingSongContextType>(defaultValue);

export const PlayingProvider: React.FC<{}> = (props) => {
	const songs = useContext(SongContext).songs!;

	//useref for audio element
	const audioRef = useAudioRef();
	const song = songs[0];
	const [isPlaying, playingToggle] = useToggle();
	const [currentSong, setCurrentSong] = useState<songInfoType>(song);
	const value = { currentSong, setCurrentSong, isPlaying, playingToggle, audioRef };
	return <PlayingContext.Provider value={value}>{props.children}</PlayingContext.Provider>;
};
