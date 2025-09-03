'use client';
import React from 'react';
import CommentList from './CommentList';

const Comments = ({ post }) => {
  return (
    <>
      <div>
        <div className="py-8 bg-white">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <div className="max-w-xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Comments</h3>
            </div>
          </div>
        </div>
      </div>
      <CommentList post={post} />
      
    </>
  );
};

export default Comments;
