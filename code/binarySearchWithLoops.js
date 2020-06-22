const defaultCompare = (a,b) => {
    if (a > b) return 1;
    else if (a < b) return -1; 
    else return 0;
};
  
/* rules: O(n) | fixed list | loop */

// OPTION - 1

function binarySearchForLoop (
    arr , elm , compare = defaultCompare
  ) {
    let left = 0; 
    let right = arr.length - 1;
  
    for ( left; left <= right; left ) {
        let middle = Math.floor( (right + left) / 2 );
        let arrm = compare( elm,arr[middle] );
        
        if (arrm === -1) {
            console.log('move left ←')
            right = middle - 1;
        } else if (arrm === 1) {
            console.log('move right →')
            left = middle + 1;
        } else {
            console.log('result:', arr[middle])
            return middle;
        }
    }
  
    console.log( 'nope', arr[elm] )
    return -1; 
};

console.log(
    // binarySearchForLoop( [],2 ) // -1
    // binarySearchForLoop( [1],1 ) // 0
    // binarySearchForLoop( [1],2 ) // -1
    // binarySearchForLoop( [1,2,3],2 ) // 1
    // binarySearchForLoop( [1,2,3],3 ) // 2 
    // binarySearchForLoop( [1,2,3],4 ) // -1
    // binarySearchForLoop( [1,2,3,7],3 ) // 2
    // binarySearchForLoop( ['a','d','g','h'],'g' ) // 2
    // binarySearchForLoop( [1,2,3,5,6,7,8],6 ) //
    // binarySearchForLoop( ['a','d','l','p','w','z'],'d' ) //
)

/* ----- */

// OPTION - 2

function binarySearchWhileLoop (
    arr, elm, compare = defaultCompare
) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let middle = Math.floor( (right + left) / 2 );

        switch ( compare( elm,arr[middle] ) ) {
            case -1:
                right = middle - 1;
                break;
            case 1:
                left = middle + 1;
                break;
            default:
                console.log('result:', arr[middle])
                return middle;
        }
    }

    console.log( 'nope', arr[elm] )
    return -1;
};

console.log(
    // binarySearchWhileLoop( [],2 ) // -1
    // binarySearchWhileLoop( [1],1 ) // 0
    // binarySearchWhileLoop( [1],2 ) // -1
    // binarySearchWhileLoop( [1,2,3],2 ) // 1
    // binarySearchWhileLoop( [1,2,3],3 ) // 2 
    // binarySearchWhileLoop( [1,2,3],4 ) // -1
    // binarySearchWhileLoop( [1,2,3,7],3 ) // 2
    binarySearchWhileLoop( ['a','d','g','h'],'g' ) // 2
    // binarySearchWhileLoop( [1,2,3,5,6,7,8],6 ) //
    // binarySearchWhileLoop( ['a','d','l','p','w','z'],'d' ) //
)