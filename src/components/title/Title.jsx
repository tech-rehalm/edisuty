import "./Title.css"

export default function Title({title, subTitle}) {
  return (
    <div className="title">
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}