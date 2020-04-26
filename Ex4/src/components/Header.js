import React from 'react';

function Header(){

    const headerStyle = {
        backgroundColor: "#3311AA",
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 30,
        padding: 30
    }

    return (
        <p style={headerStyle}>Collection of visited cities </p>
    )
}

export default Header