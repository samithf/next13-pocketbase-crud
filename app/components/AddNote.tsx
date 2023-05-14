"use client";
import { useState } from "react";
import Modal from "./Modal";

export default function AddNote() {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setModalVisibility(!modalVisibility)}
      >
        Add note
      </button>
      <Modal id="add-note-modal" isOpen={modalVisibility} />
    </>
  );
}
