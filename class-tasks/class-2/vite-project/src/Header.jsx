import React from 'react';

const Header = ({ value }) => {
    return (
        <>
            <h1>
                Welcome to React!
            </h1>
            <button style={{ padding: '10px', color: 'white', backgroundColor: value >= 0 ? 'green' : 'red', border: "0", borderRadius: "5px" }}>This is a {value >= 0 ? 'green' : 'red'} button </button>
            <p>Changing the value positive to negative will change the color!</p>
        </>
    );
};

export default Header;