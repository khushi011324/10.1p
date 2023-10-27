import './Cardnew.css';
import { format } from 'date-fns';

function Cardnew(props) {
  const fontSize = '30px'; // Define the font size for the name and "Username" here

  return (
    <div className="column">
      <img src={props.avatar} alt="Dev" width={650} height={400} />
      <h2 style={{ fontSize }}>{props.name}</h2>
      <p style={{ fontSize: '30px' }}>Birthdate: {format(props.birthdate, 'MMMM dd, yyyy')}</p>
    
      <img className="a" src="https://th.bing.com/th/id/OIP.QC6X04iSYWE04gXpixJo1AHaGw?pid=ImgDet&rs=1" alt="star" />
      <p className='b' style={{ fontSize: '30px' }}>Rating 3.0</p>
    </div>
  );
}

export default Cardnew;
