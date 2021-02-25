import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {store} from '../../store';
import Homepage from './homepage/homepage';
import NotFound from '../common/notFound';

const history = createBrowserHistory();

const UnauthenticatedApp = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default UnauthenticatedApp;
