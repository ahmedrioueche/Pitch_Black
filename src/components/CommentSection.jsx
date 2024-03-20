import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'; 
import NewPost from './NewPost';
import NewComment from './NewComment';

const CommentSection = ({ currentUser, comments }) => {
  return (
    <div className="comment-section">
      <NewComment currentUser={currentUser} />
      <ul>
        {comments.map((comment, index) => (
          <>
            <li key={index}>
              <Comment
                currentUser={currentUser}
                username={comment.username}
                profilePicUrl={comment.profilePicUrl}
                content={comment.content}
                likes={comment.likes}
                replies={comment.replies}
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      profilePicUrl: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentSection;
