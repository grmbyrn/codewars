function maskify(cc){
    let str = cc.slice(-4)
    let hidden = ''

    for(let i = (cc.length) - 4; i > 0; i--){
        hidden += '#'
    }
    return hidden + str
}