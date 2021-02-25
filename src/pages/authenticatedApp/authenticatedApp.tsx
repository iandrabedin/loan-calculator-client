import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {store} from '../../store';
import LoanDetail from './loanDetail';
import NotFound from '../common/notFound';

const history = createBrowserHistory();

const AuthenticatedApp = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoanDetail} />
          <Route exact path="/loan-detail" component={LoanDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default AuthenticatedApp;
