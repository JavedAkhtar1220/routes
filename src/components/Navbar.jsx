import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink
                to={'/'}
                style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#fff',
                            background: '#7600dc',
                            color: 'white',
                            padding: "10px",
                            fontWeight: 500,
                            textDecoration: 'none'
                        }
                        : {
                            marginBottom: '10px',
                            padding: "10px",
                            fontWeight: 500,
                            textDecoration: 'none'
                        }
                }
            >Home</NavLink>
            <NavLink
                to={'/about'}
                style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#fff',
                            background: '#7600dc',
                            color: 'white',
                            padding: "10px",
                            fontWeight: 500,
                            textDecoration: 'none'
                        }
                        : {
                            marginBottom: '10px',
                            padding: "10px",
                            fontWeight: 500,
                            textDecoration: 'none'
                        }
                }
            >About</NavLink>
            <NavLink
                to={'/contact'}
                style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#fff',
                            background: '#7600dc',
                            color: 'white',
                            padding: "10px",
                            fontWeight: 500,
                            textDecoration: 'none'
                        }
                        : {
                            marginBottom: '10px',
                            padding: "10px",
                            fontWeight: 500,
                            textDecoration: 'none'
                        }
                }
            >Contact</NavLink>
        </div>
    )
}

export default Navbar