import React from 'react';
import logoImg from '../../assets/logo.svg';
import {Title, Form, Repositories} from './styles';
import {FiChevronRight} from 'react-icons/fi';

//Usando const temos como definir a tipagem mais facilmente
//É do Tipo, React.FunctionComponent (não usamos mais no fomrato de classe)
const Dashboard: React.FC = () => {
  return (
  <>
    <img src={logoImg} alt='Github Explorer' />
    <Title>Explore Repositórios no Github!</Title>
    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>

      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/11950282?s=460&u=239c79573b0a8c2c253a23d1e40cec16c504fb7a&v=4"
        alt="Danilo Carvalho" />

        <div>
          <strong>DaniloParkour/Govet</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20}/>

      </a>

    </Repositories>
  </>
  );
}


export default Dashboard;
