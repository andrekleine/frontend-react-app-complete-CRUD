import { React } from "react";
import CardComment from "../../Card/CardComment";

const Comments = (props) => {
  return (
    <div className="Comments">
      {props.comments.map((each) => {
        return (
          <div key={each.id}>
            <CardComment text1={each.text} text2={each.user.firstName} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
