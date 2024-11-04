import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

interface TabButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

interface JobDescription {
  job_id: number;
  job_title: string;
  job_description: string;
  department_name: string;
  salary_range: string;
  skills: string[];
}



const TabButton: React.FC<TabButtonProps> =({ selected, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      selected
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {children}
  </button>
);


interface Department {
  id: number;
  name: string;
}


const JobDescriptionUpload = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [skills, setSkills] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('/api/auth/fetchingdepartmentname');
        if (!response.ok) throw new Error('Failed to fetch departments');
        const data = await response.json();
        setDepartments(data);
      } catch (err) {
        console.error('Error fetching departments:', err);
        toast.error('Failed to load departments.');
      }
    };

    fetchDepartments();
  }, []);

  const handleUpload = async () => {
    if (!jobTitle || !jobDescription || !salaryRange || !skills || !departmentId) {
      setError('Please fill in all fields.');
      toast.error('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('jobTitle', jobTitle);
    formData.append('jobDescription', jobDescription);
    formData.append('salaryRange', salaryRange);
    formData.append('skills', skills);
    formData.append('departmentId', departmentId);

    try {
      const response = await fetch('/api/auth/jobdescription', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload job description.');

      toast.success('Job description uploaded successfully!');
      setError(null);
      setJobTitle('');
      setJobDescription('');
      setSalaryRange('');
      setSkills('');
      setDepartmentId('');
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
        toast.error(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-6"
    >
      <div className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          />

          <select
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id.toString()}>
                {`${dept.id} - ${dept.name}`}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 min-h-[120px]"
          />

          <input
            type="text"
            placeholder="Salary Range"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          />

          <input
            type="text"
            placeholder="Skills (comma-separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          />

          <button
            onClick={handleUpload}
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-200 
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Uploading...
              </div>
            ) : 'Upload Job Description'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const JobDescriptionView = () => {
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDescriptions = async () => {
      try {
        const response = await fetch("/api/auth/jobdescription");
        const data = await response.json();
        setJobDescriptions(data);
      } catch (error) {
        console.error("Error fetching job descriptions:", error);
        toast.error("Failed to load job descriptions");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDescriptions();
  }, []);

  const handleDeactivate = async (jobId) => {
    try {
      const response = await fetch("/api/auth/jobdescription", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId }),
      });

      if (!response.ok) throw new Error("Failed to deactivate job.");

      toast.success("Job deactivated successfully");
      setJobDescriptions(jobs => jobs.filter(job => job.job_id !== jobId));
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to deactivate job");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto p-6"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {jobDescriptions.map((job) => (
            <motion.div
              key={job.job_id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{job.job_title}</h3>
                <p className="text-sm text-gray-600 mb-4">{job.job_description}</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Department:</span> {job.department_name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Salary Range:</span> {job.salary_range}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Skills:</span> {job.skills.join(", ")}
                  </p>
                </div>
                <button
                  onClick={() => handleDeactivate(job.job_id)}
                  className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Deactivate
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const JobDescription = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Toaster position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
       
        
        <div className="flex justify-center space-x-4 mb-8">
          <TabButton
            selected={activeTab === "upload"}
            onClick={() => setActiveTab("upload")}
          >
            Upload
          </TabButton>
          <TabButton
            selected={activeTab === "view"}
            onClick={() => setActiveTab("view")}
          >
            View All
          </TabButton>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "upload" ? <JobDescriptionUpload /> : <JobDescriptionView />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default JobDescription;