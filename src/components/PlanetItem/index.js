// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data

  return (
    <div className="slide-container">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="slide-heading">{name}</h1>
      <p className="description"> {description}</p>
    </div>
  )
}
export default PlanetItem
