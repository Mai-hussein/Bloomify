import React from 'react'


function Rate() {
  return (
  <>
    <div className='review-page'>
      <h3>LET US KNOW WHAT YOU THINK!</h3>
      <p>Rate your experience </p>
      <div className="rating" id="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <br />
      <textarea id="review" rows={4} cols={50} placeholder="Write your review here" defaultValue={""} />
      <button>Submit Review</button>
    </div>
  </>
)}

export default Rate