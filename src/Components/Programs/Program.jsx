import React from 'react'
import "./Program.css"
import program1 from "../../assets/program-1.png"
import program2 from "../../assets/program-2.png"
import program3 from "../../assets/program-3.png"
import programic1 from "../../assets/program-icon-1.png"
import programic2 from "../../assets/program-icon-2.png"
import programic3 from "../../assets/program-icon-3.png"

const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={programic1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={programic2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={programic3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
      
    </div>
  )
}

export default Program
