import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="pt-[100px] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-300 mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="p-2 bg-[#686868ea] text-gray-300 rounded-lg">JavaScript</div>
        <div className="p-2 bg-[#686868ea] text-gray-300 rounded-lg">React</div>
        <div className="p-2 bg-[#686868ea] text-gray-300 rounded-lg">Tailwind CSS</div>
        <div className="p-2 bg-[#686868ea] text-gray-300 rounded-lg"> CSS</div>
        <div className="p-2 bg-[#686868ea] text-gray-300 rounded-lg">TypeScript</div>

      </div>
    </div>
  )
}

export default Skills