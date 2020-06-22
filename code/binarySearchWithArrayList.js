const defaultCompare = (a,b) => (
    (a > b) ? 1 : (a < b) ? -1 : 0
);

/* Array Splitting */

// OPTION - 1

function binarySearchArrSplitting ( 
    arr, elm, compare = defaultCompare
) {
    console.log('Goal:', arr,':',elm)
    console.log('break:', arr.length === 0)
    if ( arr.length === 0 ) return -1;
  
    const middle = Math.floor( arr.length / 2 );
    const comparison = compare( elm,arr[middle] );
    
    console.log('found/move:', middle,comparison)
    if ( comparison === 0 ) return middle;
    
    const [ left,right ] = (
      (comparison === -1) 
      ? [ 0,(middle - 1) ] 
      : [ (middle + 1),(arr.length - 1) ]
    );
  
    const subIndex = binarySearchArrSplitting( 
      arr.slice( left,right ), elm,compare
    );
  
    console.log('---')
    console.log('index:', left, right, subIndex)
    return (subIndex === -1) ? -1 : (left + subIndex);
}
  
console.log(
    // binarySearchArrSplitting( [],2 ) // -1
    // binarySearchArrSplitting( [1],1 ) // 0
    // binarySearchArrSplitting( [1],2 ) // -1
    // binarySearchArrSplitting( [1,2,3],2 ) // 1
    // binarySearchArrSplitting( [1,2,3],3 ) // 2 
    // binarySearchArrSplitting( [1,2,3],4 ) // -1
    // binarySearchArrSplitting( [1,2,3,7],3 ) // 2
    // binarySearchArrSplitting( ['a','d','g','h'],'g' ) // 2  
)
  
/* Array View */

// OPTION - 2

let ArrayView = (
    array,
    start = 0,
    end = array.length,
) => ({
    list: array,
    start,
    end,
    length: end - start,
    toArray: () => array.slice(start,end),
    slice: (_start, _end) => (
        ArrayView(array, (start + _start),(end + _end))
    ),
    get: (index) => {
        let realIndex = start + index;
        return (
            (realIndex < end && realIndex >= start)
            ? array[realIndex] : undefined
        );
        // return array[index];
    }
});
  
/* obj: data structure */
function binarySearchArraySplit ( 
    arr, elm, compare = defaultCompare
) {
    console.log('Goal:', arr.list,':',elm)
    console.log('break:', arr.length === 0)
    if ( arr.length === 0 ) return -1;
  
    const middle = Math.floor( arr.length / 2 );
    const comparison = compare( elm,arr.get(middle) );
  
    console.log('found/move:', middle,comparison)
    if ( comparison === 0 ) return middle;
    
    const [ left,right ] = (
        (comparison === -1) 
        ? [ 0,(middle - 1) ] 
        : [ (middle + 1),(arr.length) ]
    );
  
    const subIndex = binarySearchArraySplit( 
        arr.slice( left,right ), elm,compare
    );
  
    console.log('---')
    console.log('index:', left, right, subIndex)
    return (subIndex === -1) ? -1 : (subIndex);
    // return (subIndex === -1) ? -1 : (left + subIndex);
  }
  
function binarySearchArrView ( arr,...args ) {
    return binarySearchArraySplit(ArrayView(arr), ...args)
}
  
console.log(
    // binarySearchArrView( [],2 ) // -1
    // binarySearchArrView( [1],1 ) // 0
    // binarySearchArrView( [1],2 ) // -1
    // binarySearchArrView( [1,2,3],2 ) // 1
    // binarySearchArrView( [1,2,3],3 ) // 2 
    // binarySearchArrView( [1,2,3],4 ) // -1
    // binarySearchArrView( [1,2,3,7],3 ) // 2
    // binarySearchArrView( ['a','d','g','h'],'g' ) // 2  
)
  
/* Array Partition */

// OPTION - 3

let ArrayPartition = (
    array , pivot
) => ({
    left: () => array.slice(0, pivot),
    middle: () => array.get(pivot),
    right: () => array.slice((pivot + 1), array.length)
});
  
/* obj: data structure */
function binarySearchArrPartition (
    arr, elm, compare = defaultCompare
) {
    if (arr.length === 0) return -1;
    
    const middle = Math.floor(arr.length / 2);
    const part = ArrayPartition(arr, middle);
    const comparison = compare(elm, part.middle());
      
    return (
        (comparison === 0) 
        ? (middle) 
        // ? (arr.start + middle) 
        : binarySearchArrPartition(
            ( 
                (comparison === -1) 
                ? part.left() : part.right() 
            ),
            elm, 
            compare
        )
    );
}
  
function binarySearchArrViewAndPartition ( arr,...args ) {
    return binarySearchArrPartition(ArrayView(arr), ...args)
}
  
console.log(
    binarySearchArrViewAndPartition( [],2 ) // -1
    // binarySearchArrViewAndPartition( [1],1 ) // 0
    // binarySearchArrViewAndPartition( [1],2 ) // -1
    // binarySearchArrViewAndPartition( [1,2,3],2 ) // 1
    // binarySearchArrViewAndPartition( [1,2,3],3 ) // 2 
    // binarySearchArrViewAndPartition( [1,2,3],4 ) // -1
    // binarySearchArrViewAndPartition( [1,2,3,7],3 ) // 2
    // binarySearchArrViewAndPartition( ['a','d','g','h'],'g' ) // 2  
)