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
      // First try to get approved comments
      const approvedComments = await getComments(post.id);
      console.log('Approved comments received:', approvedComments);
      
      // Also get all comments for debugging
      const allComments = await getAllCommentsForPost(post.id);
      console.log('All comments received:', allComments);
      
      // For now, show all comments so you can see what's happening
      setComments(Array.isArray(allComments) ? allComments : []);
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
      {/* WordPress Authentication Issue Notice */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">ℹ️ Comment Display Issue</h3>
        <p className="text-sm text-blue-700 mb-2">
          WordPress requires authentication to access comments. This means:
        </p>
        <ul className="text-xs text-blue-600 space-y-1 ml-4">
          <li>• Existing comments may not display</li>
          <li>• New comments cannot be posted</li>
          <li>• This is a WordPress configuration issue</li>
        </ul>
      </div>
      
      {loading && <div className="text-center text-gray-500">Loading...</div>}
      {!loading && comments.length === 0 && (
        <div className="text-center text-gray-500">
          <p>No comments available.</p>
          <p className="text-sm text-gray-400 mt-1">
            This may be due to WordPress authentication requirements.
          </p>
        </div>
      )}
      
      {/* Debug Section - Remove this after fixing the issue */}
      {!loading && comments.length > 0 && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Debug Info:</h3>
          <p className="text-sm text-blue-700 mb-2">
            Found {comments.length} comment(s) for post ID: {post.id}
          </p>
          <details className="text-xs">
            <summary className="cursor-pointer text-blue-600">Show raw comment data</summary>
            <pre className="mt-2 p-2 bg-white border rounded overflow-auto text-xs">
              {JSON.stringify(comments, null, 2)}
            </pre>
          </details>
        </div>
      )}
      
      {comments.map((comment) => (
        <div
          key={comment.id}
          className={`p-4 border rounded-lg shadow-sm ${
            comment.status === 'approved' ? 'bg-white' : 'bg-yellow-50 border-yellow-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-900">
              {comment?.author_name}
            </h2>
            {comment.status !== 'approved' && (
              <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                {comment.status === 'pending' ? 'Pending' : comment.status}
              </span>
            )}
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(comment?.content?.rendered),
            }}
            className="mt-2 text-gray-700"
          ></p>
          <span className="flex justify-end text-sm" suppressHydrationWarning>
            Comment Date: {formatDate(comment?.date)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
