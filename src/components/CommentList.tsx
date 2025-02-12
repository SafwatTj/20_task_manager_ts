// components/CommentList.tsx
import { FC, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  addComment,
  deleteComment,
  editComment,
  fetchComments,
} from "../redux/commentSlice";
import Comment from "./Comment";
import { v4 } from "uuid";

export type ActionComment = "add" | "edit" | "delete";

export interface IComment {
  // id: number;
  // postId: number;
  name: string;
  email: string;
  body: string;
}

const CommentList: FC = () => {
  const { comments, status } = useSelector(
    (state: RootState) => state.comments
  );
  const dispatch: AppDispatch = useDispatch();

  const newCommentNameRef = useRef<HTMLInputElement>(null);
  const newCommentEmailRef = useRef<HTMLInputElement>(null);
  const newCommentBodyRef = useRef<HTMLInputElement>(null);

  const handleCommentAction = (
    action: ActionComment,
    index?: number,
    value: IComment | null = null
  ) => {
    switch (action) {
      case "add":
        if (
          newCommentNameRef.current &&
          newCommentEmailRef.current &&
          newCommentBodyRef.current
        ) {
          dispatch(
            addComment({
              name: newCommentNameRef.current.value,
              email: newCommentEmailRef.current.value,
              body: newCommentBodyRef.current.value,
            })
          );
          newCommentNameRef.current.value = "";
          newCommentEmailRef.current.value = "";
          newCommentBodyRef.current.value = "";
        }
        break;
      case "edit":
        if (index !== undefined && value) {
          dispatch(editComment({ index, comment: value }));
        }
        break;
      case "delete":
        if (index !== undefined) {
          dispatch(deleteComment(index));
        }
        break;
    }
  };

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Comment List</h1>
      <div className="input-group mb-3">
        <input
          ref={newCommentNameRef}
          type="text"
          className="form-control"
          placeholder="Name"
        />
        <input
          ref={newCommentEmailRef}
          type="email"
          className="form-control"
          placeholder="Email"
        />
        <input
          ref={newCommentBodyRef}
          type="text"
          className="form-control"
          placeholder="Comment"
        />
        <button
          className="btn btn-primary"
          onClick={() => handleCommentAction("add")}
        >
          Add Comment
        </button>
      </div>
      {status === "loading" && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {status === "error" && <p>Error loading comments</p>}
      <div>
        {comments.map(({ name, email, body }, i) => (
          <Comment
            key={v4()}
            name={name}
            email={email}
            body={body}
            index={i}
            handleCommentAction={handleCommentAction}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
