import React from 'react'
import tech from '../assets/tech.png'
import creatives from "../assets/creatives.png"
import Livewires from "../assets/Livewires.png"
import pr from "../assets/pr.png"

function LinkTree() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex flex-col items-center justify-center px-4 pb-16">
      <div className="text-center mb-8">
        <img src={Livewires} alt="Livewires" className="w-72 h-auto  mb-4 md:w-96 md:mb-4" />
        <h1 className="animate-pulse text-white text-5xl xl:text-3xl mb-4 font-bold">LET'S INTEND. INVENT. INSPIRE!</h1>
      </div>
      <div className="animate-fadeIn flex flex-col md:flex-row md:gap-12 lg:gap-24">
        <div className="animate-slideInRight bg-white/30 backdrop-blur-md border border-white/30 flex flex-col items-center mb-12 p-5 md:mb-0 rounded-lg group">
          <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-125">
            <img src={tech} alt="Tech" className="w-64 h-64 mb-4 md:w-80 md:h-80 md:mb-6 rounded-lg" />
            <button className="animate-floatUp bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href="https://forms.gle/gVD9BmZxugdPkDCq6">Tech</a>
            </button>
          </div>
        </div>
        <div className="animate-fadeIn bg-white/30 backdrop-blur-md border border-white/30 flex flex-col items-center mb-12 p-5 md:mb-0 rounded-lg group ">
          <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-125">
            <img src={creatives} alt="Creatives" className="w-64 h-64 mb-4 md:w-80 md:h-80 md:mb-6 rounded-lg" />
            <button className=" animate-floatUp bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href="https://forms.gle/gPeBS3qvU8KmjBtaA">Creatives</a>
            </button>
          </div>
        </div>
        <div className="animate-slideInLeft bg-white/30 backdrop-blur-md border border-white/30 flex flex-col items-center mb-12 p-5 md:mb-0 rounded-lg group">
          <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-125">
            <img src={pr} alt="PR" className="w-64 h-64 mb-4 md:w-80 md:h-80 md:mb-6 rounded-lg" />
            <button className="animate-floatUp bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href="https://forms.gle/ZenCHGJfyP6QGVmo8">PR</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkTree
