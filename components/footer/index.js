import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a
          href="https://xebia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/xebia.png" alt="Xebia Logo" width={72} height={16} />
          </span>
        </a>
      </footer> );
}
 
export default Footer;