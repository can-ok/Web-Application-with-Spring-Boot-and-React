import React,{Component} from 'react';

import NavigationBar from './AppNav';
import { Button } from 'reactstrap';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar/>
                <h2>Home</h2>
            </div>
            );
    }
}
 
export default Home;