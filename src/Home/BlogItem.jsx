import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../common/Chip';
import './BlogItem.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <Link className='blogItem-top' to={`/blog/${id}`}>
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' /> 
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-links' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
     </Link>
  );
};

export default BlogItem;
