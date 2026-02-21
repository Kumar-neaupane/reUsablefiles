import React from "react";

const CreateProjectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl animate-scaleIn">
          {/* Header */}
          <h2 className="text-xl font-semibold mb-4">Create New Project</h2>

          {/* Form */}
          <div className="space-y-4">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Project Name
              </label>
              <input
                type="text"
                placeholder="Enter project name"
                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Description */}
           

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter project description"
                rows={3}
                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
            >
              Cancel
            </button>
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
              Create Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProjectModal;

// import { useState } from "react";
// import CreateProjectModal from "./CreateProjectModal";

// const Projects = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => setOpen(true)}
//         className="rounded-md bg-indigo-600 px-4 py-2 text-white"
//       >
//         + New Project
//       </button>

//       <CreateProjectModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//       />
//     </div>
//   );
// };

// export default Projects;
