import React, { useState } from 'react'
import Posts from './components/Posts'
import AddPost from './components/AddPost'


// const App = () =>{
//     const [posts, setPosts] = useState([])
//    
//     useEffect(() => 
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(data => setPosts(() => data))
//     , [])
//    
//     const handleAddPost = post => {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json; charset=utf-8'},
//                 body: JSON.stringify(post)
//             })
//             .then(res => res.json())
//             .then(data => 
//                 setPosts(prevState => [ data, ...prevState ])   
//             )
//     }
//
//     return (
//         <div>
//             <AddPost addPost={ handleAddPost }/>
//             <hr />
//             <Posts posts={ posts }/>
//         </div>
//     )
// }
////////////////////////////////////////////////////////////////////////////////
/**
 * Redux Toolkit
 */
const App = () =>{
    return (
        <div>
            <AddPost />
            <hr />
            <Posts />
        </div>
    );
}


export default App