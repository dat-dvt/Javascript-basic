var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
        isFinish: false
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
        isFinish: true
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
        isFinish: false
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
        isFinish: false
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500,
        isFinish: false
    },
    {
        id: 6,
        name: 'NodeJS',
        coin: 800,
        isFinish: false
    },
    {
        id: 7,
        name: 'Java',
        coin: 600,
        isFinish: false
    },
]


//********Add Array forEach2() method === forEach() method
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

// courses = new Array(100);

// courses.forEach2(function(course) {
//     console.log(course)
// })








//*******Add Array every2() method === every() method
Array.prototype.every2 = function(callback) {
    var output = true;
    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
            }
        }
    }
    return output;
}

// var result = courses.every2(function(course) {
//     return course.coin >= 200;
// })

// console.log(result)








//*******Add Array some2() method === some() method
Array.prototype.some2 = function(callback) {
    var output = false;
    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output;
}

// var isFinish = courses.some2(function(course) {
//     return course.isFinish;
// })

// console.log(isFinish)







//*******Add Array find2() method === find() method
Array.prototype.find2 = function(callback) {
    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                return this[index];
            }
        }
    }
}

// var course = courses.find2(function(course) {
//     return course.name === 'Ruby';
// })

// console.log(course)






//*******Add Array filter2() method === filter() method
Array.prototype.filter2 = function(callback) {
    var output = [];

    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    
    return output;
}

// var course = courses.filter2(function(course) {
//     return course.coin >= 00;
// })

// console.log(course)





//*******Add Array map2() method === map() method
Array.prototype.map2 = function(callback) {
    var output = [];

    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            output.push(result);
        }
    }
    
    return output;
}

// var course = courses.map2(function(course) {
//     return course.name;
// })

// console.log(course)



//*******Add Array reduce2() method === reduce() method
Array.prototype.reduce2 = function(callback, result) {
    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            if(arguments.length < 2 && index == 0) {
                result = this[0];
                continue;
            }
            result = callback(result, this[index], index, this);
        }
    }
    return result;
}

var numbers1 = [100, 200, 500, 300, 700, 900]
var numbers = [1,2,3]

var total = numbers.reduce2(function(total, number) {
    return total + number;
})

console.log(total)