'use client';
import { getComments, getAllCommentsForPost } from '@/action/wp.client';
import React, { useEffect, useState } from 'react';
import { formatDate } from '@/utils/lib';
import DOMPurify from 'dompurify';

const CommentList = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllComments = async () => {
    setLoading(true);
    try {
      const allComments = await getAllCommentsForPost(post.id);
      console.log('All comments received:', allComments);
      
      const approvedComments = allComments.filter(comment => comment.status === 'approved');
      setComments(approvedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setComments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllComments();
  }, [post.id]);

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
