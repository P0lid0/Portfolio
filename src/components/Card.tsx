import python from '../assets/python-svgrepo-com.svg'
import sqlite from '../assets/sqlite.svg'
import git from '../assets/git.svg'
import gorm from '../assets/gorm.svg'
import fiber from '../assets/fiber.svg'

import html from '../assets/hmtl.svg'
import css from '../assets/css.svg'
import ts from '../assets/ts.svg'
import react from '../assets/react.svg'
import sass from '../assets/sass.svg'
import tailwind from '../assets/tailwind.svg'
import vite from '../assets/vite.svg'

import { Code, BracketsCurly } from '@phosphor-icons/react'

import '../styles/Card.sass'

function Card(){
    return(
        <div className='card-direction'>
            <div className='card'>
                <BracketsCurly size={64} color="#53a8b2" weight='light' className='icon'/>
                <span>Estudo de Backend</span>
                <p>Tenho muito interesse em lógicas e ver as estruturações tomando forma</p>

                <span>Linguanges Familiares</span>
                <p>Python, JavaScript</p>

                <span>Dev Tools</span>
                <ul>
                    
                    <li><img src={git} alt="" /></li>
                    
                </ul>
            </div>
            <div className='card'>
                <Code size={64} color="#53a8b2" weight='light' className='icon'/>
                <span>Estudo de Frontend</span>
                <p>Ver o que eu faço tomando forma na tela me inspira a continuar</p>

                <span>Linguanges Familiares</span>
                <div className='linguagens'>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={ts} alt="" />
                </div>

                <span>Dev Tools</span>
                <ul>
                    <li><img src={react} alt="" /></li>
                    
                    <li><img src={tailwind} alt="" /></li>
                    <li><img src={vite} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}
export default Card