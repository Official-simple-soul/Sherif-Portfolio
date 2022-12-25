import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faAddressBook, faAddressCard, faServer } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Intro() {

const [openH, setOpenH] = React.useState(false)
const [openS, setOpenS] = React.useState(false)
const [openU, setOpenU] = React.useState(false)
const [openA, setOpenA] = React.useState(false)
const [openC, setOpenC] = React.useState(false)


    return (
        <div className="h-screen flex items-center border-r border-secondary shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed z-10 px-1">
            <ul className="space-y-20 text-2xl text-secondary">
                <li onClick={()=>setOpenH(!openH)}><FontAwesomeIcon icon={faHome} /><Link href='#hero'><span className={`${!openH?'-left-64':'left-9'} absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-r-lg px-8 border border-secondary transition-all ease-in-out duration-500 nav`}>Start</span></Link></li>
                <li onClick={()=>setOpenS(!openS)}><FontAwesomeIcon icon={faServer} /><Link href='#work'><span className={`${!openS?'-left-64':'left-9'} absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-r-lg px-8 border border-secondary transition-all ease-in-out duration-500 nav`}>Works</span></Link></li>
                <li onClick={()=>setOpenU(!openU)}><FontAwesomeIcon icon={faUser} /><Link href='#skill'><span className={`${!openU?'-left-64':'left-9'} absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-r-lg px-8 border border-secondary transition-all ease-in-out duration-500 nav`}>Skills</span></Link></li>
                <li onClick={()=>setOpenA(!openA)}><FontAwesomeIcon icon={faAddressBook} /><Link href='#about'><span className={`${!openA?'-left-64':'left-9'} absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-r-lg px-8 border border-secondary transition-all ease-in-out duration-500 nav`}>About</span></Link></li>
                <li onClick={()=>setOpenC(!openC)}><FontAwesomeIcon icon={faAddressCard} /><Link href='#contact'><span className={`${!openC?'-left-64':'left-9'} absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-r-lg px-8 border border-secondary transition-all ease-in-out duration-500 nav`}>Contact</span></Link></li>
            </ul>
        </div>
    )
}