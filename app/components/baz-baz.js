import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { connect } from 'ember-redux';

const stateToComputed = function(state, attrs) {
  console.log(this.color);
  return {
    number: state.fooz,
    greeting: `Hello ${attrs.name}!`
  };
};

const dispatchToActions = (dispatch) => {
  return {
    up: () => dispatch({type: 'UP'})
  };
};

class MyClazz extends Component {
  @tracked color = 'red';

  @computed('greeting')
  get bar() {
    const someKey = this.greeting;
    return `${someKey} - bazbaz style`;
  }

  @action
  go() {
    window.console.log('Glimmer clicked baz baz yo!');
    this.actions.up();
  }

  constructor() {
    super(...arguments);
    this.color = 'green';
  }
}

export default connect(stateToComputed, dispatchToActions)(MyClazz);
