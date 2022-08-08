import s from './Days.module.scss'

interface Props {

};

export interface Tabs {
    value: string;
};

export const Tabs = (props: Props) => {

    const tabs: Tabs[] = [
        {
            value: 'На тиждень'
        },
        {
            value: 'На 10 днів'
        },
        {
            value: 'На місяць'
        },
    ];

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab: Tabs) => (
                    <div className={s.tab} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={s.cancel}>Відхилити</div>
        </div>
    );
};
