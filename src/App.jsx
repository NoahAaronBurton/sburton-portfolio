import { render } from 'react-dom';
import './App.css'
import { useState } from 'react';
import PDFView from './components/PDFView';
import pdf from '/written-works/col-one.pdf'
import wolverine from '/academics/wolverine-track.pdf';
import TextArea from './components/TextArea';
//todo: install https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file
// for displaying pdfs

const IntroPage = () => {
  return (
    <TextArea heading="Hello!" subheading="My name is Sawyer Burton..." >
      <p>... and I’m thrilled to be in consideration for the upper division Digital Cinema Production classes at UVU.</p>
      <p>This semester, thanks to the pilot DGM 250R program, I had the opportunity to be selected as one of five writers in the program to form a writers’ room tasked with creating a feature length screenplay for development with FanX Studios under the mentorship of producers Brent Baum and Jon Schwartz, revered screenwriter Ed Neumeier, and UVU screenwriting professor Alex Nibley. This is a dream come true for an aspiring writer, and a great opportunity to develop firsthand industry knowledge beyond what’s possible in a classroom setting.</p>
      <p>Moving forward in the program, I hope to augment my education by surrounding myself with like-minded individuals and learning all I can from them. In a space with so many talented peers, learning by osmosis is almost inevitable. With a 3.87 overall GPA, I’m also proud to say that my grades reflect the time and effort I’ve put into succeeding in the program thus far.  Already, I feel my time at UVU has enriched my screenwriting vocabulary and I see no reason why this trend shouldn’t continue in the semesters to come.</p>
      <p>Beyond graduation, I plan to take what I’ve learned and pursue a career in the industry with enduring fervor. It’s a childhood dream of mine and the prospect of taking part in creating films is still as exciting to me today as it was back then. </p>
    </TextArea>
  )
}
const Academics = () => {
  return (
    <>
    <TextArea heading="Academics" subheading="Utah Valley University Wolverine Track">
    </TextArea>
    <div className='justify-center'>
      <div >
        <PDFView file={wolverine} />
      </div>

    </div>
    </>
  )
}
const WrittenWork = () => {
  return (
    <PDFView file={pdf} />
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
    title: 'Introduction',
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
    title: 'Resume',
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
          className={`text-nowrap ${activeSection === index ? 'text-white bg-transparent'  : ' text-black'}`}
          >
          {section.title}
          </button>
      )
    })
  }


  

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-gradient-to-b from-secondary to-transparent w-full h-full flex justify-between px-5 py-7 mb-10 drop-shadow-2xl'>
        <h1 className='text-4xl font-semibold'>Sawyer Burton</h1>
        <div className='flex space-x-4'>
          {renderMenuItems()}
        </div>
      </header>
      <div className='w-full mx-auto px-[100px]'>
        {activeComponent}
      </div>  
    </div>
  )
}

export default App