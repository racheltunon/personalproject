import React, {Component} from 'react'
import axios from 'axios'

class Avatar extends Component {
    constructor() {
        super();
        this.state={
            file: null
        }
    }
handleFile(e) {

    let file = e.target.files[0]
    this.setState({file: file})
}

handleUpload(e) {
  let file = this.state.file
  let formdata = new FormData()
  formdata.append('image', file)
  formdata.append('name', "sklflk")
  console.log(formdata)
  console.log(file)

    axios({
        url: '/some/api',
        method:"get",
        headers: {
            authorization: `your token`
        },
        data: formdata
    }).then((response) => {

    }).catch((error) => {
        
    })
}
    render () {
        return (
            <div className="Avatar">
                <h1>UPLOAD A PROFILE PICTURE</h1>

                <form>
                    <div className="">
                        <label>Select File</label>
                        <input type="file" name="file" onChange={(e) =>this.
                        handleFile(e)}/>
                    </div>

                            <br />
                    <button type="button" onClick={(e)=> this.handleUpload(e)}>Upload</button>
                </form>
            </div>
        )
    }
}

export default Avatar