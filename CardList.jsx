import Card from './Card'
import './Card.css'
import staffList from './StaffList'

function cardComponent(staff,  i)
 {
    return <Card
    key={staff.key}
    avatar={staff.avatar}
    name={staff.name}
    email={staff.email}
    position={staff.position}
    
/>
 }
function CardList() {
    return (
        <div className='row'>
           { staffList.map(cardComponent)}
        </div>
    )

}

export default CardList