import React from 'react'

const DoDonts = ({dos , donts}) => {

    return (
        <div className='DoDonts'>
            <h1>Do's</h1>
            <ul>
                {dos.map((line) => {
                    return <li style={{ "lineHeight": "35px" }}>{line}</li>
                })}
            </ul>
            <h1>Don'ts</h1>
            <ul>
                {donts.map((line) => {
                    return <li style={{ "lineHeight": "35px" }}>{line}</li>
                })}
            </ul>
        </div>
    )
}

export default DoDonts