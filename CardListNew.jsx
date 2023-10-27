
import Cardnew from './Cardnew'
import './Cardnew.css'
import Staff from './Staff'


function cardComponentnew(staffnew)
 {
    return <Cardnew
    key={staffnew.key}
    avatar={staffnew.avatar}
    name={staffnew.name}
    birthdate={staffnew.birthdate}
    registeredAt={staffnew.registeredAt}
    
/>
 }
function CardListNew() {
    return (
        <div className='row'>
           { Staff.map(cardComponentnew)}
        </div>
    )

}

export default CardListNew