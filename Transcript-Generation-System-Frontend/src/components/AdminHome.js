import * as React from 'react'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn'
import Appbar from './Utils/Appbar'
import './AdminHome.css'
import * as API from '../API/FormRequest'
import * as XLSX from 'xlsx'
import popUp from '../Images/popUp.png'
import ShowTranscript from './ShowTranscript'

function AdminHome() {
  const [applicants, setApplicants] = React.useState([])
  const [fileUpload, setFileupload] = React.useState()
  const [jsonData, setJsonData] = React.useState([])
  const [clickedId, setClickedId] = React.useState(null)
  const [geneTranscript, setGeneTranscript] = React.useState(false)
  const [verify, setVerify] = React.useState('pending')
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.readAsBinaryString(file)
  }

  const generateTranscript = (_id) => {
    setClickedId(_id)
    setGeneTranscript(true)
  }
  // Next button
  const handleNext = () => {}
  const fetch = async () => {
    const res = await API.getAllApplicants()
    console.log(res.data.applicants)
    setApplicants(res.data.applicants)
  }

  React.useEffect(() => {
    fetch()
  }, [])
  React.useEffect(() => {
    console.log(jsonData)
  })

  var count = 0
  if (geneTranscript) {
    return (
      <>
        <ShowTranscript
          _id={clickedId}
          setVerify={setVerify}
          setGeneTranscript={setGeneTranscript}
        />
      </>
    )
  } else {
    if (applicants.length === 0) {
      return (
        <>
          <Appbar />
          <div className='mainDiv'>
            <div className='home'>
              <div className='home-header'>
                <div>
                  <ImportContactsIcon className='open' />
                  {applicants.length} Open
                </div>
                <div>
                  <DoNotDisturbOnIcon className='open' /> 3 Closed
                </div>
              </div>
              <div className='home-content-empty'>
                <div>No Request Pending</div>
                <div className='subtitle'>New request will be shown here</div>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <Appbar />
          <div className='mainDiv'>
            <div className='home'>
              <div className='home-header'>
                <div>
                  <ImportContactsIcon className='open' />
                  {applicants.length} Open
                </div>
                <div>
                  <DoNotDisturbOnIcon className='open' /> 3 Closed
                </div>
              </div>
              <div className='home-container'>
                <div className='home-content-heading'>
                  <div className='subtitle sub-one'>Sr. No. </div>
                  <div className='subtitle sub-one'>PRN </div>
                  <div className='subtitle sub-two'>Name</div>
                  <div className='subtitle sub-three'>Year of Study</div>
                  <div className='subtitle sub-three'>Verification</div>
                  <div className='subtitle sub-three'>Close</div>
                </div>
                {applicants.map((applicant) => {
                  return (
                    <div
                      className='home-content'
                      onClick={() => generateTranscript(applicant.firstName)}
                    >
                      <div className='subtitle sub-one'>{++count} </div>
                      <div className='subtitle sub-one'>{applicant.prn} </div>
                      <div className='subtitle sub-two'>
                        {applicant.firstName} {applicant.lastName}
                      </div>
                      <div className='subtitle sub-three'>{applicant.yos}</div>
                      <div className='subtitle sub-three'>
                        <i>{verify}</i>
                      </div>
                      <div className='subtitle sub-three'>
                        <button className='clearBtn'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            class='feather feather-check-circle'
                          >
                            <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                            <polyline points='22 4 12 14.01 9 11.01'></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='mainBtnConatainer'>
              <div className='buttonContainer'>
                <div className='excelBtn'>
                  <label for='file-upload' class='file-upload-label'>
                    Mastersheet1
                  </label>
                  <input
                    type='file'
                    value={fileUpload}
                    onChange={(e) => {
                      setFileupload(e.target.value)
                      handleFileUpload(e)
                    }}
                    id='file-upload'
                    class='hidden'
                  />
                </div>
                <div className='popUp'>
                  <img src={popUp} alt='' />
                </div>
              </div>
              <div className='buttonContainer'>
                <div className='excelBtn'>
                  <label for='file-upload' class='file-upload-label'>
                    Mastersheet2
                  </label>
                  <input
                    type='file'
                    value={fileUpload}
                    onChange={(e) => {
                      setFileupload(e.target.value)
                      handleFileUpload(e)
                    }}
                    id='file-upload'
                    class='hidden'
                  />
                </div>
                <div className='popUp'>
                  <img src={popUp} alt='' />
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}

export default AdminHome
