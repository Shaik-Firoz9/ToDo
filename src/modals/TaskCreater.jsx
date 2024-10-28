import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TaskCreator = ({ modal, toggle, save }) => {
    const [taskname, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    };

    const saveTask = () => {
        let taskObj = {
            Name: taskname,
            Description: description
        };
        save(taskObj);
        setDescription(""); // Clear the description after saving
        setTaskName("");    // Clear the task name after saving
        toggle();           // Close the modal after saving
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Your Todo</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label htmlFor="" className="label">Task Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={taskname}
                            onChange={handleChange}
                            name="taskName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="label">Description:</label>
                        <textarea
                            className="form-control"
                            rows="5"
                            value={description}
                            onChange={handleChange}
                            name="description"
                        ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button className="createBtn" onClick={saveTask}>Create</Button>{' '}
                <Button className="cancelBtn" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default TaskCreator;
