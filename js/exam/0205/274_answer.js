const userId = 1;
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
const posts = (await res.json()).map(({id: postId, title}) => ({postId, title}));
console.log('data:', posts.length)

// 실무에서는 얘를 더 선호한다
async function getCommentsAsync(postId){
    const cRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    return cRes.json();
}

function getCommentsPromi(postId){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(cRes => cRes.json());
}

// const getPromi;

for (const post of posts){
    post.comments = getComments(post.id);
    post.comments = await cRes.json();
}


console.log('posts', JSON.stringify(posts, null, '  '));

const commentsRes = await Promise.allSettled(
    posts.map(post => getCommentsPromi(post.postId))
);
post.forEach((post, idx) => {
    post.comments = commentsRes[idx];    
});

// for await (const )
