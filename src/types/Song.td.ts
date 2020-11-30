export interface songInfoType {
	name: string;
	cover: string;
	artist: string;
	audio: string;
	color: string[];
	id: string;
	active: boolean;
}

export interface playingSongContextType {
	currentSong: songInfoType;
	changeCurrentSong?: React.Dispatch<React.SetStateAction<songInfoType>>;
	setCurrentSong?: (song: songInfoType) => void;
	isPlaying?: boolean;
	isRepeate?: boolean;
	toggleRepeate?: () => void;
	audioRef?: React.RefObject<HTMLAudioElement>;
	playingToggle?: () => void;
}

export interface songsContextType {
	songs?: songInfoType[];
	setSongs?: React.Dispatch<React.SetStateAction<songInfoType[]>>;
}

export interface darkThemeType {
	isDark: boolean;
	isThemeSet: boolean;
	toggleDark: () => void;
	setThemeSet: () => void;
}
