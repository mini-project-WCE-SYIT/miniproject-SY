import React from 'react'
import './template.css'
import { ReactDOM } from 'react'
import wcelogo from './wcelogo.png'
import tele from './telephone.png'
import logo from './75logo.jpeg'

const Template = () => {
  return (
    <>
      <div className='main'>
        <div className='first'>
          <img src={wcelogo} alt='mypic' className='logo' />
        </div>
        <div>
          <h2 className='head'>Walchand College of Engineering</h2>
          <p>(Government-Aided Autonomous Institute)</p>
          <p>Vishrambag, SANGLI-416415 (M.S) India</p>
          <p>Website: www.walchandsangli.ac.in</p>
        </div>
        <div className='second'>
          <img src={logo} alt='mypic' className='logo' />
        </div>
      </div>
      <div className='height'>
        <hr className='hr'></hr>
        <div className='middle'>
          <div className='page'>
            <img src={tele} alt='mypic' className='tele' />
          </div>
          <div>
            <p> Email : info@walchandsangli.ac.in</p>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className='exam'>
        <u>Examination Section</u>
      </div>
      <div className='name'>
        <p>
          Name: <b>Miss. Yashashwi Patil</b>
        </p>
        <p>
          Examination Seat Number: <b>21610020</b>
        </p>
      </div>
      <table border={2} className='table' style={{ textAlign: 'center' }}>
        <caption className='head'>
          <b>B.Tech. Information Technology</b>
        </caption>
        <tr>
          <th rowSpan={2}> Course code </th>
          <th className='title' rowSpan={2}>
            {' '}
            Course Title
          </th>
          <th colSpan={3}>Hours Per Week </th>
          <th rowSpan={2}>Credits</th>
          <th rowSpan={2}>Grade</th>
        </tr>
        <tr>
          <th> Lecture </th>
          <th> Tutorial</th>
          <th> Practical</th>
        </tr>
        <tr>
          <th colSpan={8}>First Year:(2017-2018) SEM-I</th>
        </tr>
        <tr>
          <td>3PH101</td>
          <td>Engineering Physics</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>BB</td>
        </tr>
        <tr>
          <td>3MA101</td>
          <td>Engineering Mathematics I</td>
          <td>3</td>
          <td>1</td>
          <td>--</td>
          <td>4</td>
          <td>BC</td>
        </tr>
        <tr>
          <td>3CV101</td>
          <td>Basic Civil Engineering</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>CC</td>
        </tr>
        <tr>
          <td>3ME102</td>
          <td>Basic Mechanical Engineering</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>BB</td>
        </tr>
        <tr>
          <td>3EN101</td>
          <td>Basic Electronics Engineering</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>BB</td>
        </tr>
        <tr>
          <td>3CS101</td>
          <td>Computer Programming</td>
          <td>2</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>CC</td>
        </tr>
        <tr>
          <td>3BS103</td>
          <td>Material Science</td>
          <td>2</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3PH151</td>
          <td>Engineering Physics Lab</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3CV151</td>
          <td>Civil Engineering Lab</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3CS151</td>
          <td>Computer Programming Lab</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3ME152</td>
          <td>Mechanical Workshop/Lab</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3EN151</td>
          <td>Electronics Engineering LAb</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AA</td>
        </tr>
        <tr>
          <th colSpan={8}>First Year:(2017-2018) SEM-II</th>
        </tr>
        <tr>
          <td>3CH101</td>
          <td>Engineering Chemistry</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>CC</td>
        </tr>
        <tr>
          <td>3MA102</td>
          <td>Engineering Mathematics II</td>
          <td>3</td>
          <td>1</td>
          <td>--</td>
          <td>4</td>
          <td>BB</td>
        </tr>
        <tr>
          <td>3AM101</td>
          <td>Engineering Mechanics</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>BC</td>
        </tr>
        <tr>
          <td>3ME101</td>
          <td>Engineering Graphics</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3EL101</td>
          <td>Basic Electrical Engineering</td>
          <td>3</td>
          <td>--</td>
          <td>--</td>
          <td>3</td>
          <td>BC</td>
        </tr>
        <tr>
          <td>3HS102</td>
          <td>Foreign Language</td>
          <td>2</td>
          <td>1</td>
          <td>--</td>
          <td>3</td>
          <td>BC</td>
        </tr>
        <tr>
          <td>3CH151</td>
          <td>Engineering Chemistry Lab</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3AM151</td>
          <td>Engineering Mechanics Lab</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AB</td>
        </tr>
        <tr>
          <td>3ME151</td>
          <td>Engineering Graphics Lab</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AA</td>
        </tr>
        <tr>
          <td>3EL151</td>
          <td>Basic Electrical Engineering LAb</td>
          <td>--</td>
          <td>--</td>
          <td>2</td>
          <td>1</td>
          <td>AB</td>
        </tr>
      </table>
      <p className='para' style={{ textAlign: 'center' }}>
        $:Grade obtained in makeup examination.&nbsp; #:Grade obtaibed after
        grade improvement &nbsp; **:Contact Hours
      </p>
      <table border={2} className='table2' style={{ textAlign: 'center' }}>
        <tr>
          <th colSpan={7}>Performance</th>
        </tr>
        <tr>
          <th colSpan={2}>First Year Semester-I Courses</th>
          <th colSpan={2}>First Year Semester-II Courses</th>
          <th colSpan={2}>Cumulative</th>
        </tr>
        <tr>
          <td>Credits</td>
          <td>SPI</td>
          <td>Credits</td>
          <td>SPI</td>
          <td>Credits Earned</td>
          <td>CPI</td>
        </tr>
        <tr>
          <td>25</td>
          <td>8.7</td>
          <td>23</td>
          <td>6.5</td>
          <td>48</td>
          <td>7.9</td>
        </tr>
      </table>
      <div className='name'>
        <div className='pass'>
          <p>
            <b>Result:PASS</b>
          </p>
          <p>
            <b>Date:16th August 2018</b>
          </p>
        </div>
        <div className='control'>
          <p>
            {' '}
            <br></br>
            <b>Controller of Examination</b>
          </p>
        </div>
      </div>
    </>
  )
}
const Image = () => {
  return (
    <div>
      <img src='frontend/public/wcelogo.png' alt='mypic' className='logo' />
    </div>
  )
}
export default Template
