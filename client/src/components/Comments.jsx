'use client';
import React from 'react';
import CommentList from './CommentList';
import { postComment } from '@/action/wp.client';
import { useState } from 'react';

const Comments = ({ post }) => {
  const [content, setContent] = useState('');
  const [author_email, setAuthorEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Please enter a comment');
      return;
    }
    
    if (!author_email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const data = {
        post: post.id,
        author_name: author_email,
        author_email,
        content,
      };
      console.log('Data', data);
      const res = await postComment(data);
      console.log('Comment posted successfully:', res);
      
      // Clear form and show success message
      setContent('');
      setAuthorEmail('');
      setSuccess('Comment posted successfully! It will appear after approval.');
      
      // Refresh comments list after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.error('Error posting comment:', error);
      setError(error.message || 'Failed to post comment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="py-8 bg-white">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <div className="max-w-xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Leave a Comment</h3>
              
              {/* WordPress Settings Notice - Hidden since settings are now correct */}
              {/* <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">ℹ️ Comment System Status</h4>
                <p className="text-sm text-blue-700 mb-2">
                  <strong>Current Issue:</strong> Comments require authentication on the WordPress backend.
                </p>
                <p className="text-sm text-blue-700 mb-2">
                  <strong>To fix this:</strong> The WordPress administrator needs to:
                </p>
                <ul className="text-xs text-blue-600 space-y-1 ml-4">
                  <li>• Go to WordPress Admin → Settings → Discussion</li>
                  <li>• Uncheck "Users must be registered and logged in to comment"</li>
                  <li>• Check "Anyone can post a comment"</li>
                  <li>• Save Changes</li>
                </ul>
                <p className="text-xs text-blue-600 mt-2">
                  <em>This is a WordPress configuration issue, not a problem with this website.</em>
                </p>
              </div> */}
              
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              
              {/* Success Message */}
              {success && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  {success}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="author_email"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    name="author_email"
                    id="author_email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={author_email}
                    onChange={(e) => setAuthorEmail(e.target.value)}
                    className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label
                    htmlFor="content"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    Comment
                  </label>
                  <textarea
                    name="content"
                    id="content"
                    placeholder="Share your thoughts..."
                    rows="4"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    required
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                      loading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    }`}
                  >
                    {loading ? 'Posting...' : 'Post Comment'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CommentList post={post} />
    </>
  );
};

export default Comments;
