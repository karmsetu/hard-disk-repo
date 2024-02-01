// import React from 'react'

export default function Hero(props) {
    return (
        <>
            <nav className='navbar'>
                {
                    props.data.map(item=> {
                        return <button type="button" className='link-button' key={item.key}>{item.text}</button>
                    })
                }
            </nav>
        </>
    )
}
