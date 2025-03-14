import styles from '../../../styles/main.module.scss'
import Image from 'next/image'
import ProfilePicRounded from '@/assets/profile-pic-rounded.svg'

export default function About() {
    return (
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutImage}>
                        <Image
                            className='w-[250px] md:w-[400px] h-auto'
                            src={ProfilePicRounded}
                            alt="Profile Picture Rounded"
                        />
                    </div>
                    <div className={styles.aboutText}>
                        <h3>Sobre mim</h3>
                        <p>
                            Meu nome é Tamires Aguiar e sou psicóloga clínica com especialização em [Sua Especialização]. Desde [Ano de Início], venho dedicando minha carreira a ajudar pessoas a encontrarem equilíbrio emocional, autoconhecimento e uma vida mais plena.
                            Acredito que cada indivíduo é único e, por isso, ofereço um atendimento personalizado, respeitando a história e as necessidades de cada um. Meu objetivo é proporcionar um ambiente acolhedor e seguro, onde você se sinta confortável para expressar seus pensamentos e sentimentos.
                            Minha abordagem terapêutica é baseada em [Abordagem Terapêutica], uma metodologia que valoriza o diálogo, a escuta ativa e o respeito mútuo. Com ela, busco apoiar meus pacientes na compreensão de suas emoções, no enfrentamento de desafios e na construção de soluções para uma vida mais satisfatória.
                        </p>
                    </div>
                </div>
            </div>
    )
} 