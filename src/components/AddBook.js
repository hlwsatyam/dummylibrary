import React from 'react'
import { useState } from 'react';
import axios from "axios"
import './AddBook.css'
const AddBook = () => {

    const [inputBook, setInputBook] = useState({
        title: ""
        , author: ""
        , genre: ""
        , publicationYear: ""
    })

    const inputHandler = (e) => {
        setInputBook({
            ...inputBook,
            [e.target.name]: e.target.value
        })
    }

    const AddBook = async (e) => {
        e.preventDefault()

        await axios.post("https://librarymanagementtask.onrender.com/book/add", {
            title: inputBook.title
            , author: inputBook.author
            , genre: inputBook.genre,
            publicationYear: inputBook.publicationYear,
        }).then((res) => {

            setInputBook({
                title: ""
                , author: ""
                , genre: ""
                , publicationYear: ""
            })
            alert("successFully Addded")
        })
    }

    return (
        <div  data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"  >

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <form onSubmit={AddBook} class="box">
                                <h1>Your Book</h1>
                                <p class="text-white"> Please Fill the Book Details!</p>
                                <input value={inputBook.title} onChange={inputHandler} type="text" name="title" placeholder="Title" />
                                <input value={inputBook.author} onChange={inputHandler} type="text" name="author" placeholder="Author" />
                                <input value={inputBook.genre} onChange={inputHandler} type="text" name="genre" placeholder="Genre" />
                                <input value={inputBook.publicationYear} onChange={inputHandler} type="text" name="publicationYear" placeholder="Publish Year" />

                                <input type="submit" name="" value="AddNow" href="#" />

                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddBook