import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import {
	Author,
	AuthorInfo,
	CommentForm,
	CommentList,
	Container,
	Content,
	Header,
} from './styles';

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: string;
	content: string;
}

interface PostProps {
	author: Author;
	publishedAt: Date;
	content: Content[];
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
	const [comments, setComments] = useState<string[]>([]);
	const [newComment, setNewComment] = useState('');

	const publishedDateFormatted = format(
		publishedAt,
		"dd 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const handleCreateNewComment = (event: FormEvent) => {
		event.preventDefault();

		setComments([...comments, newComment]);
		setNewComment('');
	};

	const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		event.target.setCustomValidity('');

		setNewComment(event.target.value);
	};

	const handleNewCommentInvalid = (
		event: InvalidEvent<HTMLTextAreaElement>
	) => {
		event.target.setCustomValidity('Esse campo é obrigatório');
	};

	const deleteComment = (commentToDelete: string) => {
		const commentsWithoutDeleteOne = comments.filter(
			(comment) => comment !== commentToDelete
		);
		setComments(commentsWithoutDeleteOne);
	};

	const isNewCommentEmpty = newComment.length === 0;

	return (
		<Container>
			<Header>
				<Author>
					<Avatar src={author.avatarUrl} alt={author.name} />
					<AuthorInfo>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</AuthorInfo>
				</Author>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</Header>
			<Content>
				<p>{content[0].content}</p>
				<p>{content[1].content}</p>
				<p>
					👉 <a href="#"> {content[2].content}</a>
				</p>
			</Content>

			<CommentForm onSubmit={handleCreateNewComment}>
				<strong>Deixe o seu feedback</strong>
				<textarea
					placeholder="Deixe um comentário"
					onChange={handleNewCommentChange}
					value={newComment}
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</CommentForm>
			<CommentList>
				{comments.map((comment) => (
					<Comment
						key={comment}
						content={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</CommentList>
		</Container>
	);
};
