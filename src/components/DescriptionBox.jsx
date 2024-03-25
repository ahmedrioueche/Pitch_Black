import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const DescriptionBox = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`description-box ${expanded ? 'expanded' : ''}`}  onClick={toggleExpanded}>
      <div className='description-box-header'>
        <h5>Description</h5>
        {description.length > 400 && (
          <>
            {expanded ? (
              <ExpandLessIcon className="icon show-icon" />
            ) : (
              <ExpandMoreIcon className="icon show-icon" />
            )}
          </>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionBox;
