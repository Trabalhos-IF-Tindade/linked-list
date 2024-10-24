const UnsortedDoublyLinkedList = require('../src/UnsortedList.js');
const Node = require('../src/Node.js');

describe('UnsortedDoublyLinkedList', () => {
    let lista;

    beforeEach(() => {
        lista = new UnsortedDoublyLinkedList();
    });

    test('deve inicializar com first, last e pointer nulos', () => {
        expect(lista.first).toBeNull();
        expect(lista.last).toBeNull();
        expect(lista.pointer).toBeNull();
    });

    test('append: deve adicionar um único elemento a uma lista vazia', () => {
        lista.append(1);
        expect(lista.first.getValue()).toBe(1);
        expect(lista.last.getValue()).toBe(1);
        expect(lista.pointer.getValue()).toBe(1);
    });

    test('append: deve adicionar múltiplos elementos e atualizar o último', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
        expect(lista.first.getValue()).toBe(1);
        expect(lista.last.getValue()).toBe(3);
    });

    test('prepend: deve adicionar um único elemento a uma lista vazia', () => {
        lista.prepend(1);
        expect(lista.first.getValue()).toBe(1);
        expect(lista.last.getValue()).toBe(1);
    });

    test('prepend: deve adicionar múltiplos elementos no início', () => {
        lista.append(1);
        lista.prepend(2);
        lista.prepend(3);
        expect(lista.first.getValue()).toBe(3);
        expect(lista.last.getValue()).toBe(1);
    });

    test('remove: deve retornar false ao tentar remover de uma lista vazia', () => {
        expect(lista.remove(1)).toBe(false);
    });

    test('remove: deve remover o primeiro elemento', () => {
        lista.append(1);
        lista.append(2);
        lista.remove(1);
        expect(lista.first.getValue()).toBe(2);
    });

    test('remove: deve remover o último elemento', () => {
        lista.append(1);
        lista.append(2);
        lista.remove(2);
        expect(lista.last.getValue()).toBe(1);
    });

    test('remove: deve remover um elemento no meio da lista', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
        lista.remove(2);
        expect(lista.first.next.getValue()).toBe(3);
    });

    test('find: deve encontrar um valor existente', () => {
        lista.append(1);
        lista.append(2);
        expect(lista.find(2)).toBe(2);
    });

    test('find: deve retornar null para um valor não existente', () => {
        lista.append(1);
        expect(lista.find(3)).toBeNull();
    });

    test('clear: deve limpar uma lista não vazia', () => {
        lista.append(1);
        lista.append(2);
        lista.clear();
        expect(lista.first).toBeNull();
        expect(lista.last).toBeNull();
        expect(lista.pointer).toBeNull();
    });

    test('listContent: deve exibir o conteúdo na ordem correta', () => {
        lista.append(1);
        lista.append(2);
        expect(lista.listContent()).toBe('null <- 1 <-> 2 -> null');
    });

    test('listContentReverse: deve exibir o conteúdo na ordem inversa', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
        expect(lista.listContentReverse()).toBe('null <- 3 <-> 2 <-> 1 -> null');
    });

    test('getNextElement: deve retornar o próximo elemento', () => {
        lista.append(1);
        lista.append(2);
        lista.clearNavigation();
        expect(lista.getNextElement()).toBe(1);
        expect(lista.getNextElement()).toBe(2);
    });

    test('getPreviousElement: deve retornar o elemento anterior', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
    
        lista.getNextElement();
        lista.getNextElement(); 
    
        expect(lista.getPreviousElement()).toBe(2);
        expect(lista.getPreviousElement()).toBe(1); 
    });
    

    test('clearNavigation: deve reiniciar o ponteiro para o primeiro elemento', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
        lista.getNextElement();
        lista.getNextElement(); 
        lista.clearNavigation();
        expect(lista.pointer.getValue()).toBe(1); 
    });

    test('clearNavigation: deve funcionar em uma lista vazia', () => {
        lista.clearNavigation();
        expect(lista.pointer).toBeNull();
    });

    //..............................
    test('navigateThroughAllElements: deve navegar por todos os elementos e retornar null no final', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
    
        expect(lista.getNextElement()).toBe(1);
        expect(lista.getNextElement()).toBe(2);
        expect(lista.getNextElement()).toBe(3);
        expect(lista.getNextElement()).toBeNull(); // Checando que chegou ao final da lista
    });
    
    test('navigateThroughElementsAndRestartNavigationPointer: deve reiniciar o ponteiro de navegação corretamente', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
    
        lista.getNextElement();
        lista.getNextElement();
    
        lista.clearNavigation();
    
        expect(lista.getNextElement()).toBe(1);
        expect(lista.getNextElement()).toBe(2);
        expect(lista.getNextElement()).toBe(3);
        expect(lista.getNextElement()).toBeNull();
    });
//................................
test('remove: deve remover o único elemento em uma lista com um elemento', () => {
    lista.append(1);
    expect(lista.remove(1)).toBe(true);
    expect(lista.listContent()).toBe('null <-  -> null');
});

//......................
test('retrieveAnEmptyList: deve retornar conteúdo vazio para uma lista sem elementos', () => {
    expect(lista.listContent()).toBe('null <-  -> null');
});

});
