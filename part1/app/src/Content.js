import React from 'react'
import ReactDOM from 'react-dom'
import Part from './Part';

const Content = (props) => {


    const parts = props.parts.map( (part) => {
        return (<p>{part.part} {part.exercise}</p>)
    } )

    return (
        <div>
            {parts}
        </div>
    )
}

export default Content;