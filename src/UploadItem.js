import React, { Component } from 'react';

class UploadItem extends Component {
    constructor(props) {
      super(props);
        this.state = {
        }
    }


    render() {
      return(
        <li key={this.props.upload.title} className="list">
          <label>{this.props.upload.title}</label>
          <img src={this.props.upload.url}
          alt={this.props.upload.title}
          className="image"
          />
      </li>
      )
    }
}


export default UploadItem;
