import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { connect } from 'ember-redux';

const stateToComputed = function(state, attrs) {
  return {
    number: state.fooz,
    greeting: `Welcome back, ${attrs.name}!`
  };
};

const dispatchToActions = (dispatch) => {
  return {
    up: () => dispatch({type: 'UP'})
  };
};

const CountListComponent = Component.extend({
  bar: computed('greeting', function() {
    const someKey = get(this, 'greeting');
    return `${someKey} - foobar style`;
  }),

  actions: {
    go() {
      window.console.log('clicked foo bar yo!');
      this.actions.up();
    }
  }
});

export default connect(stateToComputed, dispatchToActions)(CountListComponent);
