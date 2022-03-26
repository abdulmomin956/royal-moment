import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <h2><u>FAQ</u></h2>
            <h3>How does React work?</h3>
            <p> React works with a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
            <h3>Props vs State</h3>
            <p>Props are used to pass data from one component to another.The state are not used to pass data from one component.The state is a local data storage. State are variables that react will react , updating the UI when values changes.We can also send an array or a function as props.</p>
        </footer>
    );
};

export default Footer;