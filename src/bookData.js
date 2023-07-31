import React, {Component} from 'react'
import axios from 'axios'


class bookData extends Component{
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
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }
    render(){
        const{posts, errorMsg}= this.state
        return(
            <div>
                
                
                {
                    posts.length ?
                    posts.map(post => <div key={post._id}>
                        <img src={post.url} alt = 'a Harry Potter Cover'/>
                        <br>
                        </br>
                        {post.Title}
                        <br>
                        </br>
                        {post.Author}
                        <br>
                        </br>
                        {post.Price}
                        </div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}
export default bookData

