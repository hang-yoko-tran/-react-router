import React from 'react'
import { useSelector } from 'react-redux'

export default function HomePage() {
    const email = useSelector (state => state.email)
    return (
        <div>
            <h1>Welcome</h1>
            <h1>{email}</h1>
        </div>
    )
}
