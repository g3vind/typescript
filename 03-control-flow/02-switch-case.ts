// -----------SYNTAX---------------------


/*

        switch ( expression ) {
            case value1:
                // statement 1
                break;
            case value2:
                // statement 2
                break;
            case valueN:
                // statement N
                break;
            default: 
                // 
                break;
        }

 */

let targetId = 'btnDelete'
switch(targetId){
    case'btnUpdate':
        console.log("Button Update")
        break
    case 'btnDelete':
        console.log("Button Delete")
        break
    case 'btnNew':
        console.log("Button New")
        break
}

// Output : Button Delete