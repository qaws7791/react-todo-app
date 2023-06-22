import styles from './Header.module.css'
const Header = ({title = '', subTitle = ''}) => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__title']}>{title}</h1>
      <p className={styles['header__subtitle']}>{subTitle}</p>
    </header>
  )
}

export default Header