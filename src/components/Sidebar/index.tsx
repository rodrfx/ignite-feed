import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { Container, Cover, Footer, Profile } from './styles';

export const Sidebar = () => {
	return (
		<Container>
			<Cover src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" />

			<Profile>
				<Avatar
					src={'http://github.com/rodrfx.png'}
					alt="foto de perfil do usuário"
				/>
				<strong>rodrigo</strong>
				<span>web developer</span>
			</Profile>

			<Footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</Footer>
		</Container>
	);
};
