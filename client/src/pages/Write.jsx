import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
    const [value, setValue] = useState('');

    return (
        <div className="add">
            <div className="content">
                <input type="text" name="" id="" placeholder='Title' />
                <div className="editorContainer">
                    <ReactQuill theme="snow" value={value} onChange={setValue} className='editor' />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span><b>Status:Draft</b></span>
                    <span><b>Visibility:Public</b></span>
                    <input type="file" name="" id="file" style={{ display: 'none' }} />
                    <label className='file' htmlFor="file">Upload File</label>
                    <div className='button'>
                        <button>Save as a Draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className='cat'>
                        <input type="radio" name="art" id="art" />
                        <label htmlFor="art">ART</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" name="science" id="science" />
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" name="art" id="technology" />
                        <label htmlFor="technology">Technology</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" name="art" id="cinema" />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" name="art" id="design" />
                        <label htmlFor="design">Design</label>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Write