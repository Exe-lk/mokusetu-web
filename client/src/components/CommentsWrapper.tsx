'use client';

import dynamic from 'next/dynamic';

const Comments = dynamic(() => import('./Comments'), {
  ssr: false,
  loading: () => (
    <div className="mt-16 p-8 bg-gray-50 rounded-lg">
      <div className="text-center">
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="text-muted mt-4">Loading comments...</p>
      </div>
    </div>
  ),
});

interface CommentsWrapperProps {
  post: any;
}

export default function CommentsWrapper({ post }: CommentsWrapperProps) {
  return (
    <div className="mt-16">
      <Comments post={post} />
    </div>
  );
}
