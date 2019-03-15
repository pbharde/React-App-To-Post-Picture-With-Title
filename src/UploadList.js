import React, { Component } from 'react';
import UploadItem from  './UploadItem.js';

class UploadBar extends Component {
    constructor(props) {
      super(props);
        this.state = {

        }

    }


    render() {
      
      return(

        <ul>
        {this.props.uploads.map((photo)=>
          <UploadItem upload={photo}/>
        )
        }
      </ul>

      )
    }
}


export default UploadBar;
