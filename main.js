var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'PHP',
        coin: 400
    },
    {
        id: 7,
        name: 'PHP',
        coin: 400
    },
]


//********Add Array forEach2() method === forEach() method
Array.prototype.forEach2 = function(callback) {
    var arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
        callback(this[i], i, this);
    }
}

// courses.forEach2(function(course) {
//     console.log(course)
// })








//*******Add Array every2() method === every() method
Array.prototype.every2 = function(callback) {
    var arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++) {
        var isRight = callback(this[i], i, this);
        if (!!isRight) {
            continue;
        } else {
            return !!isRight;
        }
    }
    return !!isRight
}

// var isFree = courses.every2(function(course) {
//     return course === 0;
// })

// console.log(isFree)





//*******Add Array find2() method === find() method
Array.prototype.find2 = function(callback) {
    var arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++) {
        var item = callback(this[i], i, this);
        if (item) {
            return this[i];
        } else {
            continue;
        }
    }
}

// var course = courses.find2(function(course) {
//     return course.name === 'PHP';
// })

// console.log(course)






//*******Add Array filter2() method === filter() method
Array.prototype.filter2 = function(callback) {
    var arrayLength = this.length;
    var myArray = [];
    for(let i = 0; i < arrayLength; i++) {
        var item = callback(this[i], i, this);
        if (item) {
            myArray.push(this[i]);
        } else {
            continue;
        }
    }
    return myArray;
}

// var course = courses.filter2(function(course) {
//     return course.coin === 500;
// })

// console.log(course)





//*******Add Array map2() method === map() method
Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    var myArray = [];
    for(let i = 0; i < arrayLength; i++) {
        var item = callback(this[i], i, this);
        myArray.push(item);
    }
    return myArray;
}

// var course = courses.map2(function(course) {
//     return course.coin;
// })

// console.log(course)



//*******Add Array reduce2() method === reduce() method
Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if(arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    var arrayLength = this.length;
    for(; i < arrayLength; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var numbers = [100, 200, 500, 300, 700, 900]

var total = numbers.reduce2(function(total, number) {
    return total + number;
})

console.log(total)