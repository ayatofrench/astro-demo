import { useStore } from "@nanostores/react";
import { isNotesOpen } from "../stores/notesStore";

export default function NotesFlyout() {
  const $isNotesOpen = useStore(isNotesOpen);

  return $isNotesOpen ? <aside>...</aside> : null;
}
