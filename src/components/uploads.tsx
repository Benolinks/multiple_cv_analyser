import api from "../services/axios";
// import { useNavigate } from "react-router";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoAlertCircleOutline } from "react-icons/io5";
import { Rating } from "../categories/category";
import { useRef, useState } from "react";
import axios from "axios";
const Uploads = () => {
  // const navigate = useNavigate()
  // useState
  const [files, setFiles] = useState<File[]>([]);

  const [jobDescription, setJobDescription] = useState<string>("");

  const [error, setError] = useState<string>("");

  const [success, setSuccess] = useState<string>("");

  const [loading, setloading] = useState<boolean>(false);

  // ==============================useRef=================
  const fileupload = useRef<HTMLInputElement>(null);

  // Javscript funcions

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();

    const droppedFiles = Array.from(event.dataTransfer.files);

    if (droppedFiles.length > 0) {
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleDrag = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };
  // =========================input onchange function
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
    }
  };

  // ============================ onsubmit functions =======================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation rule for files and  description
    if (files.length === 0) {
      setError("Please upload your resume ");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please Enter a Targeted Description");
      return;
    }

    //========================= if all validation passes through

    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("jobDescription", jobDescription);

    try {
      setloading(true);
      setError("");

      const response = await api.post("/uploads", formData);

      if (response.data.success === true) {
        // navigate('/recordpage')
        setSuccess(response.data.message);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "A problem was encountered");
      } else {
        setError("Something went wrong ");
      }
    } finally {
      setloading(false);
      
    }
  };

  return (
    <main className="min-h-[calc(100vh-100px)] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <form action="" onSubmit={handleSubmit} method="post">
          <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                <FaCloudDownloadAlt className="text-xl" />
              </span>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Upload Your Resume
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  PDF or DOCX (Max: 10MB)
                </p>
              </div>
            </div>

            <input
              type="file"
              multiple
              accept=".pdf,.docx"
              onChange={handleFileChange}
              ref={fileupload}
              hidden
            />
            <div
              onClick={() => {
                fileupload.current?.click();
              }}
              onDrop={handleDrop}
              onDragOver={handleDrag}
              className="mt-6 flex min-h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 px-5 text-center transition hover:border-blue-400 hover:bg-blue-50"
            >
              <span className="grid size-20 place-items-center rounded-full bg-white text-blue-600 shadow-md shadow-blue-100">
                <FaCloudDownloadAlt className="text-4xl" />
              </span>
              <h2 className="mt-5 font-bold text-slate-800">
                Drag & drop your file
              </h2>
              <p className="my-2 text-sm text-slate-400">or</p>
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-200 transition hover:bg-blue-800"
              >
                <FaRegFolderOpen />
                Choose File
              </button>
            </div>
            {/* input field section */}
            <div className="mt-5">
              <label htmlFor="text" className="font-bold">
                {" "}
                CV Required Description
              </label>
              <input
                value={jobDescription}
                onChange={(e) => {
                  setJobDescription(e.target.value);
                }}
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="Enter target description"
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="mt-5 w-full rounded-xl bg-blue-900 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:bg-blue-700"
            >
              {loading ? "Analysing cv..." : "Analyse CV"}
            </button>
            {error && (
              <div
                className=" border
         rounded-xl bg-red-600 text-center text-white my-3 mt-8
          "
              >
                <p>{error}</p>
              </div>
            )}
            {success && (
              <div
                className=" border
         rounded-xl bg-green-600 text-center text-white my-3 mt-8
          "
              >
                <p>{success}</p>
              </div>
            )}
          </section>
        </form>

        <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center ">
              <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                <MdBarChart className="text-2xl" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Analysis Results
              </h2>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1.5 text-sm font-bold text-green-700">
              Score 87%
            </span>
          </div>

          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[190px_1fr]">
            <div
              className=" mx-auto flex justify-center text-center items-center w-32 h-32 rounded-full"
              style={{
                background: "conic-gradient(green 87%, white 87%)",
              }}
            >
              <span
                className="text-center 
              text-3xl font-bold
              
               w-24 h-24  flex justify-center
                items-center
                bg-white
                rounded-full
                m-auto
               "
              >
                87%
              </span>
            </div>

            <div className="rounded-2xl bg-green-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <TiTick className="size-7 rounded-full bg-green-600 p-1 text-white" />
                <h3 className="text-xl font-bold text-green-700">Great!</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Your resume is well structured and ready for further
                optimization.
              </p>
            </div>
          </div>

          {/* positiveity of the resume  */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <h3 className="font-bold text-slate-900">Suggestions </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {Rating.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700"
                >
                  <TiTick className="mt-0.5 size-5 shrink-0 rounded-full bg-green-500 p-0.5 text-white" />
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* suggestions section  */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <h3 className="font-bold text-slate-900">What's good</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {Rating.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700"
                >
                  <IoAlertCircleOutline className="mt-0.5 size-5 shrink-0 rounded-full bg-yellow-500 p-0.5 text-white" />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div>
          welcome
          {files.map((file, index) => (
            <div key={`${file.name}-${index}`}>
              <p>{file.name}</p>
              <p>{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Uploads;
