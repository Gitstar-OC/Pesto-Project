import { useState, useEffect } from "react";
import { Status } from "./Exports";
import { FaPlus } from "react-icons/fa6";

import useMediaQuery from "./useMediaQuery";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../components/ui/drawer";

const NewNote = ({ existingNote = {}, updateCallback, isOpen, setIsOpen }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [noteStatus, setNoteStatus] = useState("");

  useEffect(() => {
    if (existingNote) {
      setNoteTitle(existingNote.noteTitle || "");
      setNoteDescription(existingNote.noteDescription || "");
      setNoteStatus(existingNote.status || "");
    }
  }, [existingNote]);

  const updating = Object.entries(existingNote).length !== 0;

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      noteTitle,
      noteDescription,
      noteStatus,
    };

    const url = "http://127.0.0.1:5000/" + (updating ? `update_note/${existingNote.noteId}` : "create_note");
    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      updateCallback();
      setIsOpen(false); // Close the modal after update
    }
  };

  const formContent = (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Title of your note"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={noteDescription}
          onChange={(e) => setNoteDescription(e.target.value)}
          placeholder="Type Description of the note"
        />
      </div>
      <div>
        <Status value={noteStatus} onChange={(value) => setNoteStatus(value)} />
      </div>
    </div>
  );

  const formFooter = (
    <DrawerFooter className="flex justify-between">
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button type="submit">{updating ? "Update" : "Create"} Note</Button>
      </DialogClose>
    </DrawerFooter>
  );

  const isDesktop = useMediaQuery("");

  if (isDesktop) {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-8 min-h-[20rem]">
          <div className="border-2 border-black dark:border-white rounded-[25px] p-2">
            <div>
              <div className="bg-[#D9D9D9] dark:bg-[#222222] rounded-t-[20px] w-full text-center py-1 text-[20px] font-bold font-mr ">
                <FaPlus onClick={() => setIsOpen(true)} />
              </div>
            </div>
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-[900px]">
            <form onSubmit={onSubmit}>
              {formContent}
              {formFooter}
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  } else {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button className="m-2">
            <FaPlus />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <form onSubmit={onSubmit}>
            {formContent}
            {formFooter}
          </form>
        </DrawerContent>
      </Drawer>
    );
  }
};

export default NewNote;

