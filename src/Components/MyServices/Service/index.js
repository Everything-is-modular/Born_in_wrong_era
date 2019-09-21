import React from 'react';
import './style.css';

const Service = (props) => {
    return(
        <React.Fragment>
            <div class="service">
                <div class="icon"></div>
                <div class="service-title">{props.service.title}</div>
                <div class="service-description">{props.service.description}</div>
            </div>
        </React.Fragment>
    );
}

export default Service;