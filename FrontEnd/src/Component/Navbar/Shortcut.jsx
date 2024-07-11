"use client"
import { useEffect, useState } from "react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


export default function Shortcut()  {
  const [open, setOpen] = useState(false)
 
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
 
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p onClick={setOpen} className="text-sm text-muted-foreground bg-[#D9D9D9] dark:bg-[#222222] rounded-lg ml-1  cursor-pointer">
        <span className="ml-2 font-ml ">
        Shortcut{" "}
        </span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded  px-1.5 font-ml text-[24px] font-medium text-gray-900 dark:text-gray-300 opacity-100 mt-[6px] mb-1">
          <span className="text-xs ml-4">⌘K</span>
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" >
          <CommandItem>
              <span>New Task</span>
              <CommandShortcut>N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Complete Task </span>
              <CommandShortcut>C</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Edit Task </span>
              <CommandShortcut>E</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span> Delete Task</span>
              <CommandShortcut>Del</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span> See Code </span>
              <CommandShortcut>V</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Extra">
            <CommandItem>
              <span>Change Avatar</span>
              <CommandShortcut>A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Change Theme</span>
              <CommandShortcut>T</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Contact</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Others">
          <CommandItem>
              <span>Shortcut</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem> <CommandItem>
              <span>Close</span>
              <CommandShortcut>Esc</CommandShortcut>
            </CommandItem>
            </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
