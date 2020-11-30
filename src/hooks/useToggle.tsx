import { useState } from 'react';

const useToggle = (init: boolean = false): [boolean, () => void] => {
	const [state, setState] = useState(init);
	const toggle = (): void => {
		setState(!state);
	};
	return [state, toggle];
};

export default useToggle;
