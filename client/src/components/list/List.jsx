import { Card } from "../card/Card";
import "./list.scss";

export const List = ({ posts }) => {
  return (
    <div className="list">
      {posts.map((item) =>
        item && item.id ? <Card key={item.id} item={item} /> : null
      )}
    </div>
  );
};
