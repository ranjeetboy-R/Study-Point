"use client";

import { Edit, Loader2, LogOut, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Popconfirm } from "antd";
import { adminStore } from "@/app/store/adminStore";
import AddStudentModal from "../clientComponents/AddStudentModal";
import { authStore } from "@/app/store/authStore";
import toast from "react-hot-toast";

const DashboardPage = () => {
  const { getAllStudent, deleteStudent, getLoading } = adminStore();
  const { logout } = authStore();
  const [liveUpdate, setLiveUpdate] = useState(false);
  const [input, setInput] = useState('');
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setselectedStudent] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7;

  useEffect(() => {
    const get = async () => {
      const res = await getAllStudent();
      if (res?.success) {
        setStudents(res.students);
      }
    }
    get();
  }, [liveUpdate]);

  const filteredUser = students?.filter((student) => {
    return (
      student.studentId?.toLowerCase().includes(input.toLowerCase().trim()) ||
      student.name?.toLowerCase().includes(input.toLowerCase().trim()) ||
      student.village?.toLowerCase().includes(input.toLowerCase().trim()) ||
      student.state?.toLowerCase().includes(input.toLowerCase().trim()) ||
      student.district?.toLowerCase().includes(input.toLowerCase().trim()) ||
      student.phone?.toLowerCase().includes(input.toLowerCase().trim()) ||
      student.monthlyFee?.toLowerCase().includes(input.toLowerCase().trim())
    )
  })

  const confirmDelete = async (id) => {
    if (id) {
      const res = await deleteStudent(id);
      if (res?.success) {
        setLiveUpdate(!liveUpdate);
      }
    }
  }

  const totalPages = Math.ceil(students.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const currentStudent = filteredUser.slice(start, start + itemsPerPage);

  const logoutProfile = async () => {
    const res = await logout();
    if (res?.success) {
      toast.success('Logout successful')
      window.location.reload();
    }
  }

  return (
    <div className="flex flex-col h-screen md:px-16 px-5 py-5">

      <div className="flex items-center md:flex-row flex-col gap-3 md:justify-between">
        <h1 className="w-full font-medium">All Students</h1>

        <div className="flex items-center gap-2 md:gap-5 w-full">
          <input type="search" name="search" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Search student..." className="border border-zinc-300 rounded-lg bg-zinc-50 dark:bg-slate-900 dark:border-slate-400 md:w-md w-full p-2.5 transition-all
          " />

          <button onClick={() => setOpenModal(true)} className="flex items-center gap-1 px-3 py-2.5 dark:bg-white/80 dark:hover:bg-white dark:text-black font-semibold hover:bg-black bg-black/80 text-white rounded-lg">
            <Plus size={20} /> <p className="md:block hidden">New</p>
          </button>

          <Popconfirm
            onConfirm={logoutProfile}
            description="Do you want to logout"
            title="Logout Profile"
            okButtonProps={{ size: 'medium' }}
            cancelButtonProps={{ size: 'medium' }}
          >
            <button className="flex items-center gap-1 px-3 py-2.5 border border-slate-300 hover:border-slate-600 font-semibold rounded-lg">
              <LogOut size={20}/> <p className="md:block hidden">Logout</p>
            </button>
          </Popconfirm>

        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-auto scrollbar-thumb-black/40 dark:scrollbar-thumb-slate-700">
        <table className="min-w-225 md:min-w-300 w-full overflow-hidden mt-5">
          <thead className="bg-black/70 dark:bg-cyan-500 dark:text-black text-zinc-300">
            <tr className="text-left whitespace-nowrap">
              <th className="md:w-60 pl-3 py-3">S/N.</th>
              <th className="md:w-60 pl-3 py-3">Student Id</th>
              <th className="md:w-100 pl-3 py-3">Name</th>
              <th className="md:w-60 pl-3 py-3">Phone</th>
              <th className="md:w-60 pl-3 py-3">Village</th>
              <th className="md:w-60 pl-3 py-3">State</th>
              <th className="md:w-60 pl-3 py-3">District</th>
              <th className="md:w-60 pl-3 py-3">Monthly Fee</th>
              <th className="md:w-60 pl-3 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentStudent.length > 0 ? (
              currentStudent.map((student, index) => (
                <tr
                  key={student._id}
                  className="border-b border-slate-200 dark:border-slate-800 dark:even:bg-slate-900 even:bg-zinc-100"
                >
                  <td className="pl-3 py-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="pl-3 py-3">{student.studentId}</td>
                  <td className="pl-3 py-3 capitalize">{student.name}</td>
                  <td className="pl-3 py-3">{student.phone}</td>
                  <td className="pl-3 py-3 capitalize">{student.village}</td>
                  <td className="pl-3 py-3 capitalize">{student.state}</td>
                  <td className="pl-3 py-3 capitalize">{student.district}</td>
                  <td className="pl-3 py-3 text-center">{student.monthlyFee}</td>
                  <td className="pl-3 py-3 flex items-center gap-3">
                    <button onClick={() => { setselectedStudent(student); setOpenModal(true) }} className="text-black/80 dark:text-white/80 p-1.5">
                      <Edit className="size-5" />
                    </button>

                    <Popconfirm okButtonProps={{ size: 'medium' }} cancelButtonProps={{ size: 'medium' }} onConfirm={() => confirmDelete(student._id)} title="Delete Student" description="Do you want to delete this sudent">
                      <button className="text-black/80 dark:text-white/80 p-1.5">
                        <Trash2 className="size-5" />
                      </button>
                    </Popconfirm>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="md:text-center md:px-0 px-5 py-5 text-zinc-400">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">

        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((p) => Math.max(p - 1, 1))
          }
          className="px-3 mr-2 disabled:cursor-not-allowed disabled:opacity-70 font-mono py-1 bg-zinc-800 text-white rounded hover:bg-zinc-700 cursor-pointer"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`cursor-pointer font-bold px-3 py-1 rounded ${currentPage === i + 1
              ? "border-2 border-slate-500 dark:border-slate-300 bg-black/10 dark:bg-white/20 scale-110"
              : "border-2 border-slate-300 dark:border-slate-700"
              }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={totalPages === currentPage}
          onClick={() =>
            setCurrentPage((p) =>
              Math.min(p + 1, totalPages)
            )
          }
          className="px-3 ml-2 disabled:cursor-not-allowed disabled:opacity-70 font-mono py-1 bg-zinc-800 text-white rounded hover:bg-zinc-700 cursor-pointer"
        >
          Next
        </button>

      </div>

      {/* Add Student Modal */}
      <AddStudentModal setOpenModal={setOpenModal} openModal={openModal} setLiveUpdate={setLiveUpdate} liveUpdate={liveUpdate} selectedStudent={selectedStudent} setselectedStudent={setselectedStudent} />

      {
        getLoading &&
        <div className="flex flex-col gap-2 items-center justify-center fixed top-0 left-0 w-full h-screen bg-black/50">
          <Loader2 className="animate-spin" />
          <p>Getting Data...</p>
        </div>
      }
    </div>
  );
};

export default DashboardPage;