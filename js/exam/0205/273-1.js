// 살려줘


// 일단 fetch 하고 await 
// a = await(fetch('글목록'));
// 그리고 어떻게 읽어올 것이냐...

// const sampleUrl = `https://jsonplaceholder.typicode.com/posts?userId=1`
// const sampleUrl2 = `https://jsonplaceholder.typicode.com/posts/<postId>/comments`;

// const promiFetch = url => new Promise((resolve, reject) => {
    
// });

// const asyncFetch = async (url) => {};
// const fn = promiFetch;

// // const getPosts

// getPosts(1);

const getPosts = async (userId) => {
    try {
      // Fetch user's posts
      const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
      const postsResponse = await fetch(postsUrl);
      if (!postsResponse.ok) {
        throw new Error(`Failed to fetch posts: ${postsResponse.status} ${postsResponse.statusText}`);
      }
      const posts = await postsResponse.json();
  
      // Fetch comments for each post
      const postsWithComments = await Promise.all(posts.map(async post => {
        const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`;
        const commentsResponse = await fetch(commentsUrl);
        if (!commentsResponse.ok) {
          throw new Error(`Failed to fetch comments for post ${post.id}: ${commentsResponse.status} ${commentsResponse.statusText}`);
        }
        const comments = await commentsResponse.json();
  
        return {
          postId: post.id,
          title: post.title,
          comments: comments
        };
      }));
  
      return postsWithComments;
    } catch (error) {
      console.error('Error:', error.message);
      throw error; // rethrow the error to handle it further if needed
    }
  };
  
  // Example usage:
  getPosts(1)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Error during fetch:', error.message);
    });
  