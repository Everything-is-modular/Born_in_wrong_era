import React from 'react';
import './style.css';
import Service from './Service';

const MyServices = () => {
    let servicesData = [
        {
            title: 'Web Design',
            description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
        },
        {
            title: 'Web Design',
            description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
        },
        {
            title: 'Web Design',
            description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
        },
        {
            title: 'Web Design',
            description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
        },
        {
            title: 'Web Design',
            description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
        },
        {
            title: 'Web Design',
            description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
        },
    ]
    return(
        <React.Fragment>
            <div class="services-block">
                <div class="about-me-head">
                    <div>My Services</div>
                    <div>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</div>
                </div>
                
                <div class="services-grid">
                    {
                        servicesData.map((service, index) => {
                            return(
                                <Service 
                                    service={service}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyServices;