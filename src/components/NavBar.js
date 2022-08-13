import React from 'react';
import logo from '../images/logo/react.png' // relative path to image

const NavBar = () => (
    React.createElement('nav', {className: 'nav-bar'},
        React.createElement('div', {className: 'logo'},
            React.createElement('img', {className: 'image-logo', src: logo}, null)),
        React.createElement('div', {className: 'nav-home'},
            React.createElement('button', {className: 'btn btn-home'}, 'Inicio')),

        React.createElement('ul', {className: 'list'},
            React.createElement('li', {className: 'list-item'}, 'Televisores'),
            React.createElement('li', {className: 'list-item'}, 'Notebooks y Tablets'),
            React.createElement('li', {className: 'list-item'}, 'Celulares')
        ),
        React.createElement('div', {className: 'nav-login'},
            React.createElement('button', {className: 'btn btn-login'}, 'Login'))))

export default NavBar;
