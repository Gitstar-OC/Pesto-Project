import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NewNote from "./NewNote";
import { Filters, NoteList } from "./Exports";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await fetch("http://127.0.0.1:5000/notes");
    const data = await response.json();
    setNotes(data.notes);
    console.log(data.notes);
  };

  const onUpdate = () => {
    setIsModalOpen(false);
    setCurrentNote({});
    fetchNotes();
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setIsModalOpen(true);
  };

  const deleteNote = async (noteId) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`http://127.0.0.1:5000/delete_note/${noteId}`, options);
      if (response.status === 200) {
        fetchNotes();
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="pb-10">
      <ScrollArea className="border-black dark:border-white border-2 rounded-[20px] ml-[5vw] mr-[5vw] h-[80vh] bg-white dark:bg-black">
        <div className="flex justify-between p-4">
          <Filters />
          <NewNote
            existingNote={currentNote}
            updateCallback={onUpdate}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            className="w-40"
          />
        </div>
        <div className="mt-4 p-4">
          <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Notes;
