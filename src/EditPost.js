import React from 'react'
import { useState } from "react";
import { connect } from 'react-redux';

import { editPost } from './actions'


function EditPost(props) {
    const [form, setForm] = useState({ title: '', body: '' })

    const handleSubmit = (e) => {
        // e.preventDefault()
        props.editPost(props.id, form.title, form.body)
        props.handleForm()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="title">Body:</label>
                    <textarea id="body" name="body" value={form.body}
                    onChange={e => setForm({...form, body: e.target.value})}
                    />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = () => {
    return {
        editPost
    }
}
const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(EditPost)

