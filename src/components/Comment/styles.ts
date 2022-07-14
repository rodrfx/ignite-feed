import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 1.5rem;
	display: flex;
	gap: 1rem;

	img {
		width: 3rem;
		height: 3rem;
		border-radius: 8px;
	}
`;

export const CommentBox = styled.div`
	flex: 1;

	footer {
		margin-top: 1rem;

		button {
			display: flex;
			align-items: center;

			background: transparent;
			color: var(--gray-400);
			border: 0;
			border-radius: 2px;
			cursor: pointer;

			&:hover {
				color: var(--green-300);
			}

			svg {
				margin-right: 0.5rem;
			}

			span::before {
				content: '•';
				padding: 0 0.25rem;
			}
		}
	}
`;

export const CommentContent = styled.div`
	background: var(--gray-700);
	padding: 1rem;
	border-radius: 8px;

	header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		button {
			background: transparent;
			color: var(--gray-400);
			border: 0;
			border-radius: 2px;
			line-height: 0;
			cursor: pointer;

			&:hover {
				color: var(--red-500);
			}
		}
	}

	p {
		margin-top: 1rem;
		color: var(--gray-300);
	}
`;

export const AuthorAndTime = styled.div`
	strong {
		display: block;
		font-size: 0.875rem;
		line-height: 1.6;
	}

	time {
		display: block;
		color: var(--gray-400);
		font-size: 0.75rem;
		line-height: 1.6;
	}
`;
