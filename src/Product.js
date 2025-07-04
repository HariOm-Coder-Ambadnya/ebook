import './component/index.css';

function Product(props){
    return(
        <>
<div classNameName="card" style={{width:400}} id='card'>
  <img className="card-img-top" src={props.img} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">{props.id}</h4>
    <p className="card-text">{props.name}</p>
    <p className="card-text">{props.category}</p>
    <p className="card-text">{props.price}</p>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>

        </>
    )
}

export default Product;
