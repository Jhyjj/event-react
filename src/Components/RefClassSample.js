import React, { Component } from 'react';
import './RefSample.css';

class RefClassSample extends Component {
    
    input = React.createRef(); //ref 생성
    state = {
        password : "",
        clicked: false,
        vaildated :false,
    }
    handleChange = (e)=>{
        this.setState({
            password: this.input.current.value
        })
    }
    handleButtonClick = ()=>{
        this.setState({
            clicked:true,
            vaildated :this.state.password==='0000'
        })
        //돔요소 접근은 ref.current로
        console.log(this.input);
        this.input.current.focus();
    }
    render() {
        return (
            <div>
                {/* 선택하려는 dom요소의 ref속성으로 지정 */}
                <input 
                        type="password"
                        ref={this.input} 
                        value={this.state.password}
                        onChange={this.handleChange} 
                        className={this.state.clicked ? (this.state.vaildated ? 'success':'failure'): ''}
                />
                <button onClick={this.handleButtonClick}>클릭</button>
            </div>
        );
    }
}

export default RefClassSample;