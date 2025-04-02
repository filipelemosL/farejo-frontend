import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css';
import './AlertActivity.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AlertActivity: React.FC = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Alerts',
                data: [4, 3, 6, 8, 7],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    return (
        <>
            <div className='component-header dbg'>
                <h5>Your alerts activity</h5>
                <a href="#">See all</a>
            </div>
            <div className='chart dbg'>
                <Line data={data} />
            </div>
        </>
    );
};

export default AlertActivity;