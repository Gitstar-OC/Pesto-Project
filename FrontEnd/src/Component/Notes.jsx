import { useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import NewNote from "./NewNote"
import {Filters, NoteList } from "./Exports"

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentNote, setCurrentNote] = useState({})

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async ()  => {
    const response = await fetch("http://127.0.0.1:5000/notes")
    const data = await response.json()
    setNotes(data.notes)
    console.log(data.notes)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentNote({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const openEditModal = (note) => {
    if (isModalOpen) return 
    setCurrentNote(note)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchNotes()
  }


  return (
    <>
      <div className="pb-10">
        <ScrollArea className="border-black dark:border-white border-2 rounded-[20px]  ml-[5vw] mr-[5vw] h-[80vh] bg-white dark:bg-black">
          <div>
            <Filters />
          </div>
          <div className="flex flex-wrap justify-start">
            <NewNote />
            <NoteList notes={notes} updateNote={openEditModal} updateCallback={onUpdate}/>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}

export default Notes