import { render } from 'react-dom';
import './App.css'
import { useState } from 'react';

//todo: install https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file
// for displaying pdfs

const IntroPage = () => {
  return (
    <p>INTRO ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  )
}
const Academics = () => {
  return (
    <p>ACADEMICS ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  )
}
const WrittenWork = () => {
  return (
    <p>WRITEEN  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  )
}
const Resume = () => {
  return (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  )
}
const SeniorPlans = () => {
  return (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  )
}


const sections = [
  {
    title: 'Introduction Page',
    component: <IntroPage />
  },
  {
    title: 'Academics',
    component: <Academics />
  },
  {
    title: 'Written Work',
    component: <WrittenWork />
  },
  {
    title: 'On Set Work/ Resume',
    component: <Resume />
  },
  {
    title: 'Senior Project Plans',
    component: <SeniorPlans />
  }
]

function App() {
  const [activeSection, setActiveSection] = useState(0); // intro is the default

  const activeComponent = sections[activeSection].component;

  function renderMenuItems() {
    return sections.map((section, index) => {
      return (
        <button
          key={index}
          onClick={() => setActiveSection(index)}
          className={`p-2 align-start ${activeSection === index ? 'text-xl text-gray-900'  : ' text-gray-500'}`}
          >
          {section.title}
          </button>
      )
    })
  }


  

  return (
    <>
     {renderMenuItems()}
      {activeComponent}
    </>
  )
}

export default App