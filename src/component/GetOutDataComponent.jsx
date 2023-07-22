import React, { Component} from 'react'
import axios from 'axios'

class GetOutDataComponent extends Component {
    constructor(props) {
    super(props)

    this.state = {
        posts :[],
        errorMessage:''
    }
    }
    componentDidMount()
    {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMessage: 'Error Retrieving Data'})
        })
    }
  render() {
  const {posts,errorMessage} = this.state
    return (
      <React.Fragment>
        <div>List of Social Media Posts
        {/* {posts.title} */}
        {posts.length 
            ? posts.map(post => 
                <div key={post.id}>
                    User :  {post.userId}
                    <br />
                    Title: {post.title}
                    <br />
                    Body: {post.body}
                </div>)
            :null}

        {errorMessage
            ?<div>{errorMessage}</div>
            :null}
        </div>
      </React.Fragment>
    )
  }
}

export default GetOutDataComponent