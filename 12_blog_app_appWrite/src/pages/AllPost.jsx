import React, { useEffect } from "react";
import appwriteSevices from "../Appwrite/Config";
import { Container, PostCard } from "../Components";
import { useState } from "react";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [isPost, setIsPost] = useState(false);
  useEffect(() => {
    appwriteSevices.getPosts([]).then((post) => {
      if (post) {
        setPosts(post.documents);
      }
      setIsPost(true);
    });
  });
  if (isPost === false && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Loading....
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (isPost === false && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Posts Found
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          {
            <div className="flex flex-wrap">
              {posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          }
        </Container>
      </div>
    );
  }
};

export default AllPost;
