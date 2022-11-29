let postsArr = []

function render() {
    let markup = ""
    postsArr.map((post)=> {
        markup += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>`
    })
    document.getElementById('blog-posts').innerHTML = markup
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(js => {
    postsArr = js.slice(0, 5);
    render()
})

const form = document.getElementById('new-post-form')
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const blogTitle = document.getElementById('blog-title').value;
    const blogContent = document.getElementById('blog-content').value;

    const newBlogPost = {
        'title': blogTitle,
        'body': blogContent
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: "POST",
        body: JSON.stringify(newBlogPost),
        headers: {
            'content-type': 'application/json'
        }
    }).then(r => r.json()).then(js => {
        console.log(js)
        postsArr.unshift({'title': js.title, 'body': js.body})
        render()
    })
})