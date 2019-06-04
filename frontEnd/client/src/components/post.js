import { Link } from "react-router-dom"
import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    State = {
        post: {
            created_at: Date(),
            title: '',
            picture: URL(),
            content: '',
            site_url: URL(),
            vote_total: Number
        }
    }
    //gets the post
    componentDidMount = () => {
        //axios.get(`/post/${this.props.id}`).then(res => {
        // this.setState({dilemma: res.data.post})
        // })
    }
     // toggles form
    toggleEditForm = () => {
        this.setState((state, props) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }   
    //creates clone as placeholder
    handleChange = (e) => {
        const newPost = { ...this.state.post }
        newPost[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({ post: newPost })
    }
    //deletes Post
    deletePost = (e) => {
        e.preventDefault();
        //  axios.delete(`/post/${this.props.id}`)
        // .then(() => this.props.getPosts())
    }

    //updates post
    updatePost = (e) => {
        e.preventDefault()
        console.log(this.state.post)
            //axios.put(`/post/${this.props.id}`, {
            //name: this.state.post.name,
            //notesThoughts: this.state.post.notesThoughts
            //})
            .then(() => {
                this.setState({ isEditFormDisplayed: false })
            }).then(() => this.props.getPosts())
    }

    render() {
        const url = `/post/${this.props.id}`
        return (
            //when map, maps through data this will be seen for each
            <div className="eachPost">
                <li><Link to={url}>
                    <h3>{this.props.title} </h3> </Link>
                    <h3>{this.props.picture} </h3>
                    <h3>{this.props.content} </h3>
                    <h3>{this.props.site_url} </h3>
                    <h4>{this.props.vote_total} </h4>
                    <button onClick={this.toggleEditForm}>Edit</button>


                    {
                        this.state.isEditFormDisplayed
                            ? <form onSubmit={this.updatePost}>
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        onChange={this.handleChange}
                                        value={this.state.post.title}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="picture">Picture</label>
                                    <input
                                        id="picture"
                                        type="url"
                                        name="pictyre"
                                        onChange={this.handleChange}
                                        value={this.state.post.picture}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="content">Content</label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        onChange={this.handleChange}
                                        value={this.state.post.content}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="site_url">site_url</label>
                                    <input
                                        id="site_url"
                                        type="url"
                                        name="site_url"
                                        onChange={this.handleChange}
                                        value={this.state.post.site_url}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="vote_total">vote_total</label>
                                    <input
                                        id="vote_total"
                                        type="number"
                                        name="vote_total"
                                        onChange={this.handleChange}
                                        value={this.state.post.vote_total}
                                    />
                                </div>
                                <input type="submit" value="submit" />
                                <input onClick={this.deletePost} type='submit' value='delete' />

                            </form>
                            : null

                    }
                </li>
            </div>

        )
    }

}
export default Post;