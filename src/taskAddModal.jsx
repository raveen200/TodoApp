import {
  Button,
  Card,
  Label,
  Modal,
  Radio,
  TextInput,
  Textarea,
} from "flowbite-react";
import { createTask } from "./service/taskService";

import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

function TaskAddModal({ isOpenAddModal, setIsOpenAddModal }) {
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    data.isCompleted = data.isCompleted === "true";
    createTask(data);
    setIsOpenAddModal(false);
  };

  return (
    <Modal show={isOpenAddModal} onClose={() => setIsOpenAddModal(false)}>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Title" />
            </div>
            <TextInput
              id="Title"
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
              />
              <Label htmlFor="united-state">To Do</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="germany"
                name="isCompleted"
                {...register("isCompleted")}
                value="true"
              />
              <Label htmlFor="germany">Done</Label>
            </div>
          </div>
          <div className="flex mt-4 gap-4">
            <Button type="submit">Update</Button>
            <Button onClick={() => setIsOpenAddModal(false)}>Cancel</Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
}

TaskAddModal.propTypes = {
  isOpenAddModal: PropTypes.bool,
  setIsOpenAddModal: PropTypes.func,
};

export default TaskAddModal;
