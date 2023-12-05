// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
// import 'slick-corousel/slick/slick.css'
// import 'slick-corousel/slick/slick-theme.css'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  console.log(planetsList)
  const setting = {dots: true, slidesToShow: 1, slidesToScroll: 1}
  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading"> PLANETS </h1>
      <Slider {...setting}>
        {planetsList.map(each => (
          <PlanetItem data={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
