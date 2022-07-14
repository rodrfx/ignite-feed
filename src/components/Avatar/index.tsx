import { ImgHTMLAttributes } from 'react';
import { AvatarWithBorder, BorderlessAvatar } from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
	return hasBorder ? (
		<AvatarWithBorder {...props} />
	) : (
		<BorderlessAvatar {...props} />
	);
};
