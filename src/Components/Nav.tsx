import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { JsxElement } from 'typescript';
import '../Assets/nav.css'

const Nav = {
    link: (href: string, text: string) => {
        return (
        <a href={href}>{text}</a>
        );
    },
    Menu: (href: string, text: string) =>{
        return (
            <a className='NavMenu' href={href}><span className='NavText' >{text}</span></a>
        )
    },
    MenuLong: (href: string, text: string) => {
        return (
            <a className='NavMenu2' href={href}><span className='NavText'>{text}</span></a>
        )
    },
    Bar: (Menus: JSX.Element[]) =>{
        const menuList = Menus.map((menu, index) => <li key={index} className="navMenuListItem">{menu}</li>)
        return (
        <ul className='NavMenuList'>
            {menuList}
        </ul>  
        );
    }
}

export {
  Nav
};
