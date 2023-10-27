import './Card.css';

function Card(props) {
  const nameFontSize = '30px'; 

  return (
    <div className="column">
      <img src={props.avatar} alt="Dev" width={650} height={400} />
      <p style={{ fontSize: nameFontSize }}><strong>Username: {props.name}</strong></p>
    
      <p style={{ fontSize: nameFontSize }}>{props.email}</p>
      <img className="a" src="https://th.bing.com/th/id/OIP.QC6X04iSYWE04gXpixJo1AHaGw?pid=ImgDet&rs=1" alt="star" />
      <p className='b' style={{ fontSize: nameFontSize }}>Rating 4.0</p>
    </div>
  );
}

export default Card;
