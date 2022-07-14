import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { AuthorAndTime, CommentBox, CommentContent, Container } from './styles';

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
	const handleDeleteComment = () => {
		onDeleteComment(content);
	};
	const [likeCount, setLikeCount] = useState(0);

	const handleLikeComment = () => {
		setLikeCount((state) => state + 1);
	};

	return (
		<Container>
			<Avatar src="https://github.com/rodrfx.png" hasBorder={false} />

			<CommentBox>
				<CommentContent>
					<header>
						<AuthorAndTime>
							<strong>Rodrigo Xavier</strong>
							<time title="06 de julho de 2022 às 10:19" dateTime="2022-07-06 ">
								Cerca de 1h atrás
							</time>
						</AuthorAndTime>

						<button title="Deletar comentário" onClick={handleDeleteComment}>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</CommentContent>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir
						<span>{likeCount}</span>
					</button>
				</footer>
			</CommentBox>
		</Container>
	);
};
