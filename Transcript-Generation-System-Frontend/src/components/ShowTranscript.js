import React, { useEffect, useState } from 'react'
import './ShowTranscript.css'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import * as API from '../API/FormRequest'

const ShowTranscript = ({ _id, setVerify, setGeneTranscript }) => {
  // const [docs, setDocs] = useState([])
  console.log(_id)

  let docs = [
    {
      uri: require('../pdf/swarada.pdf'),
    },
  ]
  if (_id === 'Swarada') {
    docs = [
      {
        uri: require('../pdf/swarada.pdf'),
      },
    ]
  } else if (_id === 'Prajwal') {
    docs = [
      {
        uri: require('../pdf/prajwal.pdf'),
      },
    ]
  } else if (_id === 'Vaishnavi') {
    docs = [
      {
        uri: require('../pdf/vaishnavi.pdf'),
      },
    ]
  } else if (_id === 'Yashashwi') {
    docs = [
      {
        uri: require('../pdf/vaishnavi.pdf'),
      },
    ]
  } else {
    docs = [
      {
        uri: require('../pdf/vaishnavi.pdf'),
      },
    ]
  }

  useEffect(() => {
    fetch()
  }, [])

  console.log(docs)
  return (
    <>
      <div className='transcriptMain'>
        <h2>Transcript</h2>
        <div className='transcrpit'>
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        </div>
        <div className='cont'>
          <button
            onClick={() => {
              setVerify('Verified')
              setGeneTranscript(false)
              console.log('heyyy')
            }}
            className='submitbtn1'
          >
            Verify
          </button>
          <button
            onClick={() => {
              setVerify('Declined')
              setGeneTranscript(false)
            }}
            className='submitbtn2'
          >
            Decline
          </button>
        </div>
      </div>
    </>
  )
}

export default ShowTranscript
