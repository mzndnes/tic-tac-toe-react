import React from 'react'
// import '../index.css';

export default function Square({value,onClick}) {
    return (
        
            <button className="button" onClick={onClick}>{value}</button>
        
    )
}
