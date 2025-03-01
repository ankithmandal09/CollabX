import { useState } from "react";

const Comment = ({ username, onClose }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-  bg-opacity-50 backdrop-blur-sm transition-opacity">
      <div className="bg-gray-900 text-white p-6 shadow-lg rounded-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✖
        </button>

        <div className="flex items-center space-x-4 mb-4">
          <span className="font-semibold text-lg">{username}</span>
        </div>

        <h2 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-2">
          Comments
        </h2>
        <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="bg-gray-800 p-2 rounded-lg">
                {comment}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No comments yet.</p>
          )}
        </div>

        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border border-gray-700 bg-gray-800 rounded-md mt-4 text-white placeholder-gray-500"
        />
        <button
          onClick={addComment}
          className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
