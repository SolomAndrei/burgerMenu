import React from 'react'
import './Menu.css'


const Menu = ({ header, items, active, setActive }) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className='blur' />
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item =>
                        <li key={item.value}>
                            <a href={item.href}>{item.value}</a>
                            <div className='icons'>{item.icon}</div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu