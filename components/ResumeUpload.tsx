"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { Upload, FileText, FileX2, Loader2 } from 'lucide-react';
import { Box } from '@mui/material';

const ResumeUpload: React.FC = () => {
  const [resumeTitle, setResumeTitle] = useState<string>('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadedResumeUrl, setUploadedResumeUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchingResume, setFetchingResume] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
  };

  const handleUpload = async () => {
    if (!resumeTitle || !resumeFile) {
      toast.error('Please provide both resume title and file.', {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }

    const formData = new FormData();
    formData.append('resumeTitle', resumeTitle);
    formData.append('resumeFile', resumeFile);

    try {
      setLoading(true);
      const response = await fetch('/api/auth/resumeupload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload resume.');
      }

      toast.success('Resume uploaded successfully!', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#4CAF50',
          color: '#fff',
        },
      });
      fetchResume();
    } catch (err: any) {
      toast.error(err.message, {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#FF5722',
          color: '#fff',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchResume = useCallback(async () => {
    if (fetchingResume) return;
    setFetchingResume(true);
    setLoading(true);
  
    try {
      const response = await fetch('/api/auth/resumeupload');
      if (response.ok) {
        setUploadedResumeUrl('/api/auth/resumeupload');
      }
    } catch (err) {
      console.error('Error fetching resume:', err);
    } finally {
      setLoading(false);
      setFetchingResume(false);
    }
  }, [fetchingResume]);
  
  // useEffect(() => {
  //   if (activeTab === 1) {
  //     fetchResume();
  //   }
  // }, [activeTab, fetchResume]);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    if (activeTab === 1) {
      fetchResume();
    }
  }, [activeTab, fetchResume]);

  return (
    <>
  
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <Toaster position="top-right" />

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* Tab Navigation */}
        <div className="flex border-b">
          {['Upload Resume', 'View Resume'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleTabChange(index)}
              className={`
                w-1/2 py-4 text-lg font-semibold transition-all duration-300 
                ${activeTab === index 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="p-8 space-y-6"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Resume Title"
                  value={resumeTitle}
                  onChange={(e) => setResumeTitle(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {resumeFile ? (
                        <>
                          <FileText className="w-16 h-16 text-blue-500 mb-4" />
                          <p className="text-sm text-gray-500">{resumeFile.name}</p>
                        </>
                      ) : (
                        <>
                          <Upload className="w-16 h-16 text-gray-400 mb-4" />
                          <p className="mb-2 text-sm text-gray-500">Click to upload resume</p>
                          <p className="text-xs text-gray-400">.pdf files only</p>
                        </>
                      )}
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf" 
                      onChange={handleFileChange} 
                    />
                  </label>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUpload}
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Upload />
                    <span>Upload Resume</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="view"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              {loading ? (
                <div className="flex justify-center items-center h-96">
                  <Loader2 className="w-16 h-16 animate-spin text-blue-500" />
                </div>
              ) : uploadedResumeUrl ? (
                <motion.iframe
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={uploadedResumeUrl}
                  title="Resume Viewer"
                  className="w-full h-[600px] border-2 border-gray-300 rounded-lg shadow-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-96 text-center">
                  <FileX2 className="w-24 h-24 text-gray-400 mb-4" />
                  <p className="text-xl text-gray-600">No resume uploaded yet</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
    </>
  );
};

export default ResumeUpload;