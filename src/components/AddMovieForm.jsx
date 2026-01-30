import { useState } from "react";
import TitleInput from "./TitleInput";
import SelectInput from "./SelectInput";

export default function AddMovieForm({ genres, addClick }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [error, setError] = useState("")

    function submit() {
        setError("")
        if (!title) return setError("title is required")
        if(!genre) return setError("genre is required")
        addClick({ title: title, genre: Number(genre), watched: 0 })
        setTitle("")
        setGenre("")
    }
    return (
        <form>
            <TitleInput type="text" value={title} placeHolder="title movie ..." onChangeF={setTitle} />
            <SelectInput value={genre} placeHolder="Please select the movie genre..."  onChangeF={setGenre} >
                {genres}
            </SelectInput>

            {error ? <p className="error">{error}</p> : null}

            <button type='button' className='btn btn-success' onClick={submit}>Add</button>
        </form>
    );
}