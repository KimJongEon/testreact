/* eslint-disable */ // waring 제거 (오류는 아님)
import logo from './logo.svg';
import son from './son.jpeg'
import React, { useState } from 'react';
import './App.css';


function App() {
// ES6 destructuring 문법
//state는 변수 대신 쓰는 데이터 저장공간, useState()를 이용해 만들어야함
//state에 데이터를 저장하는 이유 : HTML이 자동으로 재렌더링, HTML이 새로고침 없이도 변경됨
let [글제목, 글제목변경] = useState(['남자 코트 추천', '신발 추천', '강남 우동 맛집']);
let likeCnt = 0;
let [하트, 하트변경] = useState(likeCnt);

//글 제목 변경 함수
//리액트 대 원칙 : immutable data - state 데이터는 직접 수정이 되면 안된다.
// function 제목바꾸기(){
//   // 글제목변경(['여자 코트 추천', '신발 추천', '강남 우동 맛집']) - 하드코딩
//   var newArray = [...글제목]; //deep copy 필요
//   newArray[0] = '여자 코트 추천';
//   글제목변경(newArray);
// }

//정렬 함수 sort
function 정렬(){
  var newArray = [...글제목]; // deep copy
  newArray.sort(); // 정렬
  console.log(newArray);
  글제목변경(newArray);
}

// posts라는 변수에 데이터를 저장
let posts = '맛집 리스트';
// let mainStyle = {color : 'blue' , fontSize : '100px'} ;
// return ()안에는 하나의 html 태그만 가능
// ex) <div></div> 하나
  return (
    <div className="App">
      {/* className 문법임 */}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 정렬 }>정렬 버튼</button>
      <div className="list">
        {/* posts라는 변수를 통해 데이터 바인딩 */}
        <h3> { 글제목[0] + '[글 제목 배열 0]' } <span onClick={ ()=>{ 하트변경(하트 + 1)} }>❤️</span> {하트} </h3>
        <p>글 내용</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[1] +'[글 제목 배열 1]' } </h3>
        <p>글 내용</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[2] + '[글 제목 배열 2]'} </h3>
        <p>글 내용</p>
        <hr/>
      </div>
      
      {/* 글 상세 modal */}
      <Modal/>
      
      {/* <div style= { mainStyle } > css 테스트</div>
      <img src= { logo } alt = '로고이미지'/>
      <img src= { son } alt = '손 이미지'/> */}
    </div>
  );
}

// Component로 만들기 좋은 것들
// 반복출현하는 HTML 덩어리들, 자주 변경되는 HTML UI들

// Component 단점
// stete 쓸 때 복잡해짐
// 상위 component에서 만든 state를 쓰려면 props 문법 이용해야함
// function App()에 만든 변수를 Modal에 전달 해줘야됨

{/* HTML을 한 단어로 줄여서 쓸 수 있는 방법
: 리액트의 Component 문법 */}
// Component의 관습 : 소문자로 시작
{/* 글 상세 modal */}
function Modal(){
  return(
    // Fragment 괄호 : 아무의미 없이 묶을 수 있음 <></>
    <>
    <div className="Modal">
      <h2>제목</h2>
      <p>내용</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
