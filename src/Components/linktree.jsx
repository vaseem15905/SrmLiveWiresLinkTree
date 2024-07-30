import React from 'react'
import tech from '../assets/tech.png'
import creatives from "../assets/creatives.png"
import Livewires from "../assets/Livewires.png"
import pr from "../assets/pr.png"

function LinkTree() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex flex-col items-center justify-center px-4 pb-16">
      <div className="text-center ">
        <img src={Livewires} alt="Livewires" className="w-72 animate-fadeIn h-auto mb-4 md:w-96 md:mb-4" />
        
      </div>
      <h1 className="animate-pulse text-white text-xl md:text-3xl xl:text-4xl mb-9  font-bold">
          LET'S INTEND. INVENT. INSPIRE!
        </h1>
      <h2 className='animate-slideInLeft text-white text-2xl md:text-3xl xl:text-3xl  mb-20 font-mono text-center px-4'>
        Where will your talents shine? Pick a field and join the adventure!
      </h2>

      <div className="animate-fadeIn flex flex-col md:flex-row md:gap-12 lg:gap-24">
        <a href="https://forms.gle/gVD9BmZxugdPkDCq6" className="animate-slideInRight bg-white/30 backdrop-blur-md border border-white/30 flex flex-col items-center mb-12 p-5 md:mb-0 rounded-lg group">
          <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-125">
            <img src={tech} alt="Tech" className="w-48 h-48 mb-4 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg" />
            <button className="animate-floatUp bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold text-base md:text-lg lg:text-xl py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              Tech Team
            </button>
          </div>
        </a>
        <a href="https://forms.gle/gPeBS3qvU8KmjBtaA" className="animate-fadeIn bg-white/30 backdrop-blur-md border border-white/30 flex flex-col items-center mb-12 p-5 md:mb-0 rounded-lg group">
          <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-125">
            <img src={creatives} alt="Creatives" className="w-48 h-48 mb-4 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg" />
            <button className="animate-floatUp bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold text-base md:text-lg lg:text-xl py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              Creatives Team
            </button>
          </div>
        </a>
        <a href="https://forms.gle/ZenCHGJfyP6QGVmo8" className="animate-slideInLeft bg-white/30 backdrop-blur-md border border-white/30 flex flex-col items-center mb-12 p-5 md:mb-0 rounded-lg group">
          <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-125">
            <img src={pr} alt="PR" className="w-48 h-48 mb-4 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg" />
            <button className="animate-floatUp bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold text-base md:text-lg lg:text-xl py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              PR Team
            </button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default LinkTree
