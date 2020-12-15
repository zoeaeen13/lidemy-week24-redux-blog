import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createNewPost } from "../../redux/reducers/postsReducer";
import { useDispatch } from "react-redux";
import ERRMESSAGE from "../../constants/errorMessage";
import {
  NewPostForm,
  NewPostWrapper,
  InputPostTitle,
  InputPostContent,
  ErrorMessage,
  BtnPublish,
} from "../../components/NewPost";

function NewPostPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    setErrorMessage(null);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }

    if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (!title || !content) {
      return setErrorMessage(ERRMESSAGE.BLANK_ARTICLE);
    }
    dispatch(createNewPost(title, content)).then((res) => {
      if (!res.id) {
        return setErrorMessage(res.message);
      }
      history.push("/");
    });
  };

  return (
    <NewPostForm onSubmit={handleSubmitPost}>
      <NewPostWrapper>
        <InputPostTitle
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleInputChange}
        />
        <InputPostContent
          name="content"
          placeholder="Write a story..."
          rows="10"
          cols="50"
          value={content}
          onChange={handleInputChange}
        ></InputPostContent>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </NewPostWrapper>
      <BtnPublish>Publish</BtnPublish>
    </NewPostForm>
  );
}

export default NewPostPage;
