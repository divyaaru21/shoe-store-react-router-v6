import React from 'react';

import styles from '../App.module.css';
import cx from 'classnames'

function About() {
  return (<div className={styles.container}>
    <h1 className={styles.heading1}>About</h1>
    <p className={cx(styles.paragraph, styles.centered)}>
      This is a simple shoe store app built with React, TypeScript, Material UI,
      and React Router.
    </p>
  </div>);
}

export default About;
