[← previous](../README.md)

# Memory Usage Notes

- each invokation (fn call) is using a smaller array
- assume what is irrelevant in the search has been removed
- new boundaries
  - `left` = 0
    - left most boundary will always remain 0
  - `right` = array.length - 1
    - right most boundary will be the max array limit
- setting up base case
  - array length === 0
    - `return -1` : no searches found
- compute middle
  - `arr.length / 2` : quick search, define the middle
- recursive process
  - the search concept is now different
  - original array index vs new array index
  - make a transformation
    - add left padding to the return value
    - returns index number for the original array 
- subIndex to resolve -1
  - -1 represents as search not found
  - return -1 or output 

---

- simple & a bit more complex
  - simple, during the recursion
    - not passing any extra information
    - not keeping track of irrelevant parts of the array
      - cutting down on the array list
      - invoking with the new array list
    - searching only the sub-set of the array
  - it will require special handling
    - compare if index is not found
    - add left padding onto the index
  - boundary logic got reduced
  - determining middle of array got simplified
- memory usage vs Big O
  - not anymore a `O(n)`
    - using array slice(), makes a new copy of array
    - in time efficiency, it was keeping track from original array
  - memory usage is no longer fixed
    - using array slice() uses another for loop
  - can overcome it, but how
    - regain performance & maintain code solution
---


- fn input
  - the original array input
  - the item you are searching
- fn process
  - to search by binary search
  - minimizing on space usage
- fn output
  - the index number to the original array
  - index number === array item

<!--
Memory Usage
- truncate/shorten the array directly
-->

---

- pros & cons to recursions
  - pros: recursion = implementation detail
  - cons: copying the array you are looking through
  - cons: high memory usage & slow run-time
- experiment on goal
  - merge the performance benefits of sweep algorithm & elegance of split algorithm (recursion)
- this plays with software design
  - not mutating the array you are searching through
    - cutting down parts of the array
    - so the next recursive step will not search through
  - create an array like object
    - responds to a few of the array methods
      - immitate like an array
    - inject to that array-like-object
      - in place of that original array
- modifying the data structure
  - reoccurring theme in software design
    - often, going for the naive solution first
    - you can find ways after the fact 
    - to enhance performance benefits
  - it also turns it into readible code
    - can be resilient for the long-term code base
  - less code vs elegant code
    - there is a conceptual elegance to the solution
    - can make it resilient in larger code bases
    - software design & readibility more imporant vs more performant solution at the start
- array view
  - modularize/externalize one logic
    - made it into a data structure
  - outside of binary search code
- modularize logic (thoughts)
  - are there ways to externalize the logic out of the main code base?
    - e.g: fn that help split/partition the array
      - any code referring to: `left | right | middle`

- build a function wrapper, object
  - wraps around an array
    - responds to only a few methods
  - arguments
    - initial array 
    - boundaries (to trim)
      - start & end
  - returns class/object with 4 methods

- function wrapper methods
  - length === array.length
  - toArray === array.slice(()=>())
  - slice === return new ArrayView
    - e.g: `arr.slice((_s,_e) => ())`
    - it updates the new array within
    - offset the initial parent ArrayView
      - will need to be relative to parent's starting position
      - add padding to parent's starting position
  - get === array's index operator
    - e.g: `arr.get((i) => ())`
    - the following item you will peak at
    - index that get() receives, relative to virtual array
      - the portion of the array allows us to see
      - we still need to do the look-up 
        - from the original array
        - relative to the start position
        - test so it does not pass end position
          - exceed the boundaries of this array

- search step process
  - wrap array in the `arrayView(array)`
    - before invoking `arraySplit(fn(), ...)`
    - e.g: `arraySplit(arrayView(arr), ...args)`
  - transparently inject a different data structure
    - gave back better performance gaurantees?
