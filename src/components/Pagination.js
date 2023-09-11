import React from 'react'

const Pagination = ({ totalPosts, postPerPage, setCurrPage, currPage }) => {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map((page, idx) => {
                    return <button className={page == currPage ? "bg-warning text-muted p-3 m-1 shadow rounded " : " shadow rounded  bg-dark text-white p-3 m-1  "} key={idx} onClick={() => setCurrPage(page)}  > {page} </button>
                })
            }
        </div>
    )
}
export default Pagination