import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

const BASE_URL = "https://collabx-d8cb6-default-rtdb.firebaseio.com/";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Posts.json`);
      if (response.data) {
        const postsArray = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setPosts(postsArray);
      } else {
        setPosts([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchPosts();
}, []);

const addNewPost = async (newPost) => {
  try {
    const response = await axios.post(`${BASE_URL}/Posts.json`, newPost);

    if (response.data && response.data.name) {
      const newPostWithId = { id: response.data.name, ...newPost };
      setPosts((prevPosts) => [newPostWithId, ...prevPosts]);
    } else {
      console.error("Error: Invalid response from Firebase", response);
    }
  } catch (err) {
    console.error("Error adding post:", err);
  }
};

  return (
    <PostContext.Provider value={{ posts, loading, error, addNewPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
