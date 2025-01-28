import React, { useEffect, useRef, useState } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

 
const Testimonial = () => {
  const slider=useRef();
  const [tval, setTval] = useState(0);
  const next=()=>{
    if(tval>-100){
      setTval(tval-50)
    }
    slider.current.style. transform= `translateX(${tval}%)`;
  }
  const prev=()=>{
    if(tval<0){
      console.log(".next")
      setTval(tval+50);
    }
    slider.current.style. transform= `translateX(${tval}%)`;
  }
  useEffect(() => {
    slider.current.style.transform = `translateX(${tval}%)`;
  }, [tval]);
  return (
    <div className="testimonial">
      <img  className="next_btn" src={next_icon}alt="" onClick={next}/>
      <img className='back_btn' src={back_icon} alt="" onClick={prev}/>
      <div className="slider">
        <ul ref={slider}>
        <li>
  <div className="slide">
    <div className="user_info">
      <img src={user_1} alt="" />
      <div>
        <h3>Elsa Shawn</h3>
        <span>Edusity, USA</span>
      </div>
      <p>
        The education I received at Edusity has been truly transformative. The courses are highly interactive and taught by industry-leading professionals who inspire learning every day.
      </p>
    </div>
  </div>
</li>
<li>
  <div className="slide">
    <div className="user_info">
      <img src={user_2} alt="" />
      <div>
        <h3>Elsa Shawn</h3>
        <span>Edusity, USA</span>
      </div>
      <p>
        Choosing Edusity for my studies was a life-changing decision. The university's dedication to excellence and innovation has helped me achieve my academic and personal goals.
      </p>
    </div>
  </div>
</li>
<li>
  <div className="slide">
    <div className="user_info">
      <img src={user_3} alt="" />
      <div>
        <h3>Elsa Shawn</h3>
        <span>Edusity, USA</span>
      </div>
      <p>
        At Edusity, I discovered a passion for learning that I never knew I had. The faculty's support and the university's focus on holistic development have been invaluable.
      </p>
    </div>
  </div>
</li>
<li>
  <div className="slide">
    <div className="user_info">
      <img src={user_4} alt="" />
      <div>
        <h3>Elsa Shawn</h3>
        <span>Edusity, USA</span>
      </div>
      <p>
        The vibrant and inclusive campus environment at Edusity has made my academic journey unforgettable. I've gained the skills and confidence needed for a successful career.
      </p>
    </div>
  </div>
    </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
