import {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import {constraintsAction, offerAction} from '../../../actions';
import {State} from '../../../reducers';
import {constraintsState} from '../../../reducers/constraintsReducer';
import {offerState} from '../../../reducers/offerReducer';
import {Calculator, Table, Button} from '../../components';
import {Navbar} from '../components';
import styles from './homepage.module.scss';

interface DataProps {
  constraints: constraintsState;
  offer: offerState;
}

interface MethodProps {
  constraintsAction: () => void;
  offerAction: (amountValue: number, termValue: number) => void;
}

type HomePageProps = DataProps & MethodProps;

const Homepage = (props: HomePageProps) => {
  const {constraints, offer, constraintsAction, offerAction} = props;

  const {loginWithRedirect} = useAuth0();

  useEffect(() => {
    constraintsAction();
  }, [constraintsAction]);

  return (
    <div className={styles.homepage}>
      <Navbar />
      <section className={styles.content}>
        <h1 className={styles.homepage__title}>
          0% online loan, first 300€ without interests
        </h1>
        <div>
          {constraints?.intervals?.amountInterval?.defaultValue && (
            <>
              <div className={styles.card}>
                <Calculator
                  amountInterval={constraints.intervals.amountInterval}
                  termInterval={constraints.intervals.termInterval}
                  offerAction={offerAction}
                />
                {offer?.totalAmount && <Table offer={offer} />}
              </div>
              <div className={styles.link}>
                <Button onClick={() => loginWithRedirect()}>
                  Get your loan
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    constraints: state.constraintsReducer,
    offer: state.offerReducer,
  };
};

const mapDispatchToProps = (dispatch: any): MethodProps => ({
  constraintsAction: () => dispatch(constraintsAction()),
  offerAction: (amountValue, termValue) =>
    dispatch(offerAction(amountValue, termValue)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Homepage),
);
