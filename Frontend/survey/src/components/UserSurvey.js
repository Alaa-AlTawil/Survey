import React from 'react';

function UserSurvey(props) {
    return (
        <div className='survey'>
            <div className="main_survey">
                {props.name}
            </div>
        </div>
        
    );
}

export default UserSurvey;