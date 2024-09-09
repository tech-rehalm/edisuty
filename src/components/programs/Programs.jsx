import "./Programs.css"
import program1 from "../../assets/program-1.png"
import program2 from "../../assets/program-2.png"
import program3 from "../../assets/program-3.png"
import programiicon1 from "../../assets/program-icon-1.png"
import programiicon2 from "../../assets/program-icon-2.png"
import programiicon3 from "../../assets/program-icon-3.png"

export default function Programs() {
  return (
    <div className="programs container">
        <div className="program">
            <img src={program1} alt="program" />
            <div className="caption">
                <img src={programiicon1} alt="icon" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="program" />
            <div className="caption">
                <img src={programiicon2} alt="icon" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="program" />
            <div className="caption">
                <img src={programiicon3} alt="icon" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}