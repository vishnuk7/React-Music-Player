import { v4 as uuidv4 } from 'uuid';
type chillHopType = {
	name: string;
	cover: string;
	artist: string;
	audio: string;
	color: string[];
	id: string;
	active: boolean;
}[];

const chillHop = (): chillHopType => {
	return [
		{
			name: 'Beaver Creek',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
			artist: 'Aso, Middle School, Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
			color: ['#205950', '#2ab3bf'],
			id: 'd6aeb71b-7078-4292-a430-97f7bb3f8b9b',
			active: true,
		},
		{
			name: 'Daylight',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
			artist: 'Aiguille',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
			color: ['#EF8EA9', '#ab417f'],
			id: 'ec7040b1-6f20-40b7-87f4-44e153730450',
			active: false,
		},
		{
			name: 'Keep Going',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
			color: ['#CD607D', '#c94043'],
			id: 'fb611c94-ca58-4dca-8b27-d58aa1cc7c0e',
			active: false,
		},
		{
			name: 'Nightfall',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
			artist: 'Aiguille',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
			color: ['#EF8EA9', '#ab417f'],
			id: '489d9477-4be2-4c48-b05d-dbcbc419560a',
			active: false,
		},
		{
			name: 'Reflection',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
			color: ['#CD607D', '#c94043'],
			id: '5809f031-4a00-4755-afa2-d36f2fa0d340',
			active: false,
		},
		{
			name: 'Under the City Stars',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
			artist: 'Aso, Middle School, Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
			color: ['#205950', '#2ab3bf'],
			id: 'e5b9d5dd-9072-44b1-9702-c85ff2924416',
			active: false,
		},
		//ADD MORE HERE
	];
};

export default chillHop;
