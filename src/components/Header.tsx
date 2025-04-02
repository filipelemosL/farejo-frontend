import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css';

const Header: React.FC = () => {
  return (
  <header className='header dbg'>
    <h1 className='dbg'>Farejo</h1>
    {/*<img src='../../public/assets/profilepic.png' className='profile-icon dbg'></img>*/}
  </header>
  );
};

export default Header;
