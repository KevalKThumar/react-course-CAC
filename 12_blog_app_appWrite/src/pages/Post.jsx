import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import appwriteServices from "../Appwrite/Config";
import appwriteServicesFile from "../Appwrite/File";
import { Button, Container } from "../Components";
import { Link } from "react-router-dom";

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  //   delete post
  const deletePost = () => {
    appwriteServices.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteServicesFile.deleteFile(post.$id);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={appwriteServicesFile.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-2/3 h-3/4 object-cover"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8 mt-4 text-center max-w-7xl mx-auto px-4 ">
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
};

export default Post;
