import React from 'react';
import Survey from './Survey';
import Button from './Button';

function Surveys() {
    return (
        <div>
        <Button className={'btn'} text={'Create Survey'} onclick={ ()=>{
        }}/>
        <div className='Container'>
            <Survey name='survey1'/>
            <Survey name='survey2'/>
            <Survey name='survey3'/>
            <Survey name='survey4'/>
            <Survey name='survey5'/>
        </div>
        </div>
     );
}

export default Surveys;