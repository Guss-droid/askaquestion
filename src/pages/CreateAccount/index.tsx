import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import IllustrantionImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg'
import './styles.scss';
import { useHistory } from 'react-router';

type INameProps = string
type IEmailProps = string
type IPassProps = string
type IErrorProps = string

export function CreateAccount() {

  const history = useHistory()

  const [name, setName] = useState<INameProps>()
  const [email, setEmail] = useState<IEmailProps>()
  const [password, setPassword] = useState<IPassProps>()
  const [error, setError] = useState<IErrorProps>()

  async function handleCreate(e: FormEvent) {
    e.preventDefault()
    if (!email || !password || !name) {
      setError('Preencha todos os campos')
    } else {
      try {
        await api.post('/users', {name, email, password})
        .then(res => {
          const user = res.data
          console.log(user)
        })
        history.push('/')
      } catch (error) {
        setError("Email já cadastrado")
      }
    }
  }

  return (
    <div id="createAccount-page">
      <aside>
        <img src={IllustrantionImg} alt="Ilustração simbolizando perguntas e respostas" />
      </aside>
      <main>
        <div className="mainContent">
          <div >
            <img src={LogoImg} alt="Letmeask" />
          </div>
          <form onSubmit={handleCreate} >
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit">Criar</Button>
          </form>
          {
            error ?
              <span>
                {error}
              </span>
              :
              <></>
          }
        </div>
      </main>
    </div>
  );
}