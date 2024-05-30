import { Modal } from "flowbite-react";

import { Card } from "flowbite-react";
import { PiIdentificationCardBold } from "react-icons/pi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import PropTypes from "prop-types";

function TaskViewModal({ isOpenViewModal, setIsOpenViewModal }) {
  return (
    <Modal show={isOpenViewModal} onClose={() => setIsOpenViewModal(false)}>
      <Card>
        <div className="items-center ga ">
          <div className="flex items-center text-gray-600 dark:text-gray-400 p-4">
            <PiIdentificationCardBold className="mr-2" />
            <span>Title</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400  p-4">
            <PiIdentificationCardBold className="mr-2" />
            <span>description</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400  p-4">
            <PiIdentificationCardBold className="mr-2" />
            <span>isCompleted</span>
          </div>
        </div>
        <IoArrowBackCircleSharp
          size={32}
          onClick={() => setIsOpenViewModal(false)}
        />
      </Card>
    </Modal>
  );
}

TaskViewModal.propTypes = {
  isOpenViewModal: PropTypes.bool,
  setIsOpenViewModal: PropTypes.func,
};

export default TaskViewModal;
