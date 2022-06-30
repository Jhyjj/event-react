import React,{useState, useRef} from 'react';

const EventInput = () => {
    const input = useRef();
    const [form, setForm] = useState({
        username:"",
        message:"",
    });

    //구조분해할당
    const {username, message} = form;
    const onChange=(e)=>{
        // const nextForm = {
        //     //스프레드 구문으로 객체 복사하기를 이용해서 값을 바꿔준다.
        //     ...form, //1. 기존의 폼 내용을 여기에 복사
        //     [e.target.name] : e.target.value //2. 원하는 값을 덮어 씌우기
        // }

        //위 내용을 구조분해할당으로 다시 적기
        const {name,value} = e.target;
        setForm({
                ...form,
                [name] : value,
        });
    }
    //버튼 클릭시 실행할 함수
    const onClick =()=>{
        console.log(`메세지는 ${message}, 유저네임은 ${username}~`);
        setForm({
            username:"",
            message:"",
        });
        input.current.focus();
    }
    //엔터 키 이벤트
    const onKeyPress = (e)=>{
        if(e.key==="Enter"){
            onClick();
        }
    }
    return (
        <div>
            <h2>이벤트 연습 function</h2>
            <input type="text" ref={input} nema="username" value={username} onChange={onChange} onKeyPress={onKeyPress}/>
            <input type="text" nema="message" value={message} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventInput;