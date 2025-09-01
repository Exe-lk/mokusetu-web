'use client';
import React, { useState, useEffect } from 'react';
import { checkWordPressHealth } from '@/action/wp.actions';

const WordPressStatus = () => {
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [lastChecked, setLastChecked] = useState<string>('');

  const checkHealth = async () => {
    setLoading(true);
    try {
      const status = await checkWordPressHealth();
      setHealthStatus(status);
      setLastChecked(new Date().toLocaleTimeString());
    } catch (error) {
      setHealthStatus({
        status: 'error',
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString()
      });
      setLastChecked(new Date().toLocaleTimeString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
    // Check health every 5 minutes
    const interval = setInterval(checkHealth, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!healthStatus) return null;

  const isHealthy = healthStatus.status === 'healthy';
  const hasConnectionIssues = healthStatus.status === 'unhealthy' || 
                             (healthStatus.errorCode === 'ECONNRESET') ||
                             healthStatus.error?.includes('fetch failed');

  if (isHealthy) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className={`p-4 rounded-lg shadow-lg border ${
        hasConnectionIssues 
          ? 'bg-yellow-50 border-yellow-300 text-yellow-800' 
          : 'bg-red-50 border-red-300 text-red-800'
      }`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">
              {hasConnectionIssues ? '⚠️ WordPress Connection Issues' : '🚨 WordPress Error'}
            </h3>
            
            {hasConnectionIssues ? (
              <div className="text-sm space-y-2">
                <p>We're experiencing connection issues with our blog backend.</p>
                <p className="font-medium">⚠️ Comments and posts may be temporarily unavailable.</p>
                <p className="text-xs opacity-75">
                  Last checked: {lastChecked}
                </p>
              </div>
            ) : (
              <div className="text-sm">
                <p>{healthStatus.error || 'Unknown error occurred'}</p>
                <p className="text-xs opacity-75 mt-1">
                  Last checked: {lastChecked}
                </p>
              </div>
            )}
          </div>
          
          <button
            onClick={checkHealth}
            disabled={loading}
            className="ml-3 text-sm bg-white bg-opacity-50 hover:bg-opacity-75 px-2 py-1 rounded disabled:opacity-50"
          >
            {loading ? '...' : '↻'}
          </button>
        </div>
        
        {hasConnectionIssues && (
          <div className="mt-3 pt-3 border-t border-current border-opacity-20">
            <p className="text-xs">
              <strong>What this means:</strong> Blog functionality may be limited until the connection is restored.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordPressStatus;
