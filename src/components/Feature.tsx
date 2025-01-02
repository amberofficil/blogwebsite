import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50  mb-40 ">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">Tech Chronicles: Navigating the Secrets of Technology  !</h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Join Amber as she delves into the dynamic world of web development. From foundational concepts to advanced techniques, this blog is packed with insights , and tips to empower aspiring developers in crafting stunning and functional websites.Explore, learn and elevate your web development journey! 
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Categories</h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "Next Js",
              "Web Developer",
              "HTML"
            ].map((category, index) =>(
              <div key={index}
              className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out">

                </div>

              </div>
            ))}

          </div>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          Dive into our diverse range of Categories, where you'll discover a wealth of knowledge and insights tailored to your interests . Each category features carefully curated blogs that explore the latest trends, innovative technologies, and essential skills in the world of web development and beyond. Whether you're a budding developer,an experienced tech enthusiast,or simply curious about the digital landscape, there's something here for everyone . Explore the Categories below and expand your understandingof the dynamic tech frontier.
        </p>
      </section>
    </div>
  )
}

