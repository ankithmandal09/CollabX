import { useState } from "react";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import Comment from "../Pages/Comment";

const dummyPosts = [
  {
    id: 1,
    username: "user_1",
    location: "New York, USA",
    image:
      "https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_lifes-realities-1.jpg",
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    username: "user_2",
    location: "Paris, France",
    image: "https://s.taplink.ru/p/c/a/7/c/27509040.jpg?0?0",
    likes: 78,
    comments: 20,
  },
  {
    id: 3,
    username: "user_3",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8lTSVcFa-ZqcBWCEmoR6UA2p78NCTOhFWQ&s",
    likes: 90,
    comments: 30,
  },
  {
    id: 4,
    username: "user_4",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2k8IJeWYyn6JOYuZLizv7RjNr15rAHWf9w&s",
    likes: 100,
    comments: 50,
  },
  {
    id: 5,
    username: "user_5",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM5fXgLpSyvQa26XSMgMVE8aIjfPkrvRTuw&s",
    likes: 80,
    comments: 10,
  },
  {
    id: 6,
    username: "user_6",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbM8NhERqO2hmztaJgwky344xSD9NA0fJI7Q&s",
    likes: 140,
    comments: 68,
  },
  {
    id: 7,
    username: "user_7",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwg1KLohKoKjtMmF-LAw5uQg6LyUvmBIcGQ&s",
    likes: 240,
    comments: 87,
  },
  {
    id: 8,
    username: "user_8",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzj7lvu7MRi6HEmVnP_kUcaszUY8AI2G2aA&s",
    likes: 190,
    comments: 56,
  },
  {
    id: 9,
    username: "user_9",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxKFL3tpoHyBKEEoF1AxlIxwXDPISsHYm8w&s",
    likes: 200,
    comments: 101,
  },
  {
    id: 10,
    username: "user_10",
    location: "Tokyo, Japan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyRUcfVWUqQElK63bKtWJ9PRITsUX6QxX5Q&s",
    likes: 340,
    comments: 156,
  },
];

function HomePage() {
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

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {dummyPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white border rounded-lg w-120 p-4 shadow-lg mb-6"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">{post.username}</span>
            <span className="text-gray-500 text-sm">{post.location}</span>
          </div>
          <img
            src={post.image}
            alt="Post"
            className="w-full h-100 object-cover rounded-md"
          />
          <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-4">
              <button onClick={() => toggleLike(post.id)}>
                <Heart
                  className={`text-xl ${
                    likedPosts.includes(post.id)
                      ? "text-red-500 fill-current"
                      : ""
                  }`}
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
            View all {post.comments} comments
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
            ></button>
            <Comment username={selectedPost.username} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
