import React from 'react';
import store from 'store';
import update from 'store/plugins/update';

import {
  Classes, Hotkey, Hotkeys, HotkeysTarget,
} from '@blueprintjs/core';

store.addPlugin(update);

const Context = React.createContext();

export const { Consumer } = Context;

export const Provider = HotkeysTarget(
  class extends React.Component {
    state = { themes: [], dark: true };

    componentDidMount() {
      this.setState(store.get('state'));
    }

    setState(state) {
      store.update('state', {}, (old) => Object.assign(old, state));

      if (state.dark) {
        document.body.classList.add(Classes.DARK);
      } else {
        document.body.classList.remove(Classes.DARK);
      }

      return super.setState(state);
    }

    toggleDarkMode = () => {
      const { dark } = this.state;
      this.setState({ dark: !dark });
    };

    renderHotkeys() {
      return (
        <Hotkeys>
          <Hotkey
            global
            combo="shift + d"
            label="Toggle dark mode"
            onKeyDown={this.toggleDarkMode}
          />
        </Hotkeys>
      );
    }

    render() {
      const { children } = this.props;
      const { themes } = this.state;
      return <Context.Provider value={themes}>{children}</Context.Provider>;
    }
  },
);
