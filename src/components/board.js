import React from 'react'
import Square from './square'

export default function Board({squares,onClick}) {
    const dd=Array(4).fill(null)
    
    return (
        <div className="bcontainer">
            {
                squares.map((s,i)=>
                    
                    <Square key={i} value={s} onClick={()=>onClick(i)} />
                   
                )
                
            }
            
        </div>
    )
}
