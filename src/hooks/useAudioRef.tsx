import { useRef } from 'react';

const useAudioRef = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	return audioRef;
};

export default useAudioRef;
