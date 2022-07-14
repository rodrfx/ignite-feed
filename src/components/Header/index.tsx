import logo from '../../assets/logo.svg';
import { Container } from './styles';

export const Header = () => {
	return (
		<Container>
			<img src={logo} alt="Logotipo" />
		</Container>
	);
};
