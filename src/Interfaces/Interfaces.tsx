


type Priority = 1 | 2 | 3 | 4 | 5;
export interface Iinput {
    Title: String,
    Description: String,
    Priority: Priority,
    DueTo: Date
}


export interface ITodoListEntry {
    dateAdded: Date,
    priority: Priority,
    title: String,
    description?: String,
    dueTo: Date,
}
export interface TodoListWithSet {
    todoList: ITodoListEntry[],
    setToDoList: React.Dispatch<React.SetStateAction<ITodoListEntry[]>>
}