import React from 'react';
import UserSurvey from './UserSurvey';

function UserSurveys() {
    return (
        <div>
        <div className='Container'>
            <UserSurvey name='survey1'/>
            <UserSurvey name='survey2'/>
            <UserSurvey name='survey3'/>
            <UserSurvey name='survey4'/>
            <UserSurvey name='survey5'/>
        </div>
        </div>
     );
}

export default UserSurveys;