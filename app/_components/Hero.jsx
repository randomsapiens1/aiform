import React from 'react'

function Hero() {
  return (
    <div>
        <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-orange-400 via-orange-200 to-orange-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Make an AI Form.

        <span className="sm:block"> Within a second. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Form Building Easy with AI.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          + Get Started
        </a>

        <a
          className="block w-full rounded border border- px-12 py-3 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring active:white sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero