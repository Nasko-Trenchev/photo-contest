import { useState } from "react"

export default function Details(){

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0)

  const increaseLike = () => {
    setLikeCount(oldValue => oldValue + 1)
  }

    return (
        <div className="details-page">
  <div className="photo-container">
    <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Photo" className="photo"/>
  </div>
  <div className="details-container">
    <h1 className="name">Product Name</h1>
    <div className="like-section">

      {!like ?
      <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png"
        onClick={()=> setLike(true)}/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
        onClick={increaseLike}/>
        </> : <p>Thank you for your vote!</p>}
      {!like &&  <span className="like-count">{likeCount}</span>}
    </div>
    <div className="comment-section">
      <h2 className="comment-heading">Comments</h2>
      <ul className="comment-list">
        <li className="comment">
          <span className="comment-author">John Doe:</span> This is a great product!
        </li>
        <li className="comment">
          <span className="comment-author">Jane Smith:</span> I love this product!
        </li>
      </ul>
      <form className="comment-form">
        <label for="comment" className="comment-label">Leave a Comment:</label>
        <textarea id="comment" name="comment" className="comment-input" required></textarea>
        <button type="submit" className="comment-button">Post Comment</button>
      </form>
    </div>
  </div>
</div>
    )
}