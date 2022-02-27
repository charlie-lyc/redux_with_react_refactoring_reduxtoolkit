import React from 'react'
import PropTypes from 'prop-types'


const PostItem = ({ post }) => {
    return (
        <li>
            <h3>{ post.title }</h3>
            <p>{ post.body }</p>
        </li>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}


export default PostItem