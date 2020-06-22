# Algorithm Notes

My notes on learning the rules & flow of using algorithms. I use the binary search algorithm with different strategies. It's to view the characteristics for each style/approach while solving the same problem. The goal is to understand the process of utilizing it as a tool for managing/targeting data.

**Notes:**
[Time Efficiency ](./notes/time-efficiency-notes.md) | 
[Memory Usage](./notes/memory-usage-notes.md)

## Core Rules
- time/speed efficiency or space/memory usage
    - do we care about how long the program took? (time efficient)?
    - do we care how much memory the program used? (memory usage)?
- what is most important for problem at hand?
    - figuring out the trade-offs/comprimises between speed & space
- consider both scenarios
    - ideally have best case scenario 
    - focus on the worst case scenario
- track the growth rates
    - relational graph for number of look-ups (Y) & array length (X)
    - the result will determine the speed/space
- big 'O' notation
    - does not care about constant factors
        - it is not fully focused on specifics
    - e.g: `O(n)` vs `O(1)` | `O(2n)` | `O(n + 1)` | `O(log_n)`
- code's general usage
    - e.g: computer age | programming language | data set

## Terms to Define
- test case | break guard | strategy | exit | growth rate | look-ups | run-time | data set

<!-- 

e.g: "focus on time"
index: 0,1,2,3,4,5,6
arr: [ a,d,e,h,m,p,x ]

'n': 0,1,2, ..., n
O(n): [ a,d,e, ..., x ]

-->