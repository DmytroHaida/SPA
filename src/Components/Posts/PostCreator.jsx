import React from 'react';
import { FormField, Input, TextArea } from '../../common/FormControls/FormsControls';
import { reduxForm } from 'redux-form';

const PostCreator = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            < div className='blogBlockContainer'  >

                <div className='blogBlockImg'>
                    {FormField(Input, null, 'Put Image URL', 'BlogImage')}
                </div>
                <div>
                    <h2>Header:</h2>
                    {FormField(TextArea, null, 'Text', 'BlogHeader')}
                </div>
                <div>
                    Blog News: {FormField(TextArea, null, 'Text', 'BlogBody')}
                </div>
                <button>Add New Post</button>
            </div>

        </form>
    )
}

const PostCreatorReduxForm = reduxForm({ form: 'postCreator' })(PostCreator)

export default PostCreatorReduxForm;