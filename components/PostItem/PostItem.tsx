import Card from "../Card/Card";
import classes from "./PostItem.module.css";

interface PostItemProps {
  title: string;
  description: string;
  date: string;
  authors: string[];
  comments: string[];
}

const PostItem = ({
  title,
  description,
  date,
  authors,
  comments,
}: PostItemProps) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.title}>
          <h3>{title}</h3>
        </div>
        <div className={classes.content}>
          <h3>{description}</h3>
        </div>
        <div className={classes.content}>
          <h3>{date}</h3>
        </div>
        <div className={classes.content}>
          <h3>{authors}</h3>
        </div>
        <div className={classes.content}>
          <h3>{comments}</h3>
        </div>
      </Card>
    </li>
  );
};

export default PostItem;
