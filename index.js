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
    console.log(newBlogPost)
})
/**
 Challenge:

 * Listen for the "submit" event on the form (which will happen when the button is clicked)
 * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

 */