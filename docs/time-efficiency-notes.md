[← previous](../README.md)

# Time Efficiency Notes

## Binary Search (example)
- search for the element/item
    - where does this appear on the list?
    - e.g: database, text file, array
- find it is one step of a bigger problem
    - identify your target from a list
        - the faster it finds what you are looking for
        - the faster the program will be for large data sets
- it only works when... 
    - the list  has already been sorted
    - without it, this algorithm won't work

## Strategies
^ **sweeper strategy**
- iterate through the list
    - sweeping from left to right
- until it finds your element/item
    - returns the index number of that element/item
- testing/tracking
    - create some code to implementate & time it **(quick option)**
    - determining if the strategy is good overall **(strategy is the goal)**
    - each time you do a look up of the array, that operation will take 1ms
        - the amount of time it looks up
        - e.g: searching  `1 item === 1 ms`
    - e.g: count how many times we have to examin an element/item in the array
- run-time is linear
    - sweep algorithm run-time is proportional to the array's length
    - corresponding, connected to a constant
    - if an array has the length of 'n' elements/items
        - the run-time will be proportional to 'n'
- how the algorithm performs for large data sets.
        - does the run-time increase in proportion to the data set size? (linear)
        - or does it explode from increases in data-set size?
    - what about checking the last element, before using the sweeping algorithm?
    - we just omit/remove it when we talk about algorithm run-time
- e.g: to check an array of 7 elements
    - first check the last element
    - then do the sweep algorithm
    - return total number of 8 look-ups

^ **splitter strategy**
- run-time is sub-linear, logorithmic
    - splitter === binary search
- repeat the process of checking half way, narrowing it down
- e.g: to find an 7 in [1,2,4,6,7,8]
    - worse case scenario, it could take 3 look-ups
    - versus sweep strategy, 5 look-ups
    - with a large data set
        - split strategy could do 6 look-ups
        - sweep strategy could do 63 look-ups

## Big O of N (examples)
- linear: `O(n)` === `for (let i = 0; i < array.length -1; i++)`
    - goal: just keep it as `O(n)` for making algorithms
    - e.g: 7 elements : 7ms (look-ups)
- `O(2n)` === 2x `for (let i = 0; i < arr.length - 1; i++)`
    - inefficient: 2 full sweeps through array
    - e.g: 7 elements : 14ms (look-ups)
- `O(log2 n)` | `log-base-2 of n` or `O(log n)` | `logarithmic`

## can we do better than O(n)?
- e.g: find your friend Martin in a phonebook
    - imagine an array as a phone book
    - to find your friends phone number will take a long time
- alphabetically, searching
    - you are going to look at the names of the phone book
    - you open half way, see where you land on, then go search left or right