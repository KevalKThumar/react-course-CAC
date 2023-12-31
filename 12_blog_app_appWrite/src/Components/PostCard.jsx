import React from "react";
import appwriteService from "../Appwrite/File";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const PostCard = ({ $id, title, featuredImage, $createdAt, category }) => {

  return (
    <Link to={`/post/${$id}`}>
      <div key={$id} className="border bg-white rounded-xl">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="aspect-video w-full rounded-md object-fill"
        />
        <div className="min-h-min p-3">
          <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
            {category}
          </p>
          <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
            {title}
          </p>

          <div className="mt-4 flex space-x-3 ">
            <div>
              <p className="text-sm font-semibold leading-tight text-gray-600">
                date : {$createdAt.slice(0, 10)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
