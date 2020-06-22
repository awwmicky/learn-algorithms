const defaultCompare = (a,b) => {
    return (a > b) ? 1 : (a < b) ? -1 : 0;
};

/* rules: O(n) | time | only recursion */

// OPTION - 1

function binarySearchRecursion ( 
    arr, elm, compare = defaultCompare, 
    left = 0, right = arr.length - 1 
) {
    console.log(left > right)
    if ( left > right ) return -1;

    const middle = Math.floor( (right + left) / 2 );
    const comparison = compare( elm, arr[middle] );
    console.log('L or R:', comparison)

    if (comparison === -1 ) {
        console.log('move left ←', middle)
        return binarySearchRecursion( arr,elm,compare, left,(middle-1) )
    } else if (comparison === 1 ) {
        console.log('move right →', middle)
        return binarySearchRecursion( arr,elm,compare, (middle+1),right )
    } else {
        return middle;
    }
}

console.log(
    // binarySearchRecursion( [],2 ) // -1
    // binarySearchRecursion( [1],1 ) // 0
    // binarySearchRecursion( [1],2 ) // -1
    // binarySearchRecursion( [1,2,3],2 ) // 1
    // binarySearchRecursion( [1,2,3],3 ) // 2 
    // binarySearchRecursion( [1,2,3],4 ) // -1
    // binarySearchRecursion( [1,2,3,7],3 ) // 2
    // binarySearchRecursion( ['a','d','g','h'],'g' ) // 2  
    // binarySearchRecursion( [1,2,3,5,6,7,8],6 ) //
    // binarySearchRecursion( ['a','d','l','p','w','z'],'d' ) //
)

/* ------ */

// OPTION - 2

function binarySearchTailRecursion ( 
    arr, elm, compare = defaultCompare, 
    left = 0, right = arr.length - 1 
) {
    console.log(left > right)
    if ( left > right ) return -1;
  
    const middle = Math.floor( (right + left) / 2 );
    const comparison = compare( elm, arr[middle] );
    console.log('L or R:', comparison)
    
    console.log( comparison === 0 ? middle : '' )
    if ( comparison === 0 ) return middle;
    
    const newBounds = (
        (comparison === -1) 
        ? [ left,(middle - 1) ] 
        : [ (middle + 1),right ]
    );
  
    return binarySearchTailRecursion( 
        arr,elm,compare, ...newBounds
    );
}

console.log(
    // binarySearchTailRecursion( [],2 ) // -1
    // binarySearchTailRecursion( [1],1 ) // 0
    // binarySearchTailRecursion( [1],2 ) // -1
    // binarySearchTailRecursion( [1,2,3],2 ) // 1
    // binarySearchTailRecursion( [1,2,3],3 ) // 2 
    // binarySearchTailRecursion( [1,2,3],4 ) // -1
    // binarySearchTailRecursion( [1,2,3,7],3 ) // 2
    binarySearchTailRecursion( ['a','d','g','h'],'g' ) // 2
    // binarySearchTailRecursion( [1,2,3,5,6,7,8],6 ) //
    // binarySearchTailRecursion( ['a','d','l','p','w','z'],'d' ) //
)