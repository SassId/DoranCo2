export default function Routine() {

    function DisplayMessage(text){
        alert(text)
    }

    function changeChange(e){
      console.log(e.target.value);
    }

  return (
    <div>
      <input type="text" onChange={(e)=> changeChange(e)} />
      <button onClick={()=>{DisplayMessage('EAT!')}}>Eat</button>
      <button onClick={()=>{DisplayMessage('SLEEP!')}}>Sleep</button>
      <button onClick={()=>{DisplayMessage('STDY!')}}>Study</button>
    </div>
  );
}
