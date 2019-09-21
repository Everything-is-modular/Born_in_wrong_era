import React from 'react';
import './App.css';
// import Header from './Components/Header';
// import ProfileBlock from './Components/ProfileBlock';
// import MyServices from './Components/MyServices';
import Greeting from './Components/Basic';

class App extends React.Component {
    render() {
        
        return(
            <div>
                {/* <Header />
                <ProfileBlock />
                <MyServices /> */}

                <Greeting name={{a:1, b:2}} />
                

            </div>
        );
        
    }
}

export default App;