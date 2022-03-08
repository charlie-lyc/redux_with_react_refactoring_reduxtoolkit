// import React from 'react' 
import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
////////////////////////////////////////////////////////////////////////////
import { useDispatch, useSelector } from 'react-redux'
import { createPostAsync, reset, selectStatus } from '../features/posts/postsSlice'


// const PostForm = ({ addPost }) => {
//     const [post, setPost] = useState({
//         title: '',
//         body: ''
//     })
//
//     const handleChange = e => {
//         setPost(prevState => ({
//             ...prevState,
//             [e.target.name]: e.target.value
//         }))
//     }
//
//    const handleSubmit = e => {
//        e.preventDefault()
//        if (post.title === '' || post.body === '') {
//            return alert('Please Enter Title and Body')
//        }
//        const newPost = {
//            title: post.title,
//            body: post.body
//        }
//        addPost(newPost)
//        setPost({
//            title: '',
//            body: ''
//        })
//    }
//
//     return (
//         <form onSubmit={ handleSubmit }>
//             <div>
//                 <label htmlFor="title">Title &nbsp;: </label>
//                 <br />
//                 <input type="text" name="title" onChange={ handleChange } value={ post.title }/>
//             </div>
//             <br />
//             <div>
//                 <label htmlFor="body">Body : </label>
//                 <br />
//                 <textarea name="body" cols="50" rows="10" onChange={ handleChange } value={ post.body }></textarea>
//             </div>
//             <br />
//             <input type="submit" value="Submit" />
//         </form>
//     )
// }
//
// PostForm.propTypes = {
//     addPost: PropTypes.func.isRequired
// }
///////////////////////////////////////////////////////////////
const PostForm = () => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })
    const dispatch = useDispatch()
    const status = useSelector(selectStatus)

    useEffect(() => {
        if (status === 'succeeded' || status === 'failed') {
            dispatch(reset())
        }
    }, [ status, dispatch ])

    const handleChange = e => {
        setPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (post.title === '' || post.body === '') {
            return alert('Please Enter Title and Body')
        }
        const newPost = {
            title: post.title,
            body: post.body
        }
        dispatch(createPostAsync(newPost))
        setPost({
            title: '',
            body: ''
        })

    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="title">Title &nbsp;: </label>
                <br />
                <input type="text" name="title" onChange={ handleChange } value={ post.title }/>
            </div>
            <br />
            <div>
                <label htmlFor="body">Body : </label>
                <br />
                <textarea name="body" cols="50" rows="10" onChange={ handleChange } value={ post.body }></textarea>
            </div>
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}


export default PostForm