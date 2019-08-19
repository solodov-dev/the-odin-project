const todoFactory = (title, dueDate) => {
    let done = false;

    const getDone = () => {
        done = true;
    }
    
    return {title, dueDate, done, getDone}
}

export {todoFactory,}