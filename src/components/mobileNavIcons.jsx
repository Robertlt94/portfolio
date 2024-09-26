import React from 'react';

const MobileNavIcons = (icon, name) => {

    return (
        <div className='mobile-nav-btns'>
            <h1>{icon}</h1>
            <p>{name}</p>
        </div>
    );
};

export default MobileNavIcons;