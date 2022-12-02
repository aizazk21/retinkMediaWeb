import React from "react";
import {
  BlogsContainer,
  BlogsCard,
  BlogsImg,
  BlogsHeading,
  BlogsText,
} from "./blogsStyles";
import { blogsData } from "../../data/data";

const Blogs = () => {
  return (
    <BlogsContainer>
      {blogsData.map((blog) => {
        return (
          <BlogsCard key={blog.id}>
            <BlogsImg src={blog.image}></BlogsImg>
            <BlogsHeading>{blog.Title}</BlogsHeading>
            <BlogsText>{blog.Text}</BlogsText>
          </BlogsCard>
        );
      })}
    </BlogsContainer>
  );
};

export default Blogs;
