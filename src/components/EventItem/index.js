// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickImage = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-list-item">
      <button className="image-button" type="button" onClick={onClickImage}>
        <img src={imageUrl} className="image-item" alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
