import React from 'react';
import '../styles/UnderConstruction.css';

function UnderConstruction() {
    return (
        <div className={'hazard_container'}>
            <h1 style={{
		transform: 'rotate(-10deg)',
		borderRadius: '15px'
	    }}>CAUTION</h1>
            <h2 style={{
		marginTop: '3.5rem',
	    }}>This project is under construction,<br/> kindly watch your heads for debris...</h2>

            <div className="hazard_banner banner1">
            </div>
            <div className="hazard_banner banner2">
            </div>
            <div className="hazard_banner banner3">
            </div>
            <div className="hazard_banner banner4">
            </div>
        </div>
    );
}

export default UnderConstruction;
