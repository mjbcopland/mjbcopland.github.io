import React from 'react';
import store from 'store';
import update from 'store/plugins/update';

import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';

store.addPlugin(update);

const Context = React.createContext();

export const { Consumer } = Context;

export const Provider = HotkeysTarget(
  class extends React.Component {
    state = { theme: null, dark: true };

    componentDidMount() {
      this.setState(store.get('state'));
    }

    setState(state) {
      store.update('state', {}, (old) => Object.assign(old, state));
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
      const { theme, dark } = this.state;
      const themes = [theme, dark ? 'bp3-dark' : null];
      return <Context.Provider value={themes}>{children}</Context.Provider>;
    }
  },
);
