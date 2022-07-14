import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Wrapper } from './styles/app';
import { GlobalStyle } from './styles/global';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/rodrfx.png',
			name: 'Rodrigo Xavier',
			role: 'Web Developer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Fala galera 👋',
			},
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto. É um projeto que fiz no evento da Rocketseat. O nome do projeto é NLW Return 🚀',
			},
			{
				type: 'link',
				content: 'https://github.com/rodrfx/NLW-Return',
			},
		],
		publishedAt: new Date('2022-07-11 22:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/laerteneto88.png',
			name: 'Laerte Neto',
			role: 'Web Developer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Fala galera 👋',
			},
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto. É um projeto que fiz no evento da Rocketseat. O nome do projeto é doctorcare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2022-07-09 22:00:00'),
	},
];

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />

			<Wrapper>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							publishedAt={post.publishedAt}
							content={post.content}
						/>
					))}
				</main>
			</Wrapper>
		</>
	);
};
