import React, { createContext, useState, useEffect } from 'react'

export const PostProvider = createContext()

export default function BookContext({children}) {

    const [isSelected, setIsSelected] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])

    const getComments = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${isSelected}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTU2MjM4NjEsImV4cCI6MTY5NjgzMzQ2MX0.Ctp7yKd6QUqD4R_OFnAaTQyc2x7i1vVpvkoLcTaCNUU"
                }
            })
            const data = await response.json()
            setComments(data)
            console.log(comments)
            setIsLoading(false)
        } catch (error) {
            if (error) setError(error)
            console.log(error)
        }
    }

    useEffect(() => {
        if (isSelected) getComments()
      }, [isSelected])

    return (
        <PostProvider.Provider value={{isSelected, setIsSelected,  isLoading, setIsLoading,  error, setError, comments, setComments}}>
            {children}
        </PostProvider.Provider>
  )
}
