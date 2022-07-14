import styled from 'styled-components';

export const Container = styled.article`
	background: var(--gray-800);
	padding: 2.5rem;
	border-radius: 8px;

	& + article {
		margin-top: 2rem;
	}
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	time {
		font-size: 0.875rem;
		color: var(--gray-400);
	}
`;

export const Author = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const AuthorInfo = styled.div`
	display: flex;
	flex-direction: column;

	strong {
		color: var(--gray-100);
		line-height: 1.6;
	}

	span {
		font-size: 0.875rem;
		color: var(--gray-400);
		line-height: 1.6;
	}
`;

export const Content = styled.article`
	color: var(--gray-300);
	line-height: 1.6;
	margin-top: 1.5rem;

	p {
		margin-top: 1rem;
	}

	a {
		color: var(--green-500);
		font-weight: bold;
		text-decoration: none;
		transition: color 0.1s;

		&:hover {
			color: var(--green-300);
		}
	}
`;

export const CommentForm = styled.form`
	width: 100%;
	border-top: 1px solid var(--gray-600);
	margin-top: 1.5rem;
	padding-top: 1.5rem;

	strong {
		color: var(--gray-100);
		line-height: 1.6;
	}

	textarea {
		width: 100%;
		height: 6rem;
		background: var(--gray-900);
		color: var(--gray-100);
		line-height: 1.4;
		margin-top: 1rem;
		padding: 1rem;
		border: 0;
		border-radius: 8px;
		resize: none;
	}

	footer {
		visibility: hidden;
		max-height: 0;

		button {
			background: var(--green-500);
			color: var(--white);
			font-weight: bold;
			margin-top: 1rem;
			padding: 1rem 1.5rem;
			border: 0;
			border-radius: 8px;
			cursor: pointer;
			transition: background-color 0.1s;

			&:hover:not(:disabled):hover {
				background: var(--green-300);
			}

			&:disabled {
				opacity: 0.7;
				cursor: not-allowed;
			}
		}
	}

	&:focus-within footer {
		visibility: visible;
		max-height: none;
	}
`;

export const CommentList = styled.div`
	margin-top: 2rem;
`;
