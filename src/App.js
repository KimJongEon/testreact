// import logo from './logo.svg';
// import son from './son.jpeg'
import './App.css';


function App() {

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
        <h3> { posts } </h3>
        <p>5월 30일 발행</p>
        깃허브 테스트
        <hr/>
      </div>

      <div className="list">
        <h3> { posts } </h3>
        <p>5월 30일 발행</p>
        <hr/>
      </div>
      {/* <div style= { mainStyle } > css 테스트</div>
      <img src= { logo } alt = '로고이미지'/>
      <img src= { son } alt = '손 이미지'/> */}
    </div>
  );
}

export default App;
