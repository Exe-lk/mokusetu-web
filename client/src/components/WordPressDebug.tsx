'use client';
import { testWordPressConnection, testWordPressEndpoints } from '@/action/wp.client';
import React, { useState } from 'react';

const WordPressDebug = () => {
  const [connectionTest, setConnectionTest] = useState<any>(null);
  const [endpointTest, setEndpointTest] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const result = await testWordPressConnection();
      setConnectionTest(result);
    } catch (error) {
      setConnectionTest({ success: false, error: error instanceof Error ? error.message : String(error) });
    }
    setLoading(false);
  };

  const testEndpoints = async () => {
    setLoading(true);
    try {
      const result = await testWordPressEndpoints();
      setEndpointTest(result);
    } catch (error) {
      setEndpointTest({ error: error instanceof Error ? error.message : String(error) });
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">WordPress API Debug</h2>
      
      <div className="space-y-4">
        <div>
          <button
            onClick={testConnection}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Basic Connection'}
          </button>
          
          {connectionTest && (
            <div className="mt-2 p-3 bg-white rounded border">
              <h3 className="font-semibold">Connection Test Result:</h3>
              <pre className="text-sm mt-2 overflow-auto">
                {JSON.stringify(connectionTest, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={testEndpoints}
            disabled={loading}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test API Endpoints'}
          </button>
          
          {endpointTest && (
            <div className="mt-2 p-3 bg-white rounded border">
              <h3 className="font-semibold">Endpoint Test Results:</h3>
              <pre className="text-sm mt-2 overflow-auto">
                {JSON.stringify(endpointTest, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="font-semibold text-yellow-800">Common Issues & Solutions:</h3>
        <ul className="mt-2 text-sm text-yellow-700 space-y-1">
          <li>• <strong>401 Unauthorized:</strong> WordPress requires authentication for this endpoint</li>
          <li>• <strong>403 Forbidden:</strong> Endpoint access is restricted</li>
          <li>• <strong>CORS Errors:</strong> WordPress server doesn't allow cross-origin requests</li>
          <li>• <strong>Connection Failed:</strong> WordPress site may be down or unreachable</li>
        </ul>
      </div>
    </div>
  );
};

export default WordPressDebug;
