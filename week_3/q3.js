let arr = [1,2,3,4,5,6,7];


Array.prototype.filter = function (callback) {
    const newArr = [];
    console.log(this);
    console.log("Custom function called");
    if(typeof this !== "object")
        throw new Error("Array chahiye bhai!!");
    if(typeof callback !== "function")
        throw new Error("Function bhejo ");
    for(let i = 0;i < this.length;i++)
    {
        if(callback(this[i]) === true)
        {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const updatedArr = arr.filter((e) => e % 2 == 0);

console.log(updatedArr);