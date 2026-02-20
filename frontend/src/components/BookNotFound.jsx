import React from 'react';
import { NotebookIcon } from 'lucide-react';
import {Link} from 'react-router';
const BookNotFound = () => {
  return (
    
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>
      <div className='bg-primary/10 rounded-full p-8'><NotebookIcon className='size-10 text-primary' /></div>
      <h3 className='text-2x1 font-bold'>No books yet</h3>
      <p className='text-base-content/70'>Ready to add books?Add first book to the BookStore.</p>
      <Link to="/create" className='btn btn-primary'>
      Add First Book to the Bookstore</Link>
    </div>
    
    
  )
}

export default BookNotFound
