import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
    const history = useHistory()
    const email = useSelector (state => state.email)
    if (email==='') {
        history.push("/")
    }
    return (
        <div>
            <h1>Welcome</h1>
            <h1>{email}</h1>
        </div>
    )
}
