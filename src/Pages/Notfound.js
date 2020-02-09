import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Notfound extends Component {
  render () {
    return (
      <div className='nofound_cmn'>
        <div className='nofound_subcmn'>
            <p className="oops_head">Oops !</p>
            <p className="not_head">404 - Not Found Page</p>
            <p className="go_to_home"></p>
            <Link className='viewall_btn' to='/'>Go to Home</Link>
        </div>
      </div>
    )
  }
}

export default Notfound
