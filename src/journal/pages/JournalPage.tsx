import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"
import { FloatingActionButton } from "../components"

export const JournalPage = () => {
  return (
    <JournalLayout>
	    <NothingSelectedView/>
      <FloatingActionButton />
    </JournalLayout>
  )
}