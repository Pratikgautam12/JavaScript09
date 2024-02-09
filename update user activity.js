const posts = [];
let lastActivityTime = null;
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toISOString();
            resolve(lastActivityTime);
        }, 1000); 
    });
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 500); 
    });
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        }, 500); 
    });
}
createPost("First post")
    .then(() => updateLastUserActivityTime())
    .then((updatedLastActivityTime) => {
        console.log("Posts:", posts);
        console.log("Last Activity Time:", updatedLastActivityTime);
        return deletePost();
    })
    .then(() => {
        console.log("Deleted the last post.");
        console.log("Remaining Posts:", posts);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
