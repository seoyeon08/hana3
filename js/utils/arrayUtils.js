Array.prototype.first = function() {

}
Object.defineProperty(Array.prototype, {
    first: {
        get: function(){

        },
    },
    // last: {
        // get: fucntion(){
            // return 
        // },
    // },

});

Array.prototype.uniqBy = function(prop){
    return [...new Set(this.map(item => item[prop]))];
};

Array.prototype.filterBy = function(prop, value){
    return this.filter(item => item[prop] == value);
};
// Array.prototype.sortBy = function(prop, direction){
//     // return this.sort((a,b) =>{item => this.dierction.value});
// };

// Array.prototype.sortBy = function(prop, direction = 'asc') {
//     const sortedArray = [...this];
  
//     sortedArray.sort((a, b) => {
//       const aValue = a[prop];
//       const bValue = b[prop];
  
//       return direction.toLowerCase() === 'desc'
//         ? bValue.localeCompare(aValue)
//         : aValue.localeCompare(bValue);
//     });
  
//     return sortedArray;
// };

Array.prototype.sortBy = function(prop, dierction = 'asc'){
    const flag = dierction.toLowerCase() == 'asc' ? 1 : -1;
    return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1)*flag);
    // return this.toSorted((a,b) => (a[prop]>b[prop] ? 1 : -1));
    // return this.toSorted((a, b) => {
    //     if(typeof a[prop] == 'string') return a[prop].localeCompare(b[prop]));
    //     return this.toSorted
};

Array.prototype.findBy = function(prop, value){
    return this.find(item => item[prop] == value);
};    

const hong = {id: 1, name: 'Hong', dept: 'HR'};
const kim = {id: 2, name: 'Kim', dept: 'Server'};
const lee = {id: 3, name: 'Lee', dept: 'Front'};
const park = {id: 4, name: 'Park', dept: 'HR'};
const ko = {id: 7, name: 'Ko', dept: 'Server'};
const loon = {id: 6, name: 'Loon', dept: 'Sales'};
const choi = {id: 5, name: 'Choi', dept: 'Front'};
const users = [ hong, kim, lee, park, ko, loon, choi ];
// const uniqDepts = users.uniqBy('dept'); // [ 'HR', 'Server', 'Front', 'Sales' ]
// console.log('uniqDepts:', uniqDepts);
const hrUsers = users.filterBy('dept', 'HR');
console.log(hrUsers);
console.log('SortByName>>', users.sortBy('name'));
console.log('SortById', users.sortBy('id', 'desc'));
