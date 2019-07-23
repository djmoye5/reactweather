import React from 'react';
import ReactDOM from 'react-dom';
import FinalHeader from './FinalHeader';
import WeekI from './WeekI';
import FinalFooter from './FinalFooter';

class Week extends React.Component {
    render() {
       return( 
            <div>
            <FinalHeader />
            <WeekI />
            <FinalFooter />
​
        </div>
       );
    }
}

export default Week;