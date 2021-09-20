
import User from "./components/User" ;
import { useInputText, useUserSearch,  } from "./util/hooks" ;

function App() {
  // const q = "TBS" ;
  const [inputQ, setInputQ, onChangeInputQ] = useInputText("TBS");
  const {q,setQ,users,status} = useUserSearch("TBS");
  function onSearch(){
    setQ(inputQ);
  }
  return (
    <div className="App">
      <h1>Github ユーザ検索</h1>
      <div>
        query:
        <input value={inputQ} onChange={onChangeInputQ}/>
        <button onClick={onSearch}>検索</button>
      </div>
      <div>status:{status}</div>
      <h2>「{q}」の検索結果</h2>
      <ul className="user-list">
        {
          users.length > 0 ? 
          users.map(el=>(
            <li key={el.login}>
              <User 
                url={el.html_url}
                name={el.login} 
                imgSrc={el.avatar_url}/>
            </li>
          ))
          :
          "none users"
        }
      </ul>
    </div>
  );
}

export default App;
