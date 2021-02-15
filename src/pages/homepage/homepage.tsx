import {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {constraintsAction, offerAction} from '../../actions';
import {State} from '../../reducers';
import {constraintsState} from '../../reducers/constraintsReducer';
import {offerState} from '../../reducers/offerReducer';
import {Calculator, Table} from '../components';
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

  useEffect(() => {
    constraintsAction();
  }, [constraintsAction]);

  return (
    <div className={styles.homepage}>
      <h1 className={styles.homepage__title}>
        0% online loan, first 300€ without interests
      </h1>
      <div>
        <div className={styles.card}>
          {constraints?.intervals?.amountInterval?.defaultValue && (
            <Calculator
              amountInterval={constraints.intervals.amountInterval}
              termInterval={constraints.intervals.termInterval}
              offerAction={offerAction}
            />
          )}
          {offer?.totalAmount && <Table offer={offer} />}
        </div>
      </div>
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
