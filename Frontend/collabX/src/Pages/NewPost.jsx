import { useState, useRef } from "react";
import { Image, MapPin, Users, X } from "lucide-react";

const NewPost = () => {
  const [caption, setCaption] = useState("");
  const [media, setMedia] = useState(null);
  const [location, setLocation] = useState("");
  const fileInputRef = useRef(null);

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMedia(URL.createObjectURL(file));
    }
  };

  const removeMedia = () => {
    setMedia(null);
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 mb-0">
      <div className="flex flex-col items-center bg-white p-6 text-white shadow-lg rounded-lg w-[60%] max-w-2xl mx-auto">
        <div className="w-full bg-white">
          <h2 className="text-xl font-semibold text-center mb-4 text-black">
            Create a new post
          </h2>

          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold text-black">John Doe</p>
            </div>
          </div>

          <textarea
            className="w-full p-2 rounded-md resize-none focus:outline-none text-black"
            rows="3"
            placeholder="What's on your mind?"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          ></textarea>

          <div className="border-dashed border-2 border-gray-300 p-5 text-center rounded-md mt-3 relative">
            {media ? (
              <div className="relative">
                <img
                  src={media}
                  alt="Upload Preview"
                  className="w-full rounded-md"
                />
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1"
                  onClick={removeMedia}
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-500">
                  Add photos/videos or drag and drop
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*, video/*"
                  onChange={handleFile}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </>
            )}
          </div>

          <div className="flex justify-around items-center mt-4 border-t pt-3 w-full   text-gray-700">
            <button
              onClick={openFileSelector}
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition cursor-pointer"
            >
              <Image size={20} /> <span>Photo/Video</span>
            </button>
            <button className="flex items-center space-x-2 text-green-500 hover:text-green-600 cursor-pointer transition">
              <Users size={20} /> <span>Tag Friends</span>
            </button>
            <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 cursor-pointer transition">
              <MapPin size={20} /> <span>Check-in</span>
            </button>
          </div>

          <button
            className={`w-full mt-4 py-2 rounded-md text-white font-semibold cursor-pointer transition ${
              caption || media
                ? "bg-[#1CC896]  hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!caption && !media}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
