'use client'

import Link from 'next/link'
import style from './Header.module.css'
import { useState, useEffect } from 'react'

const Header = () => {
    const [mainNav, setMainNav] = useState([])
    const [productNav, setProductNav] = useState([])

    

    useEffect(() => {
        setMainNav([
            {
                label: 'CBD',
                link: '/'
            },
            {
                label: 'Товари с технічних конопель',
                link: '/catalog'
            },
            {
                label: 'B2B',
                link: '/contacts'
            },
            {
                label: 'Contacts',
                link: '/contacts'
            }
        ])

        setProductNav([
            {
                label: 'CBD',
                link: '/'
            },
            {
                label: 'Catalog',
                link: '/catalog'
            },
            {
                label: 'B2B',
                link: '/contacts'
            },
            {
                label: 'About us',
                link: '/about-us'
            }
        ])
    }, [])



    return(
            <header className={style.header}>
                <div className={style.header_wraper}>
                    <div className={style.header_nav}>
                        <div className={'logo'}>logo</div>
                        <div className={style.global_nav}>
                            {mainNav.map((item, i) => {
                                return(<Link href={item.link} key={i} className={style.nav}>{item.label}</Link>)
                            })}
                        </div>
                        <div className={'cart'}>cart</div>
                    </div>
                    {/* <div className={style.product_nav}>
                        {productNav.map((item) => {
                            return(<Link href={item.link} className={style.nav}>{item.label}</Link>)
                        })}
                        
                    </div> */}
                </div>
            </header>
        )
}

export default Header