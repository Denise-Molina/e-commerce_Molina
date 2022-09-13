import Button from 'react-bootstrap/Button';

function Card (props){
    let {price, title, img, detail} = props;
    
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
          <Button variant="info">Comprar</Button>{' '}
        </div>
      );
}

export default Card;