import Link from "next/link";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    { cache: "no-store" }
  );
  const notes = await res.json();
  return notes.items;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h2>Notes</h2>
      <Link className="btn" href="/notes/create">
        Add note
      </Link>
      <div className="flex flex-wrap gap-4">
        {notes.map((note: any) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className=" p-4 rounded-lg shadow-lg bg-yellow-100">
        <h4>{title}</h4>
        <h6>{content}</h6>
        <p>{new Date(created).toLocaleString()}</p>
      </div>
    </Link>
  );
}
