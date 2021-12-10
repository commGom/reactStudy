import React from 'react';
import './TodoListItem.css';
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox
} from 'react-icons/md';
const TodoListItem = (props) => {
    const { id, text, checked } = props.todo;
    console.log(id, text, checked);
    return (
        <div className="TodoListItem">
            <div className={checked ? 'checkbox checked' : 'checkbox'}
                onClick={() => props.onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => {
                props.onRemove(id);
            }}>
                <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
    );
};
export default TodoListItem;