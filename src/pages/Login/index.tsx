import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router';

import IllustrantionImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg'

import './styles.scss';
import { api } from '../../services/api';

type IUserProps = string
type IPassProps = string
type IErrorProps = string

export function Login() {

  const history = useHistory()

  const [email, setEmail] = useState<IUserProps>()
  const [password, setPassword] = useState<IPassProps>()
  const [error, setError] = useState<IErrorProps>('')

  function newAccount() {
    history.push('/CreateAccount')
  }

  async function handleSend(e: FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setError('Preencha todos os campos')
    } else {
      try {
        await api.post('/login', { email, password })
          .then(res => {
            const token = res.data;
            localStorage.setItem('Token', JSON.stringify(token));
          })
          
        history.push('/Home')
      } catch (err) {
        setError('Email ou senha incorreto')
      }
    }

  }

  return (
    <div id="login-page">
      <aside>
        <img src={IllustrantionImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire suas duvidas em tempo real</p>
      </aside>
      <main>
        <div className="mainContent">
          <div >
            <img src={LogoImg} alt="Letmeask" />
          </div>
          <button
            className="createAccount"
            onClick={newAccount}
          >
            Criar conta
          </button>
          <div className="separator">se já tiver conta</div>
          <form onSubmit={handleSend} >
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
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