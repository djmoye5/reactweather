import React from 'react';
import ReactDOM from 'react-dom';
import FinalHeader from './FinalHeader';
import DayI from './DayI';
import FinalFooter from './FinalFooter';


class Day extends React.Component {
    render() {
       return( 
            <div>
            <FinalHeader />
            <DayI />
            <FinalFooter />

        </div>
       );
    }
}

export default Day;