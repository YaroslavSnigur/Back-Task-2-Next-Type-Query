import PostItem from "../PostItem/PostItem";
import classes from "./PostList.module.css";

function PostList(props: any) {
  return (
    <ul className={classes.list}>
      {props.posts.map((post: any) => (
        <PostItem
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.createdAt}
          authors={post.authors}
          comments={post.comments}
        />
      ))}
    </ul>
  );
}

export default PostList;
