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

const form = document.getElementById('new-post-form')
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const blogTitle = document.getElementById('blog-title').value;
    const blogContent = document.getElementById('blog-content').value;

    const newBlogPost = {
        'title': blogTitle,
        'content': blogContent
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: "POST",
        body: JSON.stringify(newBlogPost),
        headers: {
            'content-type': 'application/json'
        }
    }).then(r => r.json()).then(js => console.log(js))
})