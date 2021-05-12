import styles from "../styles/Layout.module.css";
import Nav from "../components/Nav";
import Header from '../components/Header'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}</main>
      </div>
    </>
  );
}
