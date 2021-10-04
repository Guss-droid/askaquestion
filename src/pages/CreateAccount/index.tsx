import { Button } from '../../components/Button';
import IllustrantionImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg'

import './styles.scss';

export function CreateAccount() {
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
          <form >
            <input
              type="text"
              placeholder="Email"
            />
            <input
              type="text"
              placeholder="Nome"
            />
            <input
            type="password"
            placeholder="Senha"
            />
            <Button type="submit">Criar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}