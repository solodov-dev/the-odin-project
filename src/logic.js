const todoFactory = (title, project, dueDate, comment) => {
    let done = false;
    let important = false;
    return {title, project, dueDate, important, comment}
}

export {todoFactory,}