import Link from "next/link";

const notes = [
  {
    name: "School Notes",
    id: 1,
  },
  {
    name: "Work Notes",
    id: 2,
  },
];

export default function Notes() {
  return (
    <ul className="grid grid-cols-5 gap-6">
      {notes.map((note, index) => (
        <Link key={index + 1} href={`/dashboard/${note.id}`}>
          <h1
            key={index + 1}
            className="border border-rose-500 hover:bg-rose-500 hover:text-white text-rose-500 px-1 py-1 text-center rounded-md cursor-pointer font-semibold text-lg"
          >
            {note.name}
          </h1>
        </Link>
      ))}
    </ul>
  );
}
