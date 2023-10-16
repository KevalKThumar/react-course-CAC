import React from "react";
import appwriteService from "../Appwrite/File";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSelector } from "react-redux";

const PostCard = ({ $id, title, featuredImage }) => {
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
            {/* // #{post.category} */}
            category
          </p>
          <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
            {/* {post.title} */}
            {title}
          </p>
          <p className="mt-4 w-full text-sm leading-normal text-gray-600">
            {/* // {post.description} */}
            description
          </p>
          <div className="mt-4 flex space-x-3 ">
            {/* <img
              className="h-full w-10 rounded-lg"
              src={post.avatar}
              alt={post.author}
            /> */}
            <div>
              <p className="text-sm font-semibold leading-tight text-gray-900">
                {/* // {post.author} */}
                author
              </p>
              <p className="text-sm leading-tight text-gray-600">date</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
  
};


export default PostCard;
