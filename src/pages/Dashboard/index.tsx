import React, {useState, FormEvent} from 'react';
import logoImg from '../../assets/logo.svg';
import {Title, Form, Repositories, Error} from './styles';
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

//Usando const temos como definir a tipagem mais facilmente
//É do Tipo, React.FunctionComponent (não usamos mais no fomrato de classe)
const Dashboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    //Consumir a API do github e atualizar a lista de repositórios
    event.preventDefault();

    if(!newRepo) {
      setInputError('Digite um autor/repositório');
      return;
    }

    try {
      //Formato da rota: api.github.com/repos/nomeAutor/nomeRepositorio (Pegar Dados Sobre Aquele Repositório)
      var response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository])

      setNewRepo('');
      setInputError('');
    } catch(err) {
      setInputError('Erro ao buscar repositório. Verificar autor e nome do repositório')
    }

  }

  return (
  <>
    <img src={logoImg} alt='Github Explorer' />
    <Title>Explore Repositórios no Github!</Title>
    <Form hasError={!! inputError} onSubmit={handleAddRepository}>
      <input
        placeholder="Digite o nome do repositório"
        value={newRepo}
        onChange={ e => setNewRepo(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </Form>

    { inputError && <Error>{inputError}</Error> }

    <Repositories>

      {repositories.map(repository => (
        <a key={repository.full_name} href="teste">
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />

          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20}/>

        </a>
      ))}

    </Repositories>
  </>
  );
}


export default Dashboard;
