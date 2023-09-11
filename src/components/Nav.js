import React, { useState } from 'react';
import '../components/nav.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { Allsearch, search } from '../Redux/Action';
const Nav = () => {

    const [inputSearch, setInputSearch] = useState("")
    // const [allBooks, setAllBooks] = useState([])

    const dispatch = useDispatch()

    const SearchHandler = async () => {
        if (inputSearch != "") {
            await axios.post("https://librarymanagementtask.onrender.com/book/search", { genre: inputSearch, title: inputSearch, author: inputSearch }).then((res) => {
                // setAllBooks(res.data.books)

                dispatch(search(res.data.books))
            })
        }

    }
    const AllSearchHandler = async () => {

        await axios.get("https://librarymanagementtask.onrender.com/book",).then((res) => {
            // setAllBooks(res.data.books)
            dispatch(Allsearch(res.data.books))
        })


    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bgcolor">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Library Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/all-books" onClick={AllSearchHandler}     >All Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-book">Add New Book</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-danger" onClick={SearchHandler}  >Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Nav;