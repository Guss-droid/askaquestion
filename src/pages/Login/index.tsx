import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router';

import IllustrantionImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg'

import './styles.scss';

type IUserProps = string
type IPassProps = string
type IErrorProps = string

export function Login() {

  const history = useHistory()

  const [user, setUser] = useState<IUserProps>('')
  const [password, setPassword] = useState<IPassProps>('')
  const [error, setError] = useState<IErrorProps>('')

  function newAccount() {
    history.push('/CreateAccount')
  }

  function handleSend(e: FormEvent) {
    e.preventDefault()
    if (!user || !password) {
      setError('Preencha todos os campos')
      console.log("a")
    } else {
      history.push('/Home')
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
              value={user}
              onChange={e => setUser(e.target.value)}
              placeholder="Email ou Nome"
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
          <p>Esqueceu a senha?<a href="/NewPass"> Clique aqui</a></p>
        </div>
      </main>
    </div>
  );
}