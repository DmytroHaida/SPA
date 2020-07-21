import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/uk';
import PostEditorReduxFormState from './PostEditor';

const Posts = (props) => {

    const [editMode, setEditMode] = useState();
    const [currentPostValue, setCurrentPostValue] = useState();
    const [initialFormValue, setinitialFormValue] = useState(currentPostValue)

    useEffect(() => {
        setinitialFormValue(currentPostValue)
    },
        [currentPostValue])

    const onEditorSubmit = (e) => {
        props.postEditor(e)
        console.log(e)
        setEditMode(false)
        setCurrentPostValue(null)

    }
    const initialValueForEditForm = (id, Image, Header, Body) => {
        setCurrentPostValue(
            {
                _id: id,
                BlogImage: Image,
                BlogBody: Body,
                BlogHeader: Header
            }
        )
    }

    return (
        <>
            {props.posts.map(n => editMode === n._id
                ? <PostEditorReduxFormState onSubmit={onEditorSubmit} initialValues={initialFormValue} />
                : < div className='blogBlockContainer' key={n._id} >
                    <div>
                        <div className='blogBlockImg'>
                            <img className='blogBlockImg' src={n.BlogImage} alt="blogBlockImg" />
                        </div>
                        <div>
                            <h2>{n.BlogHeader}</h2>
                        </div>
                        <div className='blogBlockText'>{n.BlogBody}
                        </div>
                        <div>
                            <span>
                                {moment(n.createdAt).locale('uk').format('LLL')}
                                {/* Create time */}
                            </span>----
                            <span>
                                {moment(n.updatedAt).locale('uk').format('LLL')}
                                {/* post update Time */}
                            </span>
                        </div>
                        <div>
                            <button onClick={() => props.deletePost(n._id)}>Delete Post</button>

                            <button onClick={() => initialValueForEditForm(n._id, n.BlogImage,
                                n.BlogHeader, n.BlogBody, setEditMode(n._id))}>Edit Mode</button>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}
export default Posts;