import React from 'react';
import { hot } from 'react-hot-loader/root';

import styles from './App.css';

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <h1>App</h1>
    </div>
  );
}

export default hot(App);
