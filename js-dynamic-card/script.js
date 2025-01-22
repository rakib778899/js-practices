const posts = [
    {
        title: "This is title 1",
        body: "This is body 1",
    },
    {
        title: "This is title 2",
        body: "This is body 2",
    },
    {
        title: "This is title 3",
        body: "This is body 3",
    },
    {
        title: "This is title 4",
        body: "This is body 4",
    },
];

const postsElement = document.querySelector('.posts');

const loadAllData = () => {
    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        
        postElement.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `;
        
        postsElement.appendChild(postElement);
    });
};

loadAllData();
