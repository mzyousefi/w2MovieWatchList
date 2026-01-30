export default function TitleInput({type,value,placeHolder,onChangeF}){
    return (
        <input className="form-control mb-2" type={type} value={value} placeholder={placeHolder} onChange={(e)=>onChangeF(e.target.value)}></input>
    )
}