import TaskViewModal from "./taskViewModal";
import TaskEditModal from "./taskEditModal";
import TaskAddModal from "./taskAddModal";
import { getAllTasks, deleteTask } from "./service/taskService";
import { useEffect, useState } from "react";
import { MdOutlineAdd} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskslist = await getAllTasks();
      setTasks(taskslist);
    };

    fetchTasks();
  }, []);

  const HandleEdit = (id) => {
    setIsOpenEditModal(true);
    setSelectedTask(id);
  };

  const HandleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <div className="flex justify-center mt-10 ">
      <TaskViewModal
        isOpenViewModal={isOpenViewModal}
        setIsOpenViewModal={setIsOpenViewModal}
      />
      <TaskEditModal
        isOpenEditModal={isOpenEditModal}
        setIsOpenEditModal={setIsOpenEditModal}
        selectedTask={selectedTask}
      />
      <TaskAddModal
        isOpenAddModal={isOpenAddModal}
        setIsOpenAddModal={setIsOpenAddModal}
      />
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex  justify-between">
          <h1 className="text-2xl font-bold text-left mb-6 ">Today</h1>
          <div onClick={() => setIsOpenAddModal(true)}>
            <MdOutlineAdd size={32} />
          </div>
        </div>
        <ul className="my-4 space-y-3">
          {tasks.map((task) => (
            <li key={task.id}  className="">
              
              <a
                href="#"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                
                <FaRegEdit  onClick={() => HandleEdit(task.id)} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {task?.title}
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {task?.isCompleted == true ? "Done" : "ToDo"}
                </span>
                <button
                  onClick={() => HandleDelete(task.id)}
                  className="text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600 focus:!ring-2 p-0 font-medium rounded-lg"
                  type="button"
                >
                  <span className="flex items-center rounded-md text-sm px-3 py-2">
                    <div className="flex items-center gap-x-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
