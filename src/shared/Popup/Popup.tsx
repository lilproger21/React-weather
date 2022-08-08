import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss'

interface Props {}

export const Popup = ({}: Props) => {

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - відчувається як 17',
        },
        {
            icon_id: 'pressure',
            name: 'Тиск',
            value: '765 мм ртутного стовпчика - нормальне', 
        },
        {
            icon_id: 'precipitation',
            name: 'Опади',
            value: 'Без опадів', 
        },
        {
            icon_id: 'wind',
            name: 'Вітер',
            value: '3 м/c південно-західний - слабкий вітер', 
        },
    ];

    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>20°</div>
                    <div className={s.day__name}>Середа</div>
                    <div className={s.day__img}><GlobalSvgSelector id='sun'/></div>
                    <div className={s.day__time}>Час: <span>21:22</span></div>
                    <div className={s.day__city}>Місто: Київ</div>
                </div>
                <div className={s.this__day_info_items}>
                    {items.map((item: Item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id='close' />
                </div>
            </div>
        </>

    );
};
