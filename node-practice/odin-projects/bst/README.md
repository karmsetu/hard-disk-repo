# how to make a tree
[main ref.](https://www.youtube.com/watch?v=5cU1ILGy6dM)

# what is a balanced binary Search Tree

1. height of left & right subtree differ by atleast one

# algorithem
## [ref.](https://youtu.be/VCTP81Ij-EM?si=ycibUhVIIZBWyDZ0&t=143)
1. start at 0, end = len of array -1
2. mid = (start+end)/2
3. create a tree node with mid as root
4. recursevely do the following steps:
    - calc mid of left subtree and make it root
    - calc mid of right subtree and make it root

## issue01-`syntaxError: Cannot use import statement outside a module`
```bash
syntaxError: Cannot use import statement outside a module
```
## fix01
    [web ref](https://dirask.com/posts/Node-js-export-class-from-module-DnzBED)
## fix02 -prettyPrint()
[website ref.](https://www.theodinproject.com/lessons/javascript-binary-search-trees)