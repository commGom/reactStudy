import Header from './Header';
import styles from './Layout.module.css';
import Menu from './Menu';
import React from 'react';

function Layout({ children, activeMenu }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} />
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;