import React from 'react';

import { Classes, Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';

const Context = React.createContext({ dark: false });

export const { Consumer } = Context;

export const Provider = HotkeysTarget(
  class extends React.Component<{}, { dark: boolean }> {
    public state = { dark: false };

    public toggleDarkMode = () => {
      this.setState({ dark: !this.state.dark }, () => {
        if (this.state.dark) {
          document.body.classList.add(Classes.DARK);
        } else {
          document.body.classList.remove(Classes.DARK);
        }
      });
    };

    public renderHotkeys() {
      return (
        <Hotkeys>
          <Hotkey global combo="shift + d" label="Toggle dark mode" onKeyDown={this.toggleDarkMode} />
        </Hotkeys>
      );
    }

    public render() {
      return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
    }
  }
);
