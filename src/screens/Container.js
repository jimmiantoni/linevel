import React from 'react'; 
import AppNavigator from '../navigation/AppNavigator'; 

class Container extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
            <AppNavigator />
        ) 
    }
}


export default Container;