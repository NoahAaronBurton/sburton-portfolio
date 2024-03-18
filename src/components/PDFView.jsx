import { Document, Page } from 'react-pdf';
import { useState } from 'react';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export default function PDFView ({file})  {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setIsDocumentLoaded(true);
    }
  
    function goToNextPage() {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  
    function goToPreviousPage() {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    }
    const buttonStyle = 'border border-tertiary text-black hover:bg-tertiary hover:text-white px-4 py-2 transition duration-200 ease-in-out'
    return (
      <div className='flex flex-col items-center'>
        <div className='w-[600px]'>
          <div className='flex justify-between items-center'>
            <button className={buttonStyle} onClick={goToPreviousPage} disabled={pageNumber <= 1}>Previous</button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button className={buttonStyle} onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button>
          </div>
          <div className='flex justify-center items-center min-h-screen'>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              {isDocumentLoaded && <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />}
            </Document>
          </div>
        </div>
      </div>
    );
  }

 