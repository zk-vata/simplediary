import {useState} from "react";

const DiaryEditor = () =>{
//class의 이름과 컴포넌트의 이름을 일치시켜서 직관적으로 구성
//author는 state, setAuthor는 상태변환함수
//onChange는 이벤트다. 어떤 값이 입력되었을때, input은 이를 어떤 이벤트가 발생.
//onChange는 값이 바뀌었을때 수행하는 이벤트라고 생각하면 된다.
//객체의 값을 바꿀려면 새로운 객체를 생성해서 전달해야한다. 그래서 setState에 author와 content가 있다.

const[state,setState] = useState({
    author: "",
    content: "",
    emotion: 1,
})

const handleChangeState = (e) =>{
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = () =>{
    console.log(state);
    alert("저장 성공");
}

// 리턴문 바로옆에 없으면 오류뜨게됨. 주의
    return <div className="DiaryEditor"> 
        <h2>오늘의 일기</h2>
        <div>
            <input 
            
            name="author" 
            value={state.author} 
            onChange={(e) => {
                setState({
                    author: e.target.value, //변경
                    content: state.content, //유지
                });
            }}
            />
        </div>

        <div>
            <textarea 

            name="content"
            value={state.content} 
            onChange={(e) => {
                setState({
                    ...state, // property를 펼쳐주는 것이기 때문에 
                              // 위처럼 유지 코드를 입력할 필요가 없다.
                              // 또한 먼저 ...state를 넣어서 나열시켜줘야함
                    content: e.target.value,
            });
        }}
            />               
        </div>

        <div>
            <select 
            name="emption"
            value = {state.emotion}
            onChange = {handleChangeState}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>

        <div>
        <button onClick={handleSubmit}>일기 저장하기</button>    
            
        </div>
    </div>

}

export default DiaryEditor;