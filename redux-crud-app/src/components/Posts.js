
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, createPost, updatePost, deletePost } from '../actions/postActions';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCreatePost = () => {
    const newPostData = {
      title: 'New Post Title',
      body: 'New Post Body',
    };
    dispatch(createPost(newPostData));
  };

  const handleUpdatePost = (postId) => {
    const updatedPostData = {
      title: 'Updated Post Title',
      body: 'Updated Post Body',
    };
    dispatch(updatePost(postId, updatedPostData));
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={handleCreatePost}>Create New Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleUpdatePost(post.id)}>Update</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
