# monads tutorial
This is an article to help to teach monads, in javacript, to my coworkers.

### Disclaimer
A friend told me: A monads are a very elegant solution to a problem that you don't have

## Definition.
From wikipedia
 > In functional programming, monads are a way to build computer programs by joining simple components in robust ways. A monad may encapsulate values of a particular data type, creating a new type associated with a specific computation; this computation follows a set of axioms called monad laws. The monad represents computations with a sequential structure: a monad defines what it means to chain operations together. This allows the programmer to build pipelines that process data in a series of steps (i.e. a series of actions applied to the data), in which each action is decorated with the additional processing rules provided by the monad. A monad is defined by a return operator that creates values, and a bind operator used to link the actions in the pipeline.

This is a very good explanation but, how can I use this marvelous thing.

In this article I try to made a simple but useful code to explain the main concepts. I'll scape for mathematical definitions.

## References.
For this article I'm standing on the shoulders of giants.
 1. The best book about functional programming that I read. https://github.com/MostlyAdequate/mostly-adequate-guide
 2. A good article about monads http://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/
 3. An another ;) https://james-forbes.com/?/posts/the-perfect-api
 4. Specification for interoperability of common algebraic structures in JavaScript  https://github.com/fantasyland/fantasy-land

## A monad may encapsulate values of a particular data type
To this example, we use 2 different libraries that complain the fantasy-land  specification "flyd" and "data.task".

```javascript
const flyd = require('flyd')
const Task = require('data.task')
const _ = undefined

// #Constructor
// Stream(2)
const stream = flyd.stream().of(2)
// Task(2)
const task = Task.of(2)
// List(2)
const list = Array.of(2)
```

In this example 3 types are created. All of them encapsulate a simple value
