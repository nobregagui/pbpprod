import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


const CustomTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme
      // appearance={
      //   makeStore.getState().sidebar.appearance
      //     ? makeStore.getState().sidebar.appearance.dark
      //     : makeStore.getState().sidebar.appearance
      // }
      appearance='light'
      // accentColor={
      //   makeStore.getState().sidebar.colorsTheme
      //     ? makeStore.getState().sidebar.colorsTheme.orange
      //     : makeStore.getState().sidebar.colorsTheme
      // }
      accentColor='green'
      grayColor='gray'
    >
      <>{children}</>
    </Theme>
  );
};
export default CustomTheme;
