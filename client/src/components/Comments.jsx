'use client';
import React from 'react';
import CommentList from './CommentList';
import { postComment } from '@/action/wp.client';
import { useState } from 'react';
const Comments = ({ post }) => {
  // {"post": "846",
  //     "author_name": "Snehal",
  //     "author_email": "snehal.tayde13@gmail.com",
  //     "content": "Test new 2"
  //   }

  const [content, setContent] = useState('');
  const [author_name, setAuthorName] = useState('Snehal');
  const [author_email, setAuthorEmail] = useState('snehal.tayde13@gmail.com');
  const [postId, setPostId] = useState(post.id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Please enter a comment');
      return;
    }
    
    if (!author_name.trim()) {
      setError('Please enter your name');
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
        author_name,
        author_email,
        content,
      };
      console.log('Data', data);
      const res = await postComment(data);
      console.log('Comment posted successfully:', res);
      
      // Clear form and show success message
      setContent('');
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
              {/* WordPress Authentication Issue Notice */}
              <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">⚠️ Comment System Temporarily Unavailable</h3>
                <p className="text-sm text-orange-700 mb-2">
                  We're experiencing technical issues with our comment system. WordPress requires authentication for comment posting.
                </p>
                <p className="text-xs text-orange-600">
                  <strong>What this means:</strong> You can read the blog post, but commenting is temporarily disabled until we resolve the authentication issue.
                </p>
              </div>
              
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
              
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-bold text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    name=""
                    id=""
                    placeholder="Name"
                    rows="3"
                    className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    onChange={(e) => setAuthorName(e.target.value)}
                    disabled={true}
                  ></input>
                </div>
                <label
                  htmlFor=""
                  className="block text-sm font-bold text-gray-900"
                >
                  {' '}
                  Your Email{' '}
                </label>
                <div className="mt-2">
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter Your Email"
                    rows="3"
                    className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600 disabled:opacity-50"
                    onChange={(e) => setAuthorEmail(e.target.value)}
                    disabled={true}
                  ></textarea>
                </div>
                <label
                  htmlFor=""
                  className="block text-sm font-bold text-gray-900"
                >
                  {' '}
                  Comment{' '}
                </label>
                <div className="mt-2">
                  <textarea
                    name=""
                    id=""
                    placeholder="Share Your Thoughts"
                    rows="3"
                    className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600 disabled:opacity-50"
                    onChange={(e) => setContent(e.target.value)}
                    disabled={true}
                  ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={true}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed"
                  >
                    Comment System Disabled
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentList post={post} />
    </>
  );
};

export default Comments;
