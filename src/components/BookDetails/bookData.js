import React, {Component} from 'react'
import axios from 'axios'
import './PostList.css'



class PostList extends Component{
    constructor(props){
        super(props)
        this.state ={
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount(){
        axios.get('books.json')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
    }
    
    render(){
        const{posts, errorMsg}= this.state
        return(
            <div>
                
                
                {
                    posts.length ?
                    posts.map(post => <div key={post._id} >
                        <h1 className='listOfBooks'>
                            <h2 className='books'>
                            {post.Title}
                            <p>
                            {post.Price}
                            </p>
                            <img src ={post.url} alt ='book cover'/>
                            <button onClick={this.deleteSelectItem}>
                                 Delete
                            </button>
                            </h2>
                        </h1>
                       
                        
                       
                        </div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}
export default PostList
