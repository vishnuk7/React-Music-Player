import React, { createContext } from 'react';
import data from '../data';

interface Props {}

export const SongContext = createContext(data());

export const SongProvider: React.FC<Props> = (props) => (
	<SongContext.Provider value={data()}>{props.children}</SongContext.Provider>
);
