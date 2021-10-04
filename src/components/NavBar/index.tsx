import NoneAvatarPng from '../../assets/NoneAvatar.png'
import './styles.scss';

export function Navbar() {
  return (
    <div id='Navbar'>
      <div>
        <header className="header">
          <img src={NoneAvatarPng} alt="Foto de peril" />
        </header>
      </div>
    </div>
  );
}