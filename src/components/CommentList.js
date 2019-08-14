import React from 'react'

// const CommentList = ({ comments }) =>{
//     return (
//         <div className="comment-list-component">
//             <label>评论列表</label>
//             <ul className="list-group mb-3">
//                 {
//                     comments.map((comment,index) =>(
//                         <li key={index} className="list-group-item">{comment}</li>
//                             )
//                             )
//                 }
//             </ul>
//         </div>
//     )
// }
class CommentList extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="comment-list-component">
                <label>评论列表</label>
                <ul className="list-group mb-3">
                    {
                        this.props.comments.map((comment,index) =>(
                                <li key={index} className="list-group-item">{comment}
                                    <button className="btn btn-primary"
                                    onClick={()=>{this.props.onDeleteDomment(index)}}
                                    >删除</button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
            )


    }
}

export default CommentList