import React, {Component} from 'react';

// class PostsItem extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render () {
//         return <div>Posts Item {this.props.match.params.id}</div>
//     }
// }

const PostsItem = ({match}) => {
    return <div>Posts Item {match.params.id}</div>
}

export default PostsItem;