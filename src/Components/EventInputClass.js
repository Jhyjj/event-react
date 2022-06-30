import React, { Component } from 'react';

class EventInputClass extends Component {
    state ={
        message : '',
        username : ''
    }
    handleChange = (e)=>{
        this.setState({
            //값을 받아올 input이 여러개일때, input의 name으로 접근한다.
            [e.target.name]: e.target.value
        
        })
    }
    handleClick = ()=>{
        console.log(`메세지는 ${this.state.message}이고 유저네임은 ${this.state.username}입니다.`);
        this.setState({
            message:'',
            username:''
        })
    }
    //enter키를 눌렀을때 버튼 클릭 이벤트(handleClick)를 실행시키는 키이벤트
    handleKeyPress = (e)=>{
        console.log(e);
        if(e.key==='Enter'){
            this.handleClick();
        }
    }
    render() {

        return (
            <div>
                <h2>이벤트 연습 class</h2>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} onKeyPress={this.handleKeyPress}/>
                <input type="test" name="username" onChange={this.handleChange} value={this.state.username} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventInputClass;