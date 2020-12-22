import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import "./layout.css";

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = { editorHtml: '', mountedEditor: false }
        this.quillRef = null;
        this.reactQuillRef = null;
        this.handleChange = this.handleChange.bind(this)
        this.attachQuillRefs = this.attachQuillRefs.bind(this);
    }

    componentDidMount() {
        this.attachQuillRefs()
    }

    componentDidUpdate() {
        this.attachQuillRefs()
    }

    attachQuillRefs() {
        // Ensure React-Quill reference is available:
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        // Skip if Quill reference is defined:
        if (this.quillRef != null) return;

        const quillRef = this.reactQuillRef.getEditor();
        if (quillRef != null) this.quillRef = quillRef;
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
        console.log(this.state.editorHtml)
    }

    render() {
        return (
            <ReactQuill
                ref={(el) => { this.reactQuillRef = el }}
                theme={'snow'}
                onChange={this.handleChange}
                modules={Editor.modules}
                formats={Editor.formats}
                defaultValue={this.state.editorHtml}>
                <div className="my-editing-area" />
            </ReactQuill>

        )
    }
}


Editor.modules = {}
Editor.modules.toolbar = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
]

Editor.formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]


export default Editor;