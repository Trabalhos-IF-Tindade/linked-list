class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }
  
    getNext() {
      return this.next;
    }
  
    setNext(next) {
      this.next = next;
    }
  
    getPrevious() {
      return this.previous;
    }
  
    setPrevious(previous) {
      this.previous = previous;
    }
  
    getValue() {
      return this.value;
    }
  
    setValue(value) {
      this.value = value;
    }
  }

  export default Node;
  