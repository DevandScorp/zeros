module.exports = function getZerosCount(number) {
    if(number<1 || number>Math.pow(10,8))return -1;
    var res=0;
    while(number>0){
        number=Math.floor(number/5);
        res+=number;
    }
    return res;
}
