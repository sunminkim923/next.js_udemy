import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [aaa, setAaa] = useState(false);

  function onClickButton() {
    setAaa(!aaa);
  }

  console.log(aaa);

  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>
      <button onClick={onClickButton}>버튼</button>
    </div>
  );
}
