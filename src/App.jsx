import { render } from 'react-dom';
import './App.css'
import { useState } from 'react';
import PDFView from './components/PDFView';
import colOne from '/written-works/col-one.pdf'
import roughTreatment from '/written-works/rough-treatment.pdf';
import shortPitch from '/written-works/short-pitch.pdf';
import theString from '/written-works/the-string.pdf';
import wolverine from '/academics/wolverine-track.pdf';
import TextArea from './components/TextArea';
//todo: install https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file
// for displaying pdfs
import Card from './components/Card';

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
  const resetPageNumber = (setPageNumber) => {
    setPageNumber(1);
  }
  return (
    <>
    <TextArea heading="Academics" subheading="Utah Valley University Wolverine Track">
    </TextArea>
    <div className='justify-center'>
      <div >
        <PDFView file={wolverine} resetPageNumber={resetPageNumber} />
      </div>

    </div>
    </>
  )
}
const WrittenWork = () => {
  const works = {
    'Children of Light- Act 1 Treatment': roughTreatment,
    'Crawling Mary- Short Pitch': shortPitch,
    'The String': theString,
    'Children of Light- One Pager': colOne
  }

  const [selectedWork, setSelectedWork] = useState(works['Short Pitch']);
  const [selectedTitle, setSelectedTitle] = useState('Short Pitch');

  const resetPageNumber = (setPageNumber) => {
    setPageNumber(1);
  }

  const selectWork = (title, work) => {
    setSelectedWork(work);
    setSelectedTitle(title);
  }

  const buttonStyle = 'border border-tertiary text-black px-4 py-2 transition duration-200 ease-in-out'
  const buttonSelectedStyle = 'border border-tertiary text-white bg-tertiary px-4 py-2 transition duration-200 ease-in-out'
  return (
    <div className='flex flex-col'>
      <TextArea heading="Written Work" subheading="Select a Project to view PDF" />
      <div className='flex space-x-4'>
        <div className='flex flex-col space-y-4 w-1/4'>
          {Object.keys(works).map((work, index) => (
            <button
              key={index}
              onClick={() => selectWork(work, works[work])}
              className={work === selectedTitle ? buttonSelectedStyle : buttonStyle}
            >
              {work}
            </button>
          ))}
        </div>  
        <div className='w-3/4'>
          <h2 className='text-2xl mb-4 text-center font-bold'>{selectedTitle}</h2>
          <PDFView file={selectedWork} resetPageNumber={resetPageNumber} />
        </div>
      </div>
    </ div>
  )
}
const Resume = () => {
  return (
    <>
    <TextArea heading="On Set Work" subheading="Projects" >
    </ TextArea> 
    <div className="grid grid-cols-3 gap-4">
      <Card title="The String" role="Writer/Director" />
      <Card title="The Stairs" subtitle="directed by Lily Huber" role="1st Assistant Director" />
      <Card title="Student Film" subtitle="directed by Brendon Tolley" role="1st Assistant Director" />
      <Card title="Call Your Mother" subtitle="directed by Annika Halversen" role="1st Assistant Director" />
      <Card title="Monsters" subtitle="directed by Brady Dolan" role="Gaffer" />
      <Card title="Own My Heart" subtitle="directed by Charlie Alexander" role="Grip/Props" />
      <Card title="Wednesday at 6" subtitle="directed by Angel " role="Grip/Props" />
    </div> 
    </>
  )
}
const SeniorPlans = () => {
  return (
    <>
    <TextArea heading="Senior Project Plans" subheading="I plan to have a feature length script finished in time for my Senior Project." >
      <p>I’ve already begun developing the script this semester in order to have a polished version I can be proud of ready in time for graduation. PDFs of the synopsis and in-progress treatment are available under the Written Work tab of this portfolio. The working title for this project is Children of Light. Though it’s a fictional story, it draws inspiration from the complicated history of various religious sects and messianic figures in the Western U.S. This script will be an intense character drama/thriller hybrid layered with themes of faith, guilt, and power.</p>
      <h3 className='text-xl font-bold'>LOGLINE:</h3>
      <p>When the isolated religious sect he grew up in is radicalized into shocking violence, a guilt-ridden young man must team up with an estranged childhood friend and his vengeful sister to kill the self-appointed prophet of God before he can enact his plan to cause mass hysteria amidst the Y2k crisis. </p>
    </TextArea>
    </>
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
    title: 'On Set Work',
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