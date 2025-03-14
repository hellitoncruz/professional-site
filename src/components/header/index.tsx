import styles from '../../styles/main.module.scss'
import Image from 'next/image'
import LogoHeader from '@/assets/logo-header.png'
import WhatsIcon from '@/assets/icon-whatsapp-floating.svg'


export default function Header() {
    return (
        <div className={styles.header}>
            <a className={styles.whatsappIcon} target="_blank" href="https://api.whatsapp.com/send/?phone=5577991012086&text=Olá%20Tamires%2C%20venho%20pelo%20seu%20site%20e%20gostaria%20de%20solicitar%20atendimento%20psicológico.&type=phone_number&app_absent=0">
                <Image
                    className='whatsapp-floating-icon'
                    src={WhatsIcon}
                    width={48}
                    alt="Whatsapp Icon"
                />
            </a>
            

            <a href="/">
                <Image
                    className='logo-header'
                    src={LogoHeader}
                    alt="Picture of the author"
                />
            </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Porque fazer terapia?</a></li>
                    <li><a href="#">Área de atuação</a></li>
                    <li><a href="#">Sobre mim</a></li>
                    <li><a className={styles.btn} href="#">Contato</a></li>
                </ul>
        </div>
    )
} 