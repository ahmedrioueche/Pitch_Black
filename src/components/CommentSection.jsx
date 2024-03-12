import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'; 
import NewPost from './NewPost'
const CommentSection = ({ currentUser, comments }) => {
  return (
    <div className="comment-section">
      <div className='separatorLine'></div>
      <div className='sectionTitle'>Comments</div>
      <div className='separatorLine'></div>
      <NewPost currentUser={currentUser} />
      <ul>
        {comments.map((comment, index) => (
          <>
            <div className='separatorLine'></div>
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
