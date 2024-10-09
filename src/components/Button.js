import React, { Children } from 'react'

function Button({ children, href, className }) {
  return (
    <a className={`mt-1 xl:mt-7 px-6 py-3 text-lg font-medium leading-tight inline-block bg-blue-600 rounded-full shadow-xl text-white border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-sky-500 ${className}`}
      href={href}>
      {children}
    </a>
  )
}

export default Button
