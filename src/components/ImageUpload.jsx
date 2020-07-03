import React, { Component } from 'react'
import axios from 'axios'

class ImageUpload extends Component {
    constructor() {
        super()
        this.state = {
            selectedFiles: null

        }
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFiles: event.target.files[0]
        })
    }
    fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('image', this.state.selectedFiles, this.state.selectedFiles.name);
        axios.post('', fd, {
            onUploadProgress: ProgressEvent => {
 console.log('upload in progress:' + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
            }
        })
            .then(res => {
            console.log(res)
        })
    
    }
    render() { 
        return ( 
            <div>
                <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} />
                <button onClick={()=>this.fileInput.click()}>pick file</button>
                <button onClick={this.fileUploadHandler} >upload</button>

        </div>
         );
    }
}
 
export default ImageUpload;

