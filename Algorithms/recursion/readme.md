# What is recursion?

Recursion is a process of calling itself. A function that calls itself is called a recursive function.

## The syntax for recursive function is:

![example](https://raw.githubusercontent.com/Moganesan/DSA/master/Algorithms/recursion/examples/basicrecursivefunc.png)

Here, the `recurse()` function is a recursive function. It is calling itself inside the function.

![example](https://cdn.programiz.com/sites/tutorial2program/files/javascript-recursion.png)

A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

Once the condition is met, the function stops calling itself. This is called a base condition.

To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

So, it generally looks like this.

![example](https://raw.githubusercontent.com/Moganesan/DSA/master/Algorithms/recursion/examples/recursivefucwithend.png)
