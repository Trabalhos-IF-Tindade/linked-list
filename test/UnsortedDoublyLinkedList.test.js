const UnsortedDoublyLinkedList = require('../src/UnsortedList.js');
const Node = require('../src/Node.js');

describe('UnsortedDoublyLinkedList', () => {
    let lista;

    beforeEach(() => {
        lista = new UnsortedDoublyLinkedList();
    });

    // Testes para inicialização
    test('deve inicializar com first, last e pointer nulos', () => {
        expect(lista.first).toBeNull();
        expect(lista.last).toBeNull();
        expect(lista.pointer).toBeNull();
    });

    // Testes para o método append
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

    // Testes para o método prepend
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

    // Testes para o método remove
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

    // Testes para o método find
    test('find: deve encontrar um valor existente', () => {
        lista.append(1);
        lista.append(2);
        expect(lista.find(2)).toBe(2);
    });

    test('find: deve retornar null para um valor não existente', () => {
        lista.append(1);
        expect(lista.find(3)).toBeNull();
    });

    // Testes para o método clear
    test('clear: deve limpar uma lista não vazia', () => {
        lista.append(1);
        lista.append(2);
        lista.clear();
        expect(lista.first).toBeNull();
        expect(lista.last).toBeNull();
        expect(lista.pointer).toBeNull();
    });

    // Testes para os métodos listContent e listContentReverse
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

    // Testes para os métodos de navegação getNextElement e getPreviousElement
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
    
        // Avança para o segundo e depois para o terceiro elemento
        lista.getNextElement(); // Aponta para 1
        lista.getNextElement(); // Aponta para 2
    
        // Agora deve voltar para o segundo elemento
        expect(lista.getPreviousElement()).toBe(2);
        // Adiciona uma verificação para o próximo elemento
        expect(lista.getPreviousElement()).toBe(1); // Retornando ao primeiro
    });
    

    // Testes para o método clearNavigation
    test('clearNavigation: deve reiniciar o ponteiro para o primeiro elemento', () => {
        lista.append(1);
        lista.append(2);
        lista.append(3);
        lista.getNextElement();
        lista.getNextElement(); // Avança para o segundo elemento
        lista.clearNavigation();
        expect(lista.pointer.getValue()).toBe(1); // Ponteiro deve ser reiniciado para o primeiro elemento
    });

    test('clearNavigation: deve funcionar em uma lista vazia', () => {
        lista.clearNavigation();
        expect(lista.pointer).toBeNull(); // Ponteiro deve continuar nulo
    });
});
