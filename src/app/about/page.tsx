import React from 'react'

const  About = () => {
  return (
    <section className="about h-screen flex items-center justify-center bg-cover bg-center text-black px-10">
      <div className="bg-gray-100 bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">About Us</h2>
        <p>I am a passionate Frontend Developer,
        skilled in modern web
        technologies like HTML,CSS,JAVASCRIPT and NEXT.JS,creating visually
        appealing and responsive websites. My focus is on enhanceing user
        experience, and I work with lib
        React and TailwindCSS. I am always eager to learn new to
        frameworks and enjoy contributing valuable  knowledge to the web development community.
          </p>
      </div>
    </section>
  )
}

export default About

