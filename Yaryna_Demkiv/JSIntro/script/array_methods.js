function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];
    console.log(classes);
    for (let i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); // и обновить свойство
}

let obj = {
    className: 'open menu menu'
};

console.log(obj.className);
addClass(obj, null);
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1); // удалить класс
            i--; // (*)
        }
    }
    obj.className = classes.join(' ');

}

console.log(obj.className);
removeClass(obj, 'blabla');
removeClass(obj, 'menu');




var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    console.log ( list.value ); // (1)

    if (list.next) {
        printList(list.next); // (2)
    }

}

console.log (printList(list));


