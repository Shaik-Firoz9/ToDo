import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
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

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    }, [taskObj]);

    const update = (e) => {
        e.preventDefault();
        const editObj = {
            Name: taskname,
            Description: description,
        };
        updateTask(editObj);
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Your Todo</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label className="label">Task Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={taskname}
                            onChange={handleChange}
                            name="taskName"
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">Description:</label>
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
                <Button className="createBtn" onClick={update}>Update</Button>{' '}
                <Button className="cancelBtn" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;
