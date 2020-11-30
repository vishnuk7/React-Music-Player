import React, { createContext, useState, useContext } from 'react';

import useToggle from '../hooks/useToggle';
import useAudioRef from '../hooks/useAudioRef';
//type defination
import { playingSongContextType, songInfoType } from '../types/Song.td';
import { SongContext } from './SongsContext';

const defaultValue: playingSongContextType = {
	currentSong: null!,
	changeCurrentSong: null!,
};

export const PlayingContext = createContext<playingSongContextType>(defaultValue);

export const PlayingProvider: React.FC<{}> = (props) => {
	const songs = useContext(SongContext).songs!;
	const setSongs = useContext(SongContext).setSongs!;

	//useref for audio element
	const audioRef = useAudioRef();
	const song = songs[0];
	const [isPlaying, playingToggle] = useToggle();
	const [isRepeate, toggleRepeate] = useToggle();
	const [currentSong, changeCurrentSong] = useState<songInfoType>(song);
	const setCurrentSong = (song: songInfoType) => {
		const newSongs = songs.map((data) => {
			if (data.id === song.id)
				return {
					...data,
					active: true,
				};
			else
				return {
					...data,
					active: false,
				};
		});
		setSongs(newSongs);
		changeCurrentSong(song);
	};
	const value = { currentSong, setCurrentSong, isPlaying, playingToggle, audioRef, isRepeate, toggleRepeate };
	return <PlayingContext.Provider value={value}>{props.children}</PlayingContext.Provider>;
};
