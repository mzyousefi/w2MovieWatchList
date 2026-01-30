export default function SelectInput({value,placeHolder,onChangeF,children}) {
    return (
        <select className="form-control mb-2" value={value} onChange={(e)=>onChangeF(e.target.value)}>
            ({placeHolder?<option value="">{placeHolder}</option>:null})
            {children}
        </select>
    )
}