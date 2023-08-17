"use client";

import { useContext } from "react";
import styles from "./theme.module.css"
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>A</div>
      <div className={styles.icon}>B</div>
      <div
        className={styles.ball}
        style={mode ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}