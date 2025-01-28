import React, { useRef } from 'react'
import './Video_Player.css'
import video from '../../assets/college-video.mp4'
const Video_Player = ({Play,setPlay}) => {
  
  const player=useRef(null);
  const close=(e)=>{
    if(e.target===player.current)
      setPlay(false)
  }
  return (
    <div onClick={close} ref={player} className={`video ${Play? '': 'hide'}`}>
      <video src={video } autoPlay muted controls></video>
    </div>
  )
}

export default Video_Player

