import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {State} from '../../reducers';
import {constraintsAction} from '../../actions';

interface MethodProps {
  constraintsAction: () => void;
}
type RegistrationProps = MethodProps;

const Registration = (props: RegistrationProps) => {
  const {constraintsAction} = props;

  return (
    <Fragment>
      <input></input>
      <button onClick={() => constraintsAction()}>Create account</button>
    </Fragment>
  );
};

const mapStateToProps = (state: State) => {
  return {
    constraints: state.constraintsReducer,
  };
};

const mapDispatchToProps = (dispatch: any): MethodProps => ({
  constraintsAction: () => dispatch(constraintsAction()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Registration),
);
