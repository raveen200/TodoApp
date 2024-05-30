import {
  Button,
  Card,
  Label,
  Modal,
  Radio,
  TextInput,
  Textarea,
} from "flowbite-react";
import { getTaskById, updateTask ,  } from "./service/taskService";

import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function TaskEditModal({ isOpenEditModal, setIsOpenEditModal, selectedTask }) {
  const [taskById, setTaskById] = useState(null);
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    data.isCompleted = data.isCompleted === "true";
    updateTask(selectedTask, data);
    setIsOpenEditModal(false);
   
  };

  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTaskById(selectedTask);
      setTaskById(task);
    };

    fetchTask();
  }, [selectedTask]);

  return (
    <Modal show={isOpenEditModal} onClose={() => setIsOpenEditModal(false)}>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Title" />
            </div>
            <TextInput
              id="Title"
              defaultValue={taskById?.title}
              {...register("Title")}
              type="text"
              sizing="md"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="description" />
            </div>
            <Textarea
              id="description"
              defaultValue={taskById?.description}
              {...register("description")}
              type="text"
              sizing="md"
            />
          </div>
          <div className="flex mt-4 gap-8">
            <div className="flex items-center gap-2">
              <Radio
                id="united-state"
                name="isCompleted"
                {...register("isCompleted")}
                value="false"
                defaultChecked={taskById?.isCompleted === false}
              />
              <Label htmlFor="united-state">To Do</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="germany"
                name="isCompleted"
                {...register("isCompleted")}
                value="true"
                defaultChecked={taskById?.isCompleted === true}
              />
              <Label htmlFor="germany">Done</Label>
            </div>
          </div>
          <div className="flex mt-4 gap-4">
            <Button type="submit">Update</Button>
            <Button onClick={() => setIsOpenEditModal(false)}>Cancel</Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
}

TaskEditModal.propTypes = {
  isOpenEditModal: PropTypes.bool,
  setIsOpenEditModal: PropTypes.func,
  selectedTask: PropTypes.object,
};

export default TaskEditModal;
