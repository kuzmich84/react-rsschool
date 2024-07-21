import BoundaryButtonTest from '../ui/BoundaryButtonTest';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <div className={styles.header_content}>
        <h1>Movie Search</h1>
        <BoundaryButtonTest />
      </div>
      <hr />
    </>
  );
}

export default Header;
