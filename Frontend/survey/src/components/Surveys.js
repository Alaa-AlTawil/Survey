import React from 'react';
import Survey from './Survey';
import Button from './Button';
import {useNavigate} from 'react-router-dom';

function Surveys() {
    const navigate = useNavigate();
    return (
        <div>
        <Button className={'btn'} text={'Create Survey'} onclick={ ()=>{
            navigate('./addsurvey')
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