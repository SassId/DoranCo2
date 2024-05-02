export default function Routine() {

    function DisplayMessage(text){
        alert(text)
    }
  return (
    <div>
      <button onClick={()=>{DisplayMessage('EAT!')}}>Eat</button>
      <button onClick={()=>{DisplayMessage('SLEEP!')}}>Sleep</button>
      <button onClick={()=>{DisplayMessage('STDY!')}}>Study</button>
    </div>
  );
}
