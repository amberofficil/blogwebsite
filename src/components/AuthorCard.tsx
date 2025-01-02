import React from 'react'

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">


        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="/authorimg.jpg"
          alt="Author Image" />
        <div>
          <h3 className="text-xl font-bold ">Amber</h3>
          <p className="text-graimporty-500"> Frontend Developer </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        I am a passionate Frontend Developer,
        skilled in modern web
        technologies like HTML,CSS,JAVASCRIPT and NEXT.JS,creating visually
        appealing and responsive websites. My focus is on enhanceing user
        experience, and I work with lib
        React and TailwindCSS. I am always eager to learn new to
        frameworks and enjoy contributing valuable  knowledge to the web development community.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2  text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          twitter

        </a>
        <a
          href="#"
          className="px-4 py-2  text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          Linkedin

        </a>
        <a
          href="#"
          className="px-4 py-2  text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          GitHub

        </a>

      </div>

    </div>
  )
}

