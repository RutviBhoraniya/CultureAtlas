import React from 'react'

const PracticalInformation = ({data}) => {

    return (
        <div className='PracticalInformation'>
            <h1>Practical Information</h1>
            {data.map((line) => {
                return <div>
                    <p className='festival-Iteam'>{line.title}:</p>
                    <p>{line.description}</p>
                </div>
            })}
        </div>
    )
}

export default PracticalInformation