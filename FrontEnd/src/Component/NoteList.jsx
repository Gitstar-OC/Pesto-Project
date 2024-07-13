import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbSettings } from "react-icons/tb";
import { Status } from "./Exports";

const NoteList = ({ notes, editNote, deleteNote }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-8 min-h-[20rem]">
      {notes.map((note) => (
        <div key={note.id} className="border-2 border-black dark:border-white rounded-[25px] p-2">
          <div>
            <div className="bg-[#D9D9D9] dark:bg-[#222222] rounded-t-[20px] w-full text-center py-1 text-[20px] font-bold font-mr ">
              {note.noteTitle}
              <span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <TbSettings className="w-[30px] inline" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60 font-ml">
                    <DropdownMenuLabel>Note Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => editNote(note)}>
                        Edit
                        <DropdownMenuShortcut>E</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => deleteNote(note.noteId)}>
                        Delete
                        <DropdownMenuShortcut>Del</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </span>
            </div>
          </div>
          <div className="p-4 bg-[#b1b0b0] dark:bg-[#414040] mt-2 rounded-b-[20px] font-ml">
            <p>{note.noteDescription}</p>
            <Status value={note.status} onChange={() => {}} disabled />
          </div>
        </div>
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      noteTitle: PropTypes.string.isRequired,
      noteDescription: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteList;
