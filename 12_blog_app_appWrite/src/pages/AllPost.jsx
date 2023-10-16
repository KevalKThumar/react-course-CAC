import React, { useEffect } from "react";
import appwriteSevices from "../Appwrite/Config";
import { Container, PostCard } from "../Components";
import { useState } from "react";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteSevices.getPosts([]).then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  });
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
};

export default AllPost;
