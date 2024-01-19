import React from 'react'
import "./ItemCard.scss";
import Logo from "../../assets/ofijan_negetive.png";
const ItemCard = (props) => {
  return (
    <div key={props.id} className="product-card">
    <div className='product_head'>
       <img src={Logo} alt='' width={30} height={20}/>
<div className="product-title">{props.exam_name}</div>
    </div>
   
<div className="product-description">Brief description of the exam questions.</div>
<div className="product-questions">This bocklet contains <b>100</b> questions</div>
<div className="product-price"><b>only for </b><u>50.00</u> ETB</div>
<div className="buttons">
<button className="button-primary">Preview</button>
<button className="button-inline">Buy</button>
</div>
</div>
  )
}

export default ItemCard
