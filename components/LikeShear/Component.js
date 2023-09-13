import React, { useState } from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const LikeShareButtons = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="flex items-center space-x-4">
            <div
                className={`flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white shadow-md cursor-pointer ${liked ? 'text-red-600' : 'text-gray-500'}`}
                onClick={toggleLike}
            >
                <FaHeart size={20} />
            </div>
            <div
                className="flex items-center justify-center w-[34px] h-[34px]  rounded-full bg-white shadow-md cursor-pointer text-gray-500 hover:text-blue-500"
                onClick={() => {} /* Add share functionality here */}
            >
                <FaShareAlt size={20} />
            </div>
        </div>
    );
};

export default LikeShareButtons;
