import { Button } from '../../components/Button';
import { useHistory } from 'react-router';

import IllustrantionImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg'

import './styles.scss';

export function NewPass() {
  return (
    <div id="newPass-page">
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
              type="password"
              placeholder="Nova Senha"
            />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}