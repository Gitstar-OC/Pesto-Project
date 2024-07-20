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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const NoteList = ({ notes, editNote, deleteNote }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-8 lg:max-w-[70vw]">
      {notes.map((note) => (
        <div
          key={note.id}
          className="border-2 border-black dark:border-white rounded-[25px] p-2"
        >
          <div>
            <ScrollArea className="bg-[#D9D9D9] dark:bg-[#222222] rounded-t-[20px]">
            <div className=" text-center py-1 text-[16px] font-semibold font-mr max-h-[50px] min-h-[50px]">
              {note.noteTitle}
            </div>
            </ScrollArea>
          </div>

          <ScrollArea className="bg-[#b1b0b0] font-ml dark:bg-[#414040] mt-1">
            <div className="min-h-[120px] max-h-[120px] ">
              <p>{note.noteDescription}</p>
            </div>
          </ScrollArea>
          <div className="mt-1 gap-4 flex bg-[#D9D9D9] dark:bg-[#222222] rounded-b-[20px]">
            <div className="ml-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <TbSettings className="w-[30px] inline rounded-bl-lg" />
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
            </div>
            <Status
              className="mt-[180px]"
              value={note.noteStatus}
              onChange={() => {}}
            />
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
      noteStatus: PropTypes.string.isRequired,
    })
  ).isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteList;