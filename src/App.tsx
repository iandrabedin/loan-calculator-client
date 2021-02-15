import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {store} from './store';
import Homepage from './pages/homepage/homepage';
import Registration from './pages/registration/registration';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/homepage" component={Homepage}></Route>
          <Route exact path="/registration" component={Registration}></Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
