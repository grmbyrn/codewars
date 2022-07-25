function rakeGarden(garden) {
    let todo = garden.split(' ')
    for(let i = 0; i < todo.length; i++){
        if(todo[i] !== 'rock' && todo[i] !== 'gravel'){
            todo[i] = 'gravel'
        }
    }
    return todo.join(' ')
}