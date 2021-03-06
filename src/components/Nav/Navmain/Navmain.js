import React, { useMemo } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { navMainFields } from '../../../routes/Routes';
import ItemP from '../../App/ItemP/ItemP';
import s from './Navmain.module.css';
import { centerSort } from '../../../lib';
const navmainField = _.map(navMainFields, ({ name, main }) => ({ name, to: main.path, text: _.capitalize(name) }));
console.log(navmainField);
// const navmainField ={
//     home: { name: 'home', to: '/home', text: 'Home' },
//     app: { name: 'app', to: '/', text: 'App' },
//     auth: { name: 'auth', to: '/auth', text: 'Auth' }
// };
const navmainFields = Object.values(navmainField);
const middleNavmainFields = centerSort(navmainFields);
// console.log(middleNavmainFields);
const CardItem = ({ className, text, icon }) => {
    return <div className={[ 'item', className ].join(' ')}>{text}</div>;
};

const Navmain = ({ onChange, name = 'vertical' }) => {
    const memoFields = useMemo(
        () => {
            switch (name) {
                case 'horizontal':
                    return middleNavmainFields;
                default:
                    return navmainFields;
            }
        },
        [ name ]
    );
    return (
        <div className={[ s.nav, s[name] ].join(' ')}>
            {memoFields.map((field, index) => (
                <ItemP
                    // className=' inverted ui segment fluid attached'
                    {...field}
                />
            ))}
        </div>
    );
};

export default withRouter(Navmain);
