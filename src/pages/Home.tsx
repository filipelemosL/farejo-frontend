import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import BestDeals from '../components/BestDeals';
import Wishlist from '../components/Wishlist';
import AlertActivity from '../components/AlertActivity';
import AdMiddle from '../components/AdMiddle';
import Categories from '../components/Categories';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
      <Categories/>
       <BestDeals/>
       <AdMiddle/>
       <Wishlist/>
      {/* <AlertActivity/> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
