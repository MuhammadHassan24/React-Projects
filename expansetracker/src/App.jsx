import ExpanseTracker from "./components/ExpanseTracker"
import ContextExpanseTracker from "./components/expnasetrackercontext/ContextExpanseTracker"
import Tracker from "./components/reduxexpansetracker/Tracker"

function App() {

  return (
    <>
      <div className="">
        <ExpanseTracker />
        <ContextExpanseTracker />
        <Tracker />
      </div>
    </>
  )
}

export default App
