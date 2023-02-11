import { faBlog, faBuildingCircleArrowRight, faCoffee, faEnvelope, faLocationDot, faPhoneVolume, faVoicemail } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UserList = ({ user }) => {
    return (
        <div className="App">
            < div className="container" >
            {user.map((el) =>

                
                    <div className="card">
                        <img src="avatar2.jpg" alt="Person" class="card__image" />
                        <div className="card__name">
                            <h6>{el.name}</h6>
                            <h6>{el.username}</h6>
                        </div>
                        <ul className="items">
                            
                            <li className="icon"><FontAwesomeIcon icon={faEnvelope} />  {el.email} </li>
                            <li className="icon"><FontAwesomeIcon icon={faLocationDot} />{el.address.street}</li>
                            <li className="icon"><FontAwesomeIcon icon={faPhoneVolume}/>{el.phone}</li>
                            <li className="icon"><FontAwesomeIcon icon={faBlog}/>{el. website}</li>
                            <li className="icon"><FontAwesomeIcon icon={faBuildingCircleArrowRight} />{el.company.name}</li>
                           
                            
                        </ul>

                    </div>
                



            )}
            </div>
        </div>
    )



}

export default UserList




