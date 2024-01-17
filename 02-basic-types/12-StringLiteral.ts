// The string literal types allow you to define a type that accepts only one specified string literal.

let click = 'click'

click = 'click'  // valid

click = 'dbclick'  // error


let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error




// If you use the string literal types in multiple places, they will be very verbose.

// To avoid this, you can use the type aliases. For example:

    // type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
    // let mouseEvent: MouseEvent;
    // mouseEvent = 'click'; // valid
    // mouseEvent = 'dblclick'; // valid
    // mouseEvent = 'mouseup'; // valid
    // mouseEvent = 'mousedown'; // valid
    // mouseEvent = 'mouseover'; // compiler error

    // let anotherEvent: MouseEvent;