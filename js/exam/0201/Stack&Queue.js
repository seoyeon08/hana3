class Collection {
    #arr;
    constructor(...args){
        this.#arr = Array.isArray(args[0] ? args[0] : args);
    }

    get_arr(){
        return this.#arr;
    }

    push(value){
        this.#arr.push(value);
        return this;
    }
    clear(){

    }
    toArray(){
        return ;
    }
    remove(){

    }
    peek(){
        return this.#arr.at( this.isStack() ? -1:0);    //부모 클래스
        // return this._arr.at(0); 자식 클래스
    }
    
    // iterator는 이제 다 generator로 만든다. 2번 문제는 이걸 추가하면 된다. 
    // iterator과 generator 둘 다 사용 가능하다.
    *[Symbol.iterator](){
        for(let i = 0; i < this.ResizeObserver; i += 1){
            yield this._arr[i];
        }
    };


    pull(){

    }
    isStack(){
        return this.constructor.name == 'Stack';
    }
    get isEmpty(){

    }

    get size(){
        return this.#arr?.length;
    }

    toString(){
        return `${this.constructor.name}(${this.size})\n${JSON.stringify(this.#arr)}`
    };
    print(){
        return console.log(this.#arr);
    }
    iterator(){
        return this[Symbol.iterator]();
    }
}

class Stack extends Collection{
    pop(){
        return this.get_arr.pop();
    }
}

class Queue extends Collection {
    enqueue(value){
        this.push(value);
        return this;
    }
    dequeue(){
        return this._arr.shift();
    }
}
const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
console.log('🚀  stack:', stack.toString());
stack.push(3).push(5); // 추가하기
console.log('last pop=', stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.print();

const queue = new Queue();
queue.enqueue(3).enqueue(5); // 추가하기
console.log('last queue=', queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.print();

const itStack = stack.iterator();