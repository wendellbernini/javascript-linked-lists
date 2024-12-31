class Node {
  constructor(value) {
    this.value = value; // Armazena o valor do nó
    this.nextNode = null; // Aponta para o próximo nó (inicialmente, nenhum)
  }
}

class LinkedList {
  constructor() {
    this.head = null; // O primeiro nó da lista (inicia vazio)
  }

  append(value) {
    const newNode = new Node(value); // Cria o novo nó com o valor

    if (this.head === null) {
      // Se a lista estiver vazia
      this.head = newNode; // O novo nó se torna o head
      return;
    }

    let current = this.head; // Começa pelo primeiro nó (head)
    while (current.nextNode !== null) {
      current = current.nextNode; // Avança para o próximo nó
    }
    current.nextNode = newNode; // O último nó agora aponta para o novo nó
  }

  prepend(value) {
    const newNode = new Node(value); // Cria o novo nó
    newNode.nextNode = this.head; // O próximo do novo nó é o atual head
    this.head = newNode; // Atualiza o head para o novo nó
  }

  size() {
    let count = 0;
    let current = this.head; // Começa no head
    while (current !== null) {
      count++; // Incrementa o contador para cada nó
      current = current.nextNode; // Avança para o próximo nó
    }
    return count;
  }

  headNode() {
    return this.head;
    // Função para retornar o primeiro nó
  }

  tail() {
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
    // Função para retornar o último nó
  }

  at(index) {
    let count = 0;
    let current = this.head; // Começa no head
    while (count !== index) {
      count++; // Incrementa o contador para cada nó
      current = current.nextNode; // Avança para o próximo nó
    }
    return current.value;
  }

  pop() {
    let current = this.head;
    let last;

    while (current.nextNode !== null) {
      last = current;
      // console.log(`last: ${last.value}`);
      current = current.nextNode;
    }
    last.nextNode = null;

    // Função para remover o último nó
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
    // Função para verificar se um valor está na lista
  }

  find(value) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (current.value === value) {
        return { valor: current.value, indice: count };
      }
      count++;
      current = current.nextNode;
    }
    return false;
    // Função para retornar o índice de um nó com o valor
  }

  toString() {
    let current = this.head;
    let formato = "";
    while (current !== null) {
      formato += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    formato += `null`;
    return formato;
    // Função para representar a lista como uma string
  }
  insertAt(value, index) {
    const newNode = new Node(value);

    // Caso especial: Inserir no início
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    // Percorrer até o índice desejado
    while (current !== null && count < index) {
      previous = current; // Armazena o nó anterior
      current = current.nextNode;
      count++;
    }

    // Verifica se o índice é válido (não excede o tamanho da lista)
    if (count === index) {
      previous.nextNode = newNode; // Atualiza o ponteiro do nó anterior
      newNode.nextNode = current; // Conecta o novo nó ao próximo nó
    } else {
      console.error("Índice fora dos limites da lista.");
    }
  }
  removeAt(index) {
    if (index < 0) {
      console.error("Índice inválido.");
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    // Caso especial: Remover o primeiro nó
    if (index === 0) {
      this.head = current.nextNode;
      return;
    }

    // Percorre até o índice desejado
    while (current !== null && count < index) {
      previous = current; // Armazena o nó anterior
      current = current.nextNode; // Move para o próximo nó
      count++;
    }

    // Verifica se o índice é válido (não excede o tamanho da lista)
    if (current !== null) {
      previous.nextNode = current.nextNode; // Remove o nó atual ajustando os ponteiros
    } else {
      console.error("Índice fora dos limites da lista.");
    }
  }
}

export { LinkedList };
