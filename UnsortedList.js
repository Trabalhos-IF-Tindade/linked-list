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
        
        let content = '';
        let element = this.first;

        while(element !=null){
            content += element.getValue();
            if(element.next != null){
                content += '->'
            }

            element = element.next;
        }

        return content
    }

    listContentReverse() {
        let content = '';
        let element = this.first;

        while(element !=null){
            content += element.getValue();
            if(element.next != null){
                content += '->'
            }

            element = element.next;
        }

        let array = content.split('->');
        array.reverse()

        let novaString = array.toString()
        novaString = novaString.replace(/,/g, '->');

        return novaString;
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
a.append(4);
a.append(5);
//a.remove(1)
console.log(a.listContentReverse());
