import React from 'react'
class CommentBox extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     value:''
        // }
        // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // handleChange(event){
    //     this.setState({
    //         value:event.target.value
    //     })
    // }
    handleSubmit(event){
        // alert(this.state.value)
        // alert(this.textInput.value)
        this.props.onAddComment(this.textInput.value)
        this.textInput.value = ''
        event.preventDefault()
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control" placeholder="请输入内容"
                        // onChange={this.handleChange}
                        // value={this.state.value}
                        //使用ref改为非受控组件不用写注释的内容
                        ref={(textInput)=>{this.textInput = textInput}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">留言</button>
                <p>已有{this.props.commentsLength}条评论</p>
            </form>
        )
    }

}


export default CommentBox






