import styles from '../../../styles/main.module.scss'
import Image from 'next/image'
import ProfilePic from '@/assets/profile-pic-main.svg'

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.greetings}>
                <h1>Bem-vindo(a) à sua jornada de bem-estar emocional!</h1>
                <h4>Sou Tamires Aguiar, e estou aqui para ajudar você a encontrar equilíbrio e felicidade. Agende uma consulta e comece a transformar sua vida hoje!</h4>
                <a href="">Agendar consulta</a> {/*Mensagem automatica que liga diretamente no whatsapp do Psicologo */}
            </div>
            <Image
                className='w-[250px] md:w-[400px] h-auto'
                src={ProfilePic}
                alt="Picture of the author"
            />
        </div>
    )
} 