import React, {useRef, useState, useEffect} from 'react'

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false)
  const [localStorage, setlocalStorage] = useState(null)
  const [showSuccessMessage, setshowSuccessMessage] = useState(false)

  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const storeDataRef = useRef();

  const handleCommentSubmission = () => {
    
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Comment
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentRef} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus: ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comment'
          name='Comment'/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          type='text'
          ref={nameRef}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus: ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'/>
          <input 
          type='email'
          ref={emailRef}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus: ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'/>
      </div>
      {error && 
        <p className='text-xs text-red-500'>
          All fields are required.
        </p>
      }
      <div className='mt-8'>
        <button type='button' onClick={handleCommentSubmission}>
        </button>
      </div>
    </div>
  )
}

export default CommentsForm