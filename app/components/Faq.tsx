import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Faq = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center pt-[500px] pb-[600px] md:pt-[100px]'>
      
        <div className='-translate-y-[80px]'>
            <h1 className='text-4xl font-bold text-center text-zinc-200 pt-[500px]'>FAQs</h1>
            <div className='w-20 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-20 h-2 bg-pink-600 rounded-full -rotate-2'></div>
        </div>
        <div className='border-2 border-white p-1'>
            <div className='flex flex-col gap-1 sm:max-w-[60vw]'>
            <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Q: What is Hackathon?
        </AccordionSummary>
        <AccordionDetails>
          A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Q: Why you should participate?
        </AccordionSummary>
        <AccordionDetails>
          A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Q: What you will learn? 
        </AccordionSummary>
        <AccordionDetails>
          A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Q: What you will learn? 
        </AccordionSummary>
        <AccordionDetails>
          A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black text-white border-2 border-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Q: What you will learn? 
        </AccordionSummary>
        <AccordionDetails>
          A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Faq