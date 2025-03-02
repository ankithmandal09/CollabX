import { useState,useContext, useEffect } from "react";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import Comment from "./Comment";
import { PostContext } from "../Context/PostContext";


function HomePage() {
  const { posts, loading, error } = useContext(PostContext);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };

  const toggleSave = (id) => {
    setSavedPosts((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };

  const openComments = (post) => {
    setSelectedPost(post);
    setShowComments(true);
  };

  const closeModal = () => {
    setShowComments(false);
    setSelectedPost(null);
  };



  if (loading)
    return <p className="text-white text-center">Loading posts...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="flex flex-col items-center p-6">

        {posts.length > 0 && posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border rounded-lg w-150 p-4 shadow-lg mb-6"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{post.username}</span>
              <span className="text-gray-500 text-sm">{post.location}</span>
            </div>
            <img
              src={post.image}
              alt="Post"
              className="w-full h-100 object-cover"
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-4">
                <button onClick={() => toggleLike(post.id, post.likes)}>
                  <Heart
                    className={`text-xl ${
                      likedPosts.includes(post.id)
                        ? "text-red-500 fill-current"
                        : ""
                    }` }
                  />
                </button>
                <button onClick={() => openComments(post)}>
                  <MessageCircle className="text-xl" />
                </button>
              </div>
              <button onClick={() => toggleSave(post.id)}>
                <Bookmark
                  className={`text-xl ${
                    savedPosts.includes(post.id)
                      ? "text-blue-500 fill-current"
                      : ""
                  }`}
                />
              </button>
            </div>
            <p className="mt-2 text-sm font-semibold">{post.likes} likes</p>
            <p className="text-gray-600 text-sm">
              View all {post.comments?.length || 0} comments
            </p>
          </div>
        
        ))}

        {showComments && selectedPost && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
            onClick={closeModal}
          >
            <div
              className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
              <Comment username={selectedPost.username} onClose={closeModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
