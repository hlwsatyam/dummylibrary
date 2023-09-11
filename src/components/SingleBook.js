import React, { useState } from 'react'
import './SingleBook.css'
const SingleBook = ({ ClickToViewDetail, id, author, genre, publicationYear, title }) => {
    const [book, setBook] = useState({ id, author, genre, publicationYear, title })

    return (
        <div data-aos="zoom-in-right" onClick={ClickToViewDetail}
            class="book read">
            <div class="cover">
                <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
            </div>
            <div class="description">
                <p class="title">  {title}  <br />
                    <span class="author">  {author} </span></p>
            </div>
        </div>
    )
}

export default SingleBook