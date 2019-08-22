const todoFactory = (title, project, dueDate, comment) => {
    return {done: false, 
            title, 
            important: false, 
            project, 
            dueDate, 
            comment, 
            toggleDone() {
                if(this.done == false) {
                    this.done = true
                } else {
                    this.done = false
                }
            }, 
            toggleImportant() {
                if(this.important == false) {
                    this.important = true
                } else {
                    this.important = false
                }
            }
        }
}

export {todoFactory,}