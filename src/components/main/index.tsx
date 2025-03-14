import styles from '../../styles/main.module.scss'
import Areas from './Areas'
import Info from './Info'
import Home from './Home'
import Contact from './Contact'
import About from './About'

export default function Main() {
    return (
        <div className={styles.main}>
            <Home/>
            <Info/>
            <Areas/>
            <About/>
            <Contact/>
        </div>
    )
} 