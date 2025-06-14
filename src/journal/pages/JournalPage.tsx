import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { FloatingActionButton } from "../components"
import { startNewNote } from "../../store/journal"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"

export const JournalPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSaving, active } = useSelector((state: RootState) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }
  return (
    <JournalLayout>
	    {
			  ( active )
			    ? <NoteView/>
			    : <NothingSelectedView/>
		}

      <FloatingActionButton disabled={isSaving} onClick={onClickNewNote}/>
    </JournalLayout>
  )
}

