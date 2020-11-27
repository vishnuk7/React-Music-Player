export interface songInfoType {
	name: string;
	cover: string;
	artist: string;
	audio: string;
	color: string[];
	id: string;
	active: boolean;
}

export interface playingSongContext {
	currentSong: songInfoType;
	setCurrentSong: React.Dispatch<React.SetStateAction<songInfoType>>;
}
