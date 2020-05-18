import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/Validator";
import {FormElement} from "../../common/FormElement";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post id={p.id} post={p.post} like={p.like}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
       return <div>
        <div className='simple'>
            <h1> My Posts</h1>
            <ReduxAddPost onSubmit={onAddPost}></ReduxAddPost>
            {postElements}
        </div>
        </div>

}
const maxLength100=maxLengthCreator(100)

const Textarea=FormElement('textarea')
const AddPostForm=(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <Field name={'newPostText'} component={Textarea} placeholder={'Enter your message'}
               validate={[requiredField,maxLength100]}value={props.newPostText}></Field>
        <button>Add post</button>
    </form>
}
const ReduxAddPost = reduxForm({form:'addNewPost'})(AddPostForm)
export default MyPosts;
