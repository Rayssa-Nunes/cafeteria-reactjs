import './App.css'
import { Button, Container, Row, Col} from 'react-bootstrap'
import { useRef, useState } from 'react'
import Food from './components/Food'
import data from './models/foods'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [foods, setFoods] = useState(data)

  const buttonAdd = useRef(null);
  const handleClick = () => {
    const food = {
      name:'Tapioca', image:'imgs/tapioca.jpg'
    }
    setFoods([...foods, food])
    buttonAdd.current.disabled = true
  }

  return (
    <>
    <Container>
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-end">
        <Button variant="secondary" onClick={handleClick} ref={buttonAdd} className="rounded-circle mr-4" >+</Button>
      </div>
      <div className="my-3">
      <Row>
        {
          foods.map((food, i) => {
            return (
              <Col key={i}>
              <Food food={food}  />
              </Col>
            )
          })
        } 
      </Row>
      </div>
    </Container>
    </>
  )
}

export default App
