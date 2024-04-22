import React, { useState } from 'react'

function SidebarMenuItem({ item }) {

    const [open, setOpen] = useState(false)

    if (item.isTitle) {
        return <li className="menu-title">{item.title}</li>;
    } else if (item.isSub) {
        return (
            <li className={open ? "mm-active" : ""}>
                <a  className="has-arrow waves-effect" onClick={() => setOpen(!open)}>
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                </a>
                <ul className={open ? "sub-menu mm-collapse mm-show" : "sub-menu mm-collapse"} aria-expanded="false">
                    {item.sub.map((subItem, index) => (
                        <li key={index}>
                            <a href={subItem.href}>{subItem.title}</a>
                        </li>
                    ))}
                </ul>
            </li>
        );
    } else {
        return (
            <li>
                <a href={item.href} className="waves-effect">
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                </a>
            </li>
        );
    }

}


export default SidebarMenuItem