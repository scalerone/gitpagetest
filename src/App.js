import React,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
const tags = ['有趣','程序员']
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            comments:['this is a reply']
        }
        this.addComment = this.addComment.bind(this)
        this.delComment = this.delComment.bind(this)
    }
    addComment(comment){
        console.log(comment)
        this.setState({
            comments:[...this.state.comments,comment]
        })
    }
    delComment(index){
        const  newComments =[...this.state.comments]
        newComments.splice(index,1)
        this.setState({
            comments:newComments
        })
    }
    render() {
        const { comments } = this.state
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <CommentList onDeleteDomment={this.delComment}  comments={comments}/>
                <CommentBox
                    commentsLength={comments.length}
                    onAddComment ={this.addComment}
                    />
            </div>

        )
    }

}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>开始学习React.js Hello</h2>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {/*<NameCard name="viking" number="138123456" isHuman tags={tags}/>*/}
//       {/*<LikesButton />*/}
//       <CommentBox/>
//     </div>
//   );
// }

export default App;
