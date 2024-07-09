import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Faq = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center pt-[800px] pb-[600px] md:pt-[180px]'>
      
        <div className='-translate-y-[80px]'>
            <h1 className='text-4xl font-bold text-center text-zinc-200 pt-[500px]'>FAQs</h1>
            <div className='w-20 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-20 h-2 bg-pink-600 rounded-full -rotate-2'></div>
        </div>
        <div className='border-2 border-white p-1 font-sans'>
            <div className='flex flex-col gap-1 sm:max-w-[60vw]'>
            <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Q: Can I participate in more than one competition?
        </AccordionSummary>
        <AccordionDetails>
          A: Yes, one can participate in multiple competitions. However, they must not be at the same time.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Q:Where is the venue for the TechFest?
        </AccordionSummary>
        <AccordionDetails>
          A: The competitions mentioned under TechFest 1.0 will be held at Shaheed Sukhdev College of Business Studies.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Q: Will there be internet access available at the venue? 
        </AccordionSummary>
        <AccordionDetails>
          A:Yes, while all participants will have access to Wi-Fi, it is recommended that they also arrange their own internet connection in case of any issues.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Q: What is the last date for registration?? 
        </AccordionSummary>
        <AccordionDetails>
          A: The last date of registration for all the competitions is 25th August 2024.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Q: What must be the team size for the competitions? 
        </AccordionSummary>
        <AccordionDetails>
          A: The required team size for different events will be different as mentioned in the “Events” section.
        </AccordionDetails>
      </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Faq