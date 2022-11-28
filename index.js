fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(js => console.log(js.slice(0,5)))