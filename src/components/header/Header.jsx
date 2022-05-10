import './header.css'
import {MdOutlineKingBed} from 'react-icons/md'
import {RiFlightTakeoffFill} from 'react-icons/ri'
import {MdDirectionsCar} from 'react-icons/md'
import {MdOutlineAttractions} from 'react-icons/md'
import {FaTaxi} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                  <MdOutlineKingBed className='icon'/>
                  <span>Stays</span>
                </div>

                <div className="headerListItem">
                  <RiFlightTakeoffFill className='icon'/>
                  <span>Flight</span>
                </div>

                <div className="headerListItem">
                  <MdDirectionsCar className='icon'/>
                  <span>Car rentals</span>
                </div>

                <div className="headerListItem">
                  <MdOutlineAttractions className='icon'/>
                  <span>Attractions</span>
                </div>

                <div className="headerListItem">
                  <FaTaxi className='icon'/>
                  <span>Airport taxis</span>
                </div>
            </div> 
            <h1 className="headerTitle">A lifetime of discounts? It's Genius.
            </h1> 
            <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account

            </p> 
            <button className="headerBtn">Sign in / Register</button>

        </div>
        
    </div>
  )
}

export default Header