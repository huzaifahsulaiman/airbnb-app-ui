import React, { Component } from 'react';
import LoggedOut from './src/screens/LoggedOut';
import LogIn from './src/screens/LogIn';
import ForgotPassword from './src/screens/ForgotPassword';
import { Provider } from 'react-redux';
import store from './src/redux/store';
// import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
// import AppWithNavigationState from './src/navigators/AppNavigator';


// export default class App extends React.Component {
//   render() {
//     return (
      // <LoggedOut/>
      // <LogIn/>
      // <ForgotPassword/>
//     );
//   }
// }

// console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <AppWithNavigationState listener={createReduxBoundAddListener('root')} /> */}
        <LogIn/>
      </Provider>
    );
  }
}
