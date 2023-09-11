import React, { useEffect, useState } from 'react';
import '../components/books.css'
import axios from "axios"
import SingleBook from './SingleBook';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { update } from '../Redux/Action'
import Pagination from './Pagination';

const Book = () => {

    const [allBooks, setAllBooks] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(2)
    const SearchedData = useSelector((s) => s)

    useEffect(() => {
        if (SearchedData != null) {
            setAllBooks(SearchedData)
        } else {
            GetAllBooks()
        }
    }, [SearchedData])

    const GetAllBooks = async () => {
        await axios.get("https://librarymanagementtask.onrender.com/book").then((res) => {
            setAllBooks(res.data.books)
        })
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ClickToViewDetail = (book) => {

        dispatch(update(book))
        navigate('/details')
    }

    const lastPostInx = currPage * postPerPage;
    const firstPostInx = lastPostInx - postPerPage;
    const currPost = allBooks.slice(firstPostInx, lastPostInx);

    return (
        <>
            <div id="large-th">
                <div class="container">
                    <h1> A list of books</h1>
                    <br />
                    <div class="choose">
                        <a href="#list-th"><i class="fa fa-th-list" aria-hidden="true"></i></a>
                        <a href="#large-th"><i class="fa fa-th-large" aria-hidden="true"></i></a>
                    </div>
                    <div id="list-th">
                        {
                            // allBooks.map((item, id) => <SingleBook title={item.title} genre={item.genre} publicationYear={item.publicationYear} id={item._id} author={item.author} />)

                            currPost.map((item, id) =>
                                <SingleBook title={item.title} publicationYear={item.publicationYear} id={item._id} author={item.author} genre={item.genre}
                                    ClickToViewDetail={() => ClickToViewDetail({
                                        id: item._id, author: item.author, genre: item.genre, publicationYear: item.publicationYear, title: item.title
                                    })}
                                />)
                        }
                    </div >
                </div >
                {/* pagination */}
                <p className=' w-100 d-flex justify-content-center align-items-center p-3 bg-dark '  > <Pagination setCurrPage={setCurrPage} totalPosts={allBooks.length} postPerPage={postPerPage} currPage=
                    {currPage} /></p>

            </div >
        </>
    )
}
export default Book
