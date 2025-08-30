'use client' // Error components must be Client Components

import { useEffect } from 'react'

// Save as app/posts/error.jsx
export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>

            <p>
                <div>Information unavailable for this game.</div> 
                <div>Reason: {error?.message}</div>
                <div>Please try again later.</div>
            </p>

            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}
