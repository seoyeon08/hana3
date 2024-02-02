// Stack

class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "스택이 비어 있습니다.";
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack이 비어있습니다.";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
}

// queue
class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue가 비어있습니다."
        }
        return this.items.shift(); 
    }
    isEmpty(){
        return this.items.length == 0;
    }
}

// stack
const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());

// queue
const queue = new Queue();
queue.enqueue(6); // 추가하기
queue.enqueue(7); // 추가하기
console.log(queue.dequeue());
console.log(queue.dequeue());