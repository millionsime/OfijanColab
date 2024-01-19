import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class PostList extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/api/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        return (
            <div>
                <h1>My Blog</h1>
                <ListGroup>
                    {this.state.posts.map(post => (
                        <ListGroupItem key={post.id}>{post.title}</ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default PostList;