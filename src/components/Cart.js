import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";


const Cart = () => {
  const dispatch = useDispatch()
  const removeToCart = (id)=>{
    // dispatch a remove action
    dispatch(remove(id))

  }
  const cartItems = useSelector((state) => state.cart); 
   const cards = cartItems.map((product) =>(
    <div className="col-md-12" style={{marginBottom: '10px'}}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "138px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: 'white'}}>
             <Button variant="danger"
             onClick={()=>removeToCart(product.id)}
             >Remove From Cart
             </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ))

  return (
    <>
    <h1>Cart</h1>
    <div className="row">{cards }</div>


    </>
  )
}

export default Cart