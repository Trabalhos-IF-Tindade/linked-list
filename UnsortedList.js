import Node from "./Node.js"

class UnsortedDoublyLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.pointer = null;
    }

    append(value) {

        const newNode = new Node(value);

        if (this.first == null) {
            newNode.previous = null
            this.first = newNode;
            this.last = newNode;
            this.pointer = newNode;

        } else {

            this.last.next = newNode;
            newNode.previous = this.last.getValue()
            this.last = newNode;

        }
    }

    prepend(value) {

        const newNode = new Node(value);

        if (this.first == null) {
            newNode.previous = null
            this.first = newNode;
            this.last = newNode;
            this.pointer = newNode;

        } else {
            newNode.next = this.first;
            this.first.previous = newNode.getValue()
            this.first = newNode;
        }
    }

    remove(value) {
        if (this.first == null || this.last == null) {
            return false;
        }
        if (this.first.getValue() === value) {
            this.first.next.previous = null
            this.first = this.first.next;
            return true;
        } 

        let element = this.first
        let previousNode = null;

        while (element != null) {
            let currentValue = element.getValue();

            if (currentValue === value) {
                previousNode.next = element.next;
                element.next.previous = previousNode.getValue()
                element = null;
                return true;
            }
            previousNode = element
            element = element.next
        }

        return false
    }

    find(value) {
        throw new Error("Unimplemented method 'find'");
    }

    clear() {
        throw new Error("Unimplemented method 'clear'");
    }

    listContent() {
        throw new Error("Unimplemented method 'listContent'");
    }

    listContentReverse() {
        throw new Error("Unimplemented method 'listContentReverse'");
    }

    clearNavigation() {
        throw new Error("Unimplemented method 'clearNavigation'");
    }

    getNextElement() {
        throw new Error("Unimplemented method 'getNextElement'");
    }

    getPreviousElement() {
        throw new Error("Unimplemented method 'getPreviousElement'");
    }
}

let a = new UnsortedDoublyLinkedList();

a.append(1);
a.append(2);
a.append(3);
a.remove(1)
console.log(JSON.stringify(a.first));
