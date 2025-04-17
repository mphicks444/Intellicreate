'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="mt-4">We apologize for the inconvenience.</p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={reset}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 