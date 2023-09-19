import React, { useEffect, useState } from 'react'
import { Container, Row, } from 'react-bootstrap'
import BookCard from '../bookCard/bookCard'

const MyLatestRelease = () => {
   
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchBar, setSearchBar] = useState('')
    const [filteredBooks, setFilteredBooks] = useState([])

    const fetchBooks = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://epibooks.onrender.com/')
            const data = await response.json()
            setBooks(data)
            setFilteredBooks(data)
            setIsLoading(false)
        } catch (error) {
            if (error) setError(error)
        }
    }

    const searchBooks = () => {
        const arrayFilteredBooks = books.filter((book) => (book.title.toLowerCase().includes(searchBar.toLowerCase().trim())))
        setFilteredBooks(arrayFilteredBooks)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <>
            <Container>
                <div>
                    <input type="text"
                        placeholder='cerca libro'
                        value={searchBar}
                        onChange={(e) => setSearchBar(e.target.value)}
                    />
                    <button onClick={searchBooks}>Cerca</button>
                </div>
                <Row>
                    {   !error && !isLoading &&
                        filteredBooks.map((book) => {
                            return <BookCard
                                img={book.img}
                                title={book.title}
                                price={book.price}
                            />
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default MyLatestRelease
