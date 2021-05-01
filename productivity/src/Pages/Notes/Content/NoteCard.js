import { NoNoteFound } from "./NoNoteFound"
import { NoteItem } from "./NoteItem"
import './content.css';

export const NoteCard = (props) => {
    return (
        <div className='notes-content-card'>
        {
            props.todos.length > 0 ?
                props.todos.map((todo) => 
                <NoteItem 
                note={todo}
                />) :
                <NoNoteFound/>
        }
        </div>
    )
}