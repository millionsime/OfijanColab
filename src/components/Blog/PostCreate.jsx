import React, { Component } from 'react';
import { Form, Input, Button } from 'react-bootstrap';

class PostCreate extends Component {

    state = {
        title: '',
        body: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body
            })
        })
            .then(response => response.json())
            .then(data => {
                this.props.history.push('/posts');
            });
    }

    render() {
        return (
            <div>
                <h1>Create New Post</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" name="title" placeholder="Title" value={this.state.title} />
                    <Input type="text" name="body" placeholder="Body" value={this.state.body} />
                    <Button type="submit">Create Post</Button>
                </Form>
            </div>
        );
    }
}

export default PostCreate;