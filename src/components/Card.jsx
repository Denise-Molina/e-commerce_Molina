import Button from 'react-bootstrap/Button';
import ItemCount from '../components/ItemCount'

function Card (props){
    let {price, title, img, detail} = props;

const onAdd =(quantity) =>{
  console.log(quantity)
}

    return (
        <div className="card">
          <div className="card-img">
            <img src={img} alt="card img"></img>
          </div>
          <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>
          </div>
          <Button variant="outline-dark">Comprar</Button>
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
      );
}

export default Card;