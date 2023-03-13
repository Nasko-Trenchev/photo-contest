export default function Details(){

    return (
        <div className="details-page">
  <div className="photo-container">
    <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" alt="Photo" className="photo"/>
  </div>
  <div className="details-container">
    <h1 className="name">Product Name</h1>
    <div className="like-section">
      <button className="like-button">
        <i className="fas fa-heart"></i> Like
      </button>
      <span className="like-count">100 Likes</span>
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