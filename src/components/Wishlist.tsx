import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css';
import './Wishlist.css';

const Wishlist: React.FC = () => {
    return (
        <>
            <div className='component dbg'>
                <div className='component-header dbg'>
                    <h5>Sua lista de desejos</h5>
                    <a href="#">Ver tudo</a>
                </div>
                <div className='wishlist-container dbg'>
                   
                </div>
            </div>

        </>
    );
};

export default Wishlist;