'use client';
import React from 'react'

export default function Error({
    error,
    reset
} : {
    error : Error,
    reset : () => void
}) {

  return (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen'>
        <h2 className="my-4 font-bold text-2xl">
            Something went wrong
        </h2>
        <button className="mb-4 p-4 bg-red-500 text-white-rounded-xl"
        onClick={() => reset()}
        >
            Reload
        </button>
      
    </main>
  )
}
