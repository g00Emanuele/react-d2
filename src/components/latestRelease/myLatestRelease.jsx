import React, { useState } from 'react'
import { Container, Row, } from 'react-bootstrap'
import fantasy from '../../data/books/fantasy.json'
import BookCard from '../bookCard/bookCard'

const MyLatestRelease = () => {

    const [searchBar, setSearchBar] = useState('')
    const [filteredBooks, setFilteredBooks] = useState(fantasy)

    const searchBooks = () => {
        const arrayFilteredBooks = fantasy.filter((book) => (book.title.toLowerCase().includes(searchBar.toLowerCase().trim())))
        setFilteredBooks(arrayFilteredBooks)
    }

    console.log(filteredBooks)

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
                    {
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
