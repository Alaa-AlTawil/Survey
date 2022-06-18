import React from 'react';
import Button from './Button'

function Survey(props) {
    return (
        <div className='survey'>
            <div className="main_survey">
                {props.name}
            </div>
            <div className="remove">
                <Button className="btn" text={"remove"} onclick={()=>{
                    
                }} />
            </div>
        </div>
        
    );
}

export default Survey;