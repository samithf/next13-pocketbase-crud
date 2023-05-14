"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    // console.log({ title, content });
    setSubmitting(true);

    const record = await fetch(
      "http://127.0.0.1:8090/api/collections/notes/records",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      }
    );
    setSubmitting(false);
    router.refresh();
  };

  return (
    <>
      <h2>Create a note</h2>
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
            Create
          </button>
        </div>
      </form>
    </>
  );
}
