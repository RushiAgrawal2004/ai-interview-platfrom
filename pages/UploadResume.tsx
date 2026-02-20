// Fix: Import useState and useRef from react
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadIcon } from '../components/icons/UploadIcon';
import { LogoIcon } from '../components/icons/LogoIcon';
import { FileIcon } from '../components/icons/FileIcon';

const UploadResume: React.FC = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAnalyze = () => {
        navigate('/analyzing');
    };

    const handleFileSelected = (selectedFile: File | null) => {
        if (!selectedFile) return;
        
        const allowedTypes = [
            'application/pdf', 
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (allowedTypes.includes(selectedFile.type) && selectedFile.size <= 5 * 1024 * 1024) {
            setFile(selectedFile);
            setIsUploading(true);
            setUploadProgress(0);

            const interval = setInterval(() => {
                setUploadProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsUploading(false);
                        return 100;
                    }
                    return prev + 10;
                });
            }, 150);

        } else {
            setFile(null);
            alert('Invalid file. Please upload a PDF or DOCX file no larger than 5MB.');
        }
    };

    // Fix: Use React.DragEvent for event type
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    // Fix: Use React.DragEvent for event type
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    // Fix: Use React.DragEvent for event type
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelected(e.dataTransfer.files[0]);
        }
    };

    const handleBrowseClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-2xl">
                <div className="flex items-center justify-center mb-8">
                    <LogoIcon className="h-10 w-10 text-primary-500" />
                    <h1 className="text-4xl font-bold text-slate-800 ml-3">InterviewAI</h1>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Upload Your Resume</h2>
                        <p className="text-slate-500">Personalize your practice questions based on your experience.</p>
                    </div>
                    
                    {!file ? (
                        <div 
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center bg-white transition-colors duration-300 ${isDragging ? 'border-primary-500 bg-primary-50' : 'border-slate-300'}`}
                        >
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                hidden 
                                onChange={(e) => handleFileSelected(e.target.files ? e.target.files[0] : null)}
                                accept=".pdf,.docx"
                            />
                            <div className="bg-slate-100 p-4 rounded-full mb-4">
                                <UploadIcon className="w-10 h-10 text-primary-500" />
                            </div>
                            <p className="text-slate-800 font-semibold">Drag & drop your file here</p>
                            <p className="text-slate-500 text-sm my-2">or</p>
                            <button 
                                onClick={handleBrowseClick}
                                className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold py-2 px-5 rounded-lg transition-colors"
                            >
                                Browse Files
                            </button>
                            <p className="text-xs text-slate-400 mt-4">PDF, DOCX (max 5MB)</p>
                        </div>
                    ) : (
                        <div className="bg-slate-100/70 rounded-xl p-6 space-y-4">
                            <div className="flex items-center space-x-4">
                               <FileIcon className="w-10 h-10 text-primary-500 flex-shrink-0" />
                               <div className="flex-grow overflow-hidden">
                                   <p className="text-slate-800 font-semibold truncate">{file.name}</p>
                                   <p className="text-slate-500 text-sm">{Math.round(file.size / 1024)} KB</p>
                               </div>
                            </div>
                            <div className="w-full bg-slate-300 rounded-full h-2.5">
                               <div className="bg-primary-600 h-2.5 rounded-full transition-all duration-300" style={{width: `${uploadProgress}%`}}></div>
                            </div>
                            <p className="text-right text-sm font-medium text-slate-600">{uploadProgress === 100 ? 'Upload Complete!' : 'Uploading...'}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">Desired Role</label>
                            <select id="role" value={role} onChange={e => setRole(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                <option value="" disabled>Select a role</option>
                                <option>Frontend Developer</option>
                                <option>Backend Developer</option>
                                <option>Full Stack Developer</option>
                                <option>Product Manager</option>
                                <option>UX/UI Designer</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                            <select id="experience" value={experience} onChange={e => setExperience(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                <option value="" disabled>Select experience level</option>
                                <option>0-1 years (Entry-Level)</option>
                                <option>2-4 years (Mid-Level)</option>
                                <option>5-8 years (Senior)</option>
                                <option>9+ years (Lead/Principal)</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-2">
                         <button 
                            onClick={handleAnalyze}
                            className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-slate-500"
                            disabled={!file || isUploading || !role || !experience}
                        >
                            Analyze Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadResume;