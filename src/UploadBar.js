import React, { Component } from 'react';
import UploadList from  './UploadList.js';

class UploadBar extends Component {
    constructor(props) {
      super(props);
        this.state = {
          title:'',
          url:'',
          uploads:[]
        }
      this.handleTitle = this.handleTitle.bind(this);
      this.handleUrl = this.handleUrl.bind(this);
      this.upload = this.upload.bind(this);
    }

      handleTitle(event) {
      this.setState({
        title: event.target.value
        });
      }

      handleUrl(event) {
      this.setState({
        url: event.target.value
        });
    }

    upload(event){
      event.preventDefault();

      this.setState({
        title:'',
        url:'',
        uploads:[...this.state.uploads,
          {
          title:this.state.title,
          url:this.state.url
          }
        ]
      })
    }

    render() {
      return(
        <div>
      <div className="mainDiv">
        <input
        type="text"
        placeholder="Enter URL"
        id="url"
        value={this.state.url}
        onChange={this.handleUrl}
        className="url"
        required
        />

        <input
        type="text"
        placeholder="Title"
        id="title"
        value={this.state.title}
        onChange={this.handleTitle}
        className="title"
        required
        />

        <button type="submit" className="button" onClick={this.upload}>New Post</button>
      </div>
        <div>
        <UploadList uploads={this.state.uploads}/>
        </div>
      </div>
      )
    }
}


export default UploadBar;
