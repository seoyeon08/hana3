const hrTeam = {id: 1, dname: '인사팀'};
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];

const hong = {id: 1, name: 'Hong', dept: 1};
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];

const deptMapAnswer = new Map(depts.map(dept => [dept.id, dept]));
const deptMap = new Map(depts.map(dept => [dept.id, dept]));

const empMapAnswer = new Map(emps.map(emp => [emp.id, emp]));
const empMap = new Map(emps.map(emp => [emp.id, emp]));

const empDeptAnswer = new Map()
const empDept = new Map(emps.map(emp => [emp, deptMap.get(emp.dept).dname]));

const empDeptAnswer2 = new Map();
emps.map(emp => [emp, deptMap.get(emp.dept)]);
const xx = emps.map(emp => [
    {id: emp.id, name: emp.name},
    deptMap.get(emp.dept),
]);
// 또 다른 방법으로 푼다면 이거다. destruct 활용
const yy = emps.map(([id, name, dept])=>[
    {id, name}, deptMap.get(dept),
]);

console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
// console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
