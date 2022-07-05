import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
