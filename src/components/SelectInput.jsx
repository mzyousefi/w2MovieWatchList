export default function SelectInput({value,placeHolder,onChangeF,children}) {
    return (
        <select className="form-control mb-2" value={value} onChange={(e)=>onChangeF(e.target.value)}>
            <option value="">{placeHolder}</option>
            {children}
        </select>
    )
}