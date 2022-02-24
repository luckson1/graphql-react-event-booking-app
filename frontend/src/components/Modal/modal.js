import React from "react";
import './modal.css'

export const modal = (props) => {
  return (
    <div>
      <header className="modal__header">
        <h1>{props.title}</h1>
      </header>
      <section className="modal__content">{props.children}</section>
      <section className="modal__actions">
        {props.canCancel && (
          <button className="btn" onClick={props.onCancel}>
            Cancel
          </button>
        )}
        {props.canConfirm && (
          <button className="btn" onClick={props.onConfirm}>
            Confirm
          </button>
        )}
      </section>
    </div>
  );
};
