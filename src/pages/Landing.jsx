import React from 'react';
import './Landing.scss';

export const Landing = props => {
    return (
        <React.Fragment>
            <div style={{display:'inline-block'}}>
                <div className='Landing'>
                    <div className='left-align'>
                        This is the landing page
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}