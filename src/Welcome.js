import React from 'react'
import './App.css';
class Welcome extends React.Component{
render() {
    const totoList = ['Learn React','Learn Redux']
    const isLogin = true
    return (
        <div className="this" htmlFor="">
        <h1> Hello React</h1>

            { String } 直接输出

            {12 + 2}计算后可直接输出

            {[1, 2, 3]}类似Repeat
            支持数组 |

            <ul>
                {
                    totoList.map(item =>
                    <li>{item}</li>
                    )
                }

            </ul>
            支持三元表达式
            { isLogin ? <p>你已经登录</p> : <p>请登录</p>}
            两个特殊属性
            class   className
            for    htmlFor
            其他属性与HTML属性一致

        </div>
            )
    }
}

export default Welcome