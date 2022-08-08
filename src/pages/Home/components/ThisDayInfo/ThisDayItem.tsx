import { IndicatorSvgSeelector } from "../../../../assets/icons/indicator/IndicatorSvgSeelector";
import { Item } from "./ThisDayInfo";
import s from './ThisDayInfo.module.scss'

interface Props {
    item: Item;
};

export const ThisDayItem = ({item}: Props) => {

    const {icon_id, name, value} = item;

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSeelector id={icon_id}/>
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    );
};
