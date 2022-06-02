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

// posts라는 변수에 데이터를 저장
let posts = '맛집 리스트';
// let mainStyle = {color : 'blue' , fontSize : '100px'} ;
  return (
    <div className="App">
      {/* className 문법임 */}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
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

      {/* <div style= { mainStyle } > css 테스트</div>
      <img src= { logo } alt = '로고이미지'/>
      <img src= { son } alt = '손 이미지'/> */}
    </div>
  );
}

export default App;
