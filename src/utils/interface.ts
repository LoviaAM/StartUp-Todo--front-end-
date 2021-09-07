export interface todo {
    id: number,
    tag : string,
    description : string, 
    resource ? : string, 
    video ? :string 
}

export interface todoProp {
    todos: todo
}

// interface for the database information