import React from "react";
import UserPost from "./endpoints/UserPost";
import TokenPost from "./endpoints/TokenPost";
import PhotoPost from "./endpoints/PhotoPost";

const Api = () => {
  return (
    <div>
      <UserPost />
      <TokenPost />
      <h1>Photo Post</h1>
      <PhotoPost />
    </div>
  );
};

export default Api;
