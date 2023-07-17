import { useStore } from "@nanostores/react";
import { isNotesOpen } from "../stores/notesStore";

export default function CartButton() {
  const $isNotesOpen = useStore(isNotesOpen);

  console.log($isNotesOpen);

  return (
    <button onClick={() => isNotesOpen.set(!$isNotesOpen)}>
      {$isNotesOpen ? "Close Notes" : "Open Notes"}
    </button>
  );
}
