"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotePage({ params }: any) {
  const noteId = params.id;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [noteSaved, setNoteSaved] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // console.log("xxxx");
    getNote(noteId);
  }, []);

  const deleteNote = async () => {
    await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
    router.back();
  };

  const getNote = async (id: string) => {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${id}`
    );
    const note = await res.json();
    setTitle(note.title);
    setContent(note.content);
  };

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      }
    );
    const note = await res.json();

    if (note.id) {
      setSubmitting(false);
      setNoteSaved(true);
      router.refresh();
    }
  };

  return (
    <>
      <h2>Edit note</h2>
      <form onSubmit={onSubmitForm}>
        <div className="flex flex-col max-w-[500px] gap-4">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered w-full h-[300px]"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className={`btn btn-primary w-full ${submitting ? "loading" : ""}`}
            type="submit"
          >
            Save
          </button>
          <button className={`btn w-full}`} onClick={deleteNote} type="button">
            Delete
          </button>
        </div>
      </form>
      {/* <Modal id="add-note-modal" isOpen={modalVisibility} /> */}
    </>
  );
}
