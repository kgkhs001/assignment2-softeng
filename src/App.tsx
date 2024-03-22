
import Title from "./title.tsx";
import './App.css'
import Intro from './intro.tsx'
import List from './list.tsx'
import Table from './table.tsx'
import Form from './form.tsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Title/> <Intro username1 = "Nick" username2 = "Krishna"/> <List /> <Table /> <Form />
    </>
  )
}

export default App
