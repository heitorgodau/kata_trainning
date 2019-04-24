const filterLucky = arr => arr.filter(el => el.toString().includes('7'));

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]), [7, 70, 17]);
console.log(filterLucky([71, 9907, 69]), [71, 9907]);

/*Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7;
For example,

>filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]

Don't worry about bad input, you will always receive a finite list of integers.*/