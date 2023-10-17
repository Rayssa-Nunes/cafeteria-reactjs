import { Card, Image} from 'react-bootstrap'
import PropTypes from 'prop-types';
const Food = ({food}) => {
  
  return (
    
      <Card>
        <Card.Title>{food.name}</Card.Title>
          <Image src={food.image} alt={food.name} rounded className="w-100" />
      </Card>

  )


}


Food.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};


export default Food
