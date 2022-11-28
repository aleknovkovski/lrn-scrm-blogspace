fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(js => {
    const posts = js.slice(0, 5)
    console.log(posts)
    let markup = ""
    posts.map((post)=> {
        markup += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `
    })
    document.getElementById('blog-posts').innerHTML = markup
})