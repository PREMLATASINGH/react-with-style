import { useState } from "react";
function Mycomponent() {
    const [name, setName] = useState("");
    function handleChange(event) {
        setName(event.target.value);
    }
    const [quantity, setQuantity] = useState(1);
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
        
    
        
    }
    const[payment,setPayment]=useState("");
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    const[comment,setComment]=useState("");
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    const[shipping,setShipping]=useState(false);
    function handleShippingChange(event){
        setShipping(event.target.checked);
    }
  return (
    <><input type="text" value={name} onChange={handleChange} />
    <h1>Hello, {name}!,How are you.</h1>
    <br />
    <input value={quantity} onChange={handleQuantityChange} />
    <h2>Quantity: {quantity}</h2>
    <br />
    <select value={payment} onChange={handlePaymentChange}>
        <option value="">select a option</option>
        <option value="credit card">Credit Card</option>
        <option value="debit card">Debit Card</option>
        <option value="upi">UPI</option>
        <option value="net banking">Net Banking</option>
    </select>
    <h3>Payment Method:{payment}</h3> 
    <br />
    <textarea value={comment} onChange={handleCommentChange} />
    <h4>Comments:{comment}</h4>
    <br />
    <label>
        <input type="checkbox" checked={shipping} onChange={handleShippingChange} />    </label>
        <h4>Shipping:{shipping ? "Yes" : "No"}</h4>  
    
   


    </>
  );
}
export default Mycomponent;