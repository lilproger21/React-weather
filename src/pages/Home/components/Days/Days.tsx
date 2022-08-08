import { Card } from './Card';
import s from './Days.module.scss'
import { Tabs } from './Tabs';

interface Props {

};

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
};

export const Days = (props: Props) => {

    const days: Day[] = [
        {
            day: 'Сьогодні',
            day_info: '6 серп',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Сьогодні',
            day_info: '7 серп',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Невеликий дощ і сонце',
        },
        {
            day: 'Сьогодні',
            day_info: '8 серп',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Невеликий дощ',
        },
        {
            day: 'Сьогодні',
            day_info: '9 серп',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Сьогодні',
            day_info: '10 серп',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Сьогодні',
            day_info: '11 серп',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Сьогодні',
            day_info: '12 серп',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
    ];

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {days.map((day: Day) => (
                    <Card key={day.day_info} day={day} />
                ))}
            </div>
        </>

    )
};
