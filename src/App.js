import {useState, useEffect} from "react"

import { Navbar } from './components/Header/Navbar';
import {Text} from './components/TopText/Text'
import {HomePage} from "./Pages/HomePage/HomePage"
import Container from './components/Container';

const App = () => {
  const [templates, setTemplates] = useState([])
  const [searchTemplate, setSearchTemplate] = useState("")

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    let url =
      'https://fierce-meadow-73752.herokuapp.com/https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates';
      const res = await fetch(url)
      const data = await res.json()
      setTemplates(data)
      console.log(data);
  }

  const searchTemplates = (e) => {
    setSearchTemplate(e.target.value);
    console.log(e.target.value);
  };

  const filteredTemplates = templates.slice(0, 15).filter((template) => template.name.toLowerCase().includes(searchTemplate.toLowerCase()) || template.description.toLowerCase().includes(searchTemplate.toLowerCase())
  )
  console.log(filteredTemplates);

  return (
    <>
      <Container>
        <Navbar value={searchTemplate} handleChange={searchTemplates}  />
        <p className="tada">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </p>
        <Text />
        <HomePage filteredTemplates={filteredTemplates}/>
      </Container>
    </>
  );
}

export default App;
