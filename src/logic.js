const todoFactory = (title, project, dueDate) => {
    let done = false;

    const getDone = () => {
        done = true;
    }
    
    return {title, project, dueDate, done, getDone}
}

export {todoFactory,}