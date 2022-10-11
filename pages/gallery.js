
const gallery = () => {
  return (
    <div className="gallery">
  <h1 > Gallery</h1>
  <div className="container">

    <div className="gallery-container w-3 h-2">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?nature" alt="nature"/>
        </div>
        <div className="text">Nature</div>
      </div>
    </div>

    <div className="gallery-container w-3 h-3">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?people" alt="people"/>
        </div>
        <div className="text">People</div>
      </div>
    </div>

    <div className="gallery-container h-2">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?sport" alt="sport"/>
        </div>
        <div className="text">Sport</div>
      </div>
    </div>

    <div className="gallery-container w-2">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?fitness" alt="fitness"/>
        </div>
        <div className="text">Fitness</div>
      </div>
    </div>

    <div className="gallery-container w-4 h-1">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?food" alt="food"/>
        </div>
        <div className="text">Food</div>
      </div>
    </div>

    <div className="gallery-container">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?travel" alt="travel"/>
        </div>
        <div className="text">Travel</div>
      </div>
    </div>





  </div>
</div>
  )
}

export default gallery