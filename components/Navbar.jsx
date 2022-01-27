import React from 'react';
import styles from '../styles/Navbar.module.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Navbar = () => {
  return <div className={styles.mainnav}>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>MENU</DropdownMenu.Trigger>
      <DropdownMenu.Content className={styles.content}>
        <DropdownMenu.Item className={styles.items}>PRICES</DropdownMenu.Item>
        <DropdownMenu.Item className={styles.items}>PROJECTS</DropdownMenu.Item>
        <DropdownMenu.Item className={styles.items}>CONTACT</DropdownMenu.Item>
        <DropdownMenu.Item className={styles.items}>WE</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>;
};

export default Navbar;
