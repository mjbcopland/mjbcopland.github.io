import React from 'react';
import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';

const Context = React.createContext();

export const { Consumer } = Context;

export const Provider = HotkeysTarget(
  class extends React.Component {
    state = { theme: null, dark: true };

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
