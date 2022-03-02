export const fetchPosts = () => {
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    //             .then(res => res.json())              // return 'Promise'
    //             // .then(posts => console.log(posts)) // return 'JSON'
    /////////////////////////////////////////////////////////////
    return new Promise(resolve =>
        fetch('https://jsonplaceholder.typicode.com/posts')    
            .then(res => res.json())
            .then(posts => resolve({ data: posts }))
    )
}

export const createPost = newPost => {
    return new Promise(resolve => 
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8'},
                body: JSON.stringify(newPost)
            })
            .then(res => res.json())
            .then(post => resolve({ data: post }))
    )
}