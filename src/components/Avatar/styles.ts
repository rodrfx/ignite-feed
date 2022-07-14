import styled from 'styled-components';

export const AvatarWithBorder = styled.img`
	width: calc(3rem + 12px);
	height: calc(3rem + 12px);
	border-radius: 8px;
	border: 4px solid var(--gray-800);
	outline: 2px solid var(--green-500);
`;

export const BorderlessAvatar = styled(AvatarWithBorder)`
	width: 3rem;
	height: 3rem;
	border: 0;
	outline: 0;
`;
