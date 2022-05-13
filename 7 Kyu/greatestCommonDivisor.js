function mygcd(x, y){
    if(y){
        return mygcd(y, x % y)
    } else {
        return Math.abs(x)
    }
}