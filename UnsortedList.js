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
            newNode.previous = this.last
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
            this.first.previous = newNode
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
                element.next.previous = previousNode
                element = null;
                return true;
            }
            previousNode = element
            element = element.next
        }

        return false
    }

    find(value) {
        let element = this.first;

        while (element != null) {
            let currentValue = element.getValue();

            if (currentValue === value) {
                return currentValue;
            }

            element = element.next;
        }
        return null;
    }

    clear() {
        this.first = null;
        this.last = null;
        this.pointer = null;
    }

    listContent() {
        
        let content = '';
        let element = this.first;

        while(element !=null){
            content += element.getValue();
            if(element.next != null){
                content += ' <-> '
            }

            element = element.next;
        }

        return `null <- ${content} -> null`
    }

    listContentReverse() {
        let content = '';
        let element = this.first;

        while(element !=null){
            content += element.getValue();
            if(element.next != null){
                content += '<->'
            }

            element = element.next;
        }

        let array = content.split('<->');
        array.reverse()

        let novaString = array.toString()
        novaString = novaString.replace(/,/g, ' <-> ');

        return `null <- ${novaString} -> null`
    }

    clearNavigation() {
        this.pointer = this.first;
    }

    getNextElement() {
        if (this.first == null || this.last == null) {
            return null;
        }

        if (this.pointer == null) {
            return null;
        }

        let value = this.pointer.getValue();
        this.pointer = this.pointer.next;
        return value;
    }


    getPreviousElement() {
        if (this.first == null || this.last == null) {
            return null;
        }

        if (this.pointer == null) {
            return null;
        }
        let value = this.pointer.getValue();
        this.pointer = this.pointer.previous;
        return value;
    }
}

let a = new UnsortedDoublyLinkedList();

a.append(1);
a.append(2);
a.append(3); 
console.log(a.listContent())
a.append(10); 
console.log(a.listContent())
a.getNextElement()
a.getNextElement()
console.log(a.pointer.getValue())
a.getNextElement()
console.log(a.pointer.getValue())
a.getPreviousElement()
console.log(a.pointer.getValue())
a.remove(3)
console.log(a.pointer.getValue())
console.log(a.listContent())
console.log(a.listContentReverse())
