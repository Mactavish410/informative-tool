import styles from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import Info from "./pages/Info/Info";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Nav />
        <main className={styles.pages}>
          <Info />
        </main>
      </div>
    </div>
  );
}

export default App;
