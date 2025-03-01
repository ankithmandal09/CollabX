import { useState } from "react";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

const dummyPosts = [
  {
    id: 1,
    username: "user_1",
    location: "New York, USA",
    image: "https://via.placeholder.com/400",
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    username: "user_2",
    location: "Paris, France",
    image: "https://via.placeholder.com/400",
    likes: 78,
    comments: 20,
  },
  {
    id: 3,
    username: "user_3",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 90,
    comments: 30,
  },
  {
    id: 4,
    username: "user_4",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 100,
    comments: 50,
  },
  {
    id: 5,
    username: "user_5",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 80,
    comments: 10,
  },
  {
    id: 6,
    username: "user_6",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 140,
    comments: 68,
  },
  {
    id: 7,
    username: "user_7",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 240,
    comments: 87,
  },
  {
    id: 8,
    username: "user_8",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 190,
    comments: 56,
  },
  {
    id: 9,
    username: "user_9",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 200,
    comments: 101,
  },
  {
    id: 10,
    username: "user_10",
    location: "Tokyo, Japan",
    image: "https://via.placeholder.com/400",
    likes: 340,
    comments: 156,
  },
];

function HomePage() {
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

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

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
      {dummyPosts.map((post) => (
        <div key={post.id} className="bg-white border rounded-lg w-100 p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">{post.username}</span>
            <span className="text-gray-500 text-sm">{post.location}</span>
          </div>
          <img src={post.image} alt="Post" className="w-full h-64 object-cover rounded-md" />
          <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-4">
              <button onClick={() => toggleLike(post.id)}>
                <Heart className={`text-xl ${likedPosts.includes(post.id) ? "text-red-500 fill-current" : ""}`} />
              </button>
              <button>
                <MessageCircle className="text-xl" />
              </button>
            </div>
            <button onClick={() => toggleSave(post.id)}>
              <Bookmark className={`text-xl ${savedPosts.includes(post.id) ? "text-blue-500 fill-current" : ""}`} />
            </button>
          </div>
          <p className="mt-2 text-sm font-semibold">{post.likes} likes</p>
          <p className="text-gray-600 text-sm">View all {post.comments} comments</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage