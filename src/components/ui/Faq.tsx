import React from 'react'

export default function Faq({question, answer}:any) {
  return (
    <div className="p-5 w-[90%] md:w-[70%] lg:w-[55%] m-auto border-2 border-grey rounded-xl bg-[#fdfdfd] my-2">
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
        <span className="font-bold text-lg md:text-xl"> {question}</span>
        <span className="transition group-open:rotate-180">
          <svg
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="group-open:animate-fadeIn mt-3 text-lg">
    {answer}
      </p>
    </details>
  </div>
  )
}
