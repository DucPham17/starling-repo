export const NoteItem = (props) => {
    return (
        <div className="note-item">
            <strong>{props.note.title}</strong>
            <p>{props.note.description}</p>
        </div>
    )
}