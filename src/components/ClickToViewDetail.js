import React, { useEffect, useState } from 'react'
import "./ClickToViewDetail.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { Allsearch } from '../Redux/Action'
const ClickToViewDetail = () => {
    const SingledData = useSelector((s) => s)
    const navigate = useNavigate()
    const [isUpdateClic, setisUpdateClic] = useState(false)
    const dispatch = useDispatch()
    const [book, setBook] = useState("")
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
    useEffect(() => {

        if (SingledData == null) {

        } else {
            setBook(SingledData[0])
        }
    }, [])
    const updateHandler = async () => {
        setisUpdateClic(false)

        await axios.post("https://librarymanagementtask.onrender.com/book/update", {
            id: book.id, title: inputBook.title
            , author: inputBook.author
            , genre: inputBook.genre
            , publicationYear: inputBook.publicationYear
        }).then((res) => {
            alert("Book is updated!")
            setBook({
                id: book.id, title: inputBook.title
                , author: inputBook.author
                , genre: inputBook.genre
                , publicationYear: inputBook.publicationYear
            })
            setisUpdateClic(false)
        }).catch(() => {

        })
    }
    const updateStart = async () => {
        setisUpdateClic(true)
    }
    const deleteHandler = async () => {
        await axios.post("https://librarymanagementtask.onrender.com/book/delete", { id: book.id }).then((res) => {
            dispatch(Allsearch(res.data.books))
            alert("Book is Deleted!")
            navigate("/all-books")
        })
    }
    return (
        <section data-aos="zoom-out-up" id="services" class="services section-bg">

            {
                book == null ? (null)

                    : <div class="container-fluid">

                        <div class="row row-sm text-center">
                            <div class="col-md-6 _boxzoom">
                                <div class="_product-images">

                                    <img className="_product-images img-fluid" src="https://i.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
                                </div>
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" class="col-md-6">
                                <div class="_product-detail-content">
                                    <p class="_p-name">

                                        {
                                            isUpdateClic ? <input value={inputBook.title} onChange={inputHandler} type="text" name="title" placeholder="Title" /> : book.title
                                        }
                                    </p>
                                    <div class="_p-price-box">

                                        <div class="_p-features">

                                            <span> Author Name:-
                                                {
                                                    isUpdateClic ? <input value={inputBook.author} onChange={inputHandler} type="text" name="author" placeholder="author" /> : book.author
                                                }
                                            </span>
                                            <span> Publication Year:-
                                                {
                                                    isUpdateClic ? <input value={inputBook.publicationYear} onChange={inputHandler} type="text" name="publicationYear" placeholder="publicationYear" /> : book.publicationYear
                                                }
                                            </span>
                                            <span> Genre:-
                                                {
                                                    isUpdateClic ? <input value={inputBook.genre} onChange={inputHandler} type="text" name="genre" placeholder="genre" /> : book.genre
                                                }
                                            </span>
                                        </div>
                                        <div action="" method="post" accept-charset="utf-8">
                                            <ul class="spe_ul"></ul>
                                            <div class="_p-qty-and-cart">
                                                <div class="_p-add-cart">
                                                    <button onClick={deleteHandler} class="btn-theme btn buy-btn" tabindex="0">
                                                        <i class="fa fa-shopping-cart"></i> Delete
                                                    </button>

                                                    {
                                                        isUpdateClic ? <button onClick={updateHandler} class="btn-theme btn btn-success" tabindex="0">
                                                            <i class="fa fa-shopping-cart"></i> Save
                                                        </button>
                                                            : <button onClick={updateStart} class="btn-theme btn btn-success" tabindex="0">
                                                                <i class="fa fa-shopping-cart"></i> Update
                                                            </button>
                                                    }
                                                    <input type="hidden" name="pid" value="18" />
                                                    <input type="hidden" name="price" value="850" />
                                                    <input type="hidden" name="url" value="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>

    )
}
export default ClickToViewDetail
