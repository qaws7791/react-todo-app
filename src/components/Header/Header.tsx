import styles from './Header.module.css'

interface HeaderProps {
  title?: string
  subTitle?: string
}

const Header = ({
  title = '', 
  subTitle = ''
}:HeaderProps) => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__title']}>{title}</h1>
      <p className={styles['header__subtitle']}>{subTitle}</p>
    </header>
  )
}

export default Header