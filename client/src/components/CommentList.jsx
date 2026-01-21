'use client';
import React from 'react';
import { formatDate } from '@/utils/lib';

const CommentList = ({ post }) => {
  const comments = [];
  const loading = false;

  return (
    <div className="w-2/3 m-auto space-y-4">
      {loading && <div className="text-center text-gray-500">Loading comments...</div>}
      
      {!loading && comments.length === 0 && (
        <div className="text-center text-gray-500">
          <p>No comments available.</p>
        </div>
      )}
      
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="p-4 border rounded-lg shadow-sm bg-white"
        >
          <div className="mb-2">
            <span className="text-sm text-gray-600 font-medium">
              Email: {comment.author_name}
            </span>
          </div>

          <div className="mb-3">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(comment?.content?.rendered),
              }}
              className="text-gray-700 leading-relaxed"
            />
          </div>

          <div className="flex justify-end">
            <span className="text-xs text-gray-500" suppressHydrationWarning>
              {formatDate(comment?.date)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
