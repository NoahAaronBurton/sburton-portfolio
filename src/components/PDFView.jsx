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
  
    return (
      <div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {isDocumentLoaded && <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />}
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div>
          <button className='' onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button>
          <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>Previous</button>
        </div>
      </div>
    );
  }

 