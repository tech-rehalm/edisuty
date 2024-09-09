import "./Video.css"
import vd from "../../assets/video.mp4"
import { useRef } from "react"

export default function Video({play, setPlay}) {
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlay(false)
        }
    }
    const player = useRef(null)
  return (
    <div className={`video-player ${play? "": "hide"}`} ref={player} onClick={closePlayer}>
        <video src={vd} autoPlay muted controls></video>

    </div>
  )
}