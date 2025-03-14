"use client"

import styles from '../../styles/main.module.scss'
import Image from 'next/image'
import LogoHeader from '@/assets/logo-header.png'
import WhatsIcon from '@/assets/icon-whatsapp-floating.svg'
import { useRef, useState } from 'react'


export default function Header() {

    const menuRef = useRef<HTMLUListElement>(null)

    function openMenu() {
        menuRef?.current?.classList.toggle(styles.menuMobile)
    }

    function closeMenu() {
        if (menuRef?.current?.classList.contains(styles.menuMobile)) {
            menuRef.current.classList.remove(styles.menuMobile)
        }
    }

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

            <div className={styles.menuContainer}>
            <a href="/">
                <Image
                    className='logo-header'
                    src={LogoHeader}
                    alt="Picture of the author"
                />
            </a>
            <ul ref={menuRef}>
                <button className={styles.closeMenuButton} onClick={openMenu}></button>
                <li><a href="#" onClick={closeMenu}>Home</a></li>
                <li><a href="#" onClick={closeMenu}>Porque fazer terapia?</a></li>
                <li><a href="#" onClick={closeMenu}>Área de atuação</a></li>
                <li><a href="#" onClick={closeMenu}>Sobre mim</a></li>
                <li><a className={styles.btn} href="#" onClick={closeMenu}>Contato</a></li>
            </ul>
            <button className={styles.openMenuButton} onClick={openMenu}></button>
            </div>
            </div>

    )
} 