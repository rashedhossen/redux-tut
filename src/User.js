import React from 'react'

function User(props) {

    const {data} = props
    return (
        <div>
            <h1>user Component</h1>
            <h4> {data.name}</h4>
        </div>
    )
}

export default User
