import React from 'react';
import { FormField, Input, TextArea } from '../../common/FormControls/FormsControls';
import { reduxForm } from 'redux-form';

const PostEditor = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>< div className='blogBlockContainer'>

            <div className='blogBlockImg'>
                {FormField(Input, null, 'Put Image URL', 'BlogImage')}
            </div>
            <div>
                <h2>Header:{FormField(TextArea, null, 'Text', 'BlogHeader')}</h2>
            </div>
            <div>
                 News: {FormField(TextArea, null, 'Text', 'BlogBody')}
            </div>
            <button>Add New Post</button>
        </div>
        </form>
    )
}

const PostEditorReduxForm =  reduxForm({ form: `postEditor` })(PostEditor)

export default PostEditorReduxForm;