import type { Deck } from "@/types/deck"

// Helper to create dates
const daysAgo = (days: number) => {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return date.toISOString()
}

const daysFromNow = (days: number) => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toISOString()
}

export const mockDecks: Deck[] = [
  {
    id: "js-basics",
    name: "JavaScript Basics",
    description: "Fundamental concepts of JavaScript programming language",
    category: "Basics",
    createdAt: daysAgo(30),
    updatedAt: daysAgo(2),
    cards: [
      {
        id: "var-let-const",
        question: "What's the difference between var, let, and const?",
        answer:
          "var is function-scoped and can be redeclared. let is block-scoped and can be reassigned but not redeclared. const is block-scoped and cannot be reassigned or redeclared.",
        hasCode: false,
        ease: 2.5,
        interval: 1,
        repetitions: 0,
        dueDate: daysAgo(1),
        lastReviewed: daysAgo(3),
        tags: ["variables", "scope"],
      },
      {
        id: "data-types",
        question: "List the primitive data types in JavaScript.",
        answer: "String, Number, Boolean, Undefined, Null, Symbol, and BigInt.",
        hasCode: false,
        ease: 2.3,
        interval: 2,
        repetitions: 1,
        dueDate: daysAgo(0),
        lastReviewed: daysAgo(2),
        tags: ["data types", "primitives"],
      },
      {
        id: "hoisting",
        question: "What is hoisting in JavaScript?",
        answer:
          "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized.",
        hasCode: false,
        ease: 2.1,
        interval: 3,
        repetitions: 2,
        dueDate: daysFromNow(1),
        lastReviewed: daysAgo(4),
        tags: ["hoisting", "scope"],
      },
    ],
  },
  {
    id: "js-functions",
    name: "JavaScript Functions",
    description: "Different types of functions and their usage in JavaScript",
    category: "Functions",
    createdAt: daysAgo(25),
    updatedAt: daysAgo(1),
    cards: [
      {
        id: "arrow-functions",
        question: "How do arrow functions differ from regular functions?",
        answer:
          "Arrow functions don't have their own 'this' binding, don't have arguments object, can't be used as constructors, and can't be used as methods.",
        hasCode: false,
        ease: 2.5,
        interval: 1,
        repetitions: 0,
        dueDate: daysAgo(0),
        lastReviewed: daysAgo(1),
        tags: ["functions", "arrow functions"],
      },
      {
        id: "closure-example",
        question: "What is a closure in JavaScript? Provide an example.",
        answer:
          "A closure is a function that has access to its own scope, the outer function's variables, and global variables. Example:\n\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",
        hasCode: true,
        ease: 2.2,
        interval: 2,
        repetitions: 1,
        dueDate: daysAgo(0),
        lastReviewed: daysAgo(2),
        tags: ["functions", "closures", "scope"],
      },
    ],
  },
  {
    id: "js-arrays",
    name: "JavaScript Arrays",
    description: "Array methods and operations in JavaScript",
    category: "Arrays",
    createdAt: daysAgo(20),
    updatedAt: daysAgo(3),
    cards: [
      {
        id: "array-methods",
        question: "What's the difference between map(), filter(), and reduce()?",
        answer:
          "map() transforms each element and returns a new array of the same length. filter() creates a new array with elements that pass a test. reduce() accumulates array elements into a single value.",
        hasCode: false,
        ease: 2.5,
        interval: 1,
        repetitions: 0,
        dueDate: daysAgo(0),
        lastReviewed: daysAgo(1),
        tags: ["arrays", "methods"],
      },
      {
        id: "array-destructuring",
        question: "How does array destructuring work in JavaScript?",
        answer:
          "Array destructuring allows you to extract values from arrays and assign them to variables:\n\nconst [a, b, ...rest] = [1, 2, 3, 4, 5];\nconsole.log(a); // 1\nconsole.log(b); // 2\nconsole.log(rest); // [3, 4, 5]",
        hasCode: true,
        ease: 2.3,
        interval: 2,
        repetitions: 1,
        dueDate: daysFromNow(1),
        lastReviewed: daysAgo(2),
        tags: ["arrays", "destructuring", "ES6"],
      },
    ],
  },
  {
    id: "js-async",
    name: "Asynchronous JavaScript",
    description: "Promises, async/await, and handling asynchronous operations",
    category: "Async",
    createdAt: daysAgo(15),
    updatedAt: daysAgo(1),
    cards: [
      {
        id: "promises",
        question: "What is a Promise in JavaScript and what states can it have?",
        answer:
          "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.",
        hasCode: false,
        ease: 2.5,
        interval: 1,
        repetitions: 0,
        dueDate: daysAgo(0),
        lastReviewed: daysAgo(1),
        tags: ["async", "promises"],
      },
      {
        id: "async-await",
        question: "How does async/await work and how does it relate to Promises?",
        answer:
          "async/await is syntactic sugar over Promises. An async function always returns a Promise, and the await keyword can only be used inside async functions. It makes asynchronous code look more like synchronous code:\n\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}",
        hasCode: true,
        ease: 2.2,
        interval: 3,
        repetitions: 2,
        dueDate: daysFromNow(2),
        lastReviewed: daysAgo(3),
        tags: ["async", "async/await", "promises"],
      },
    ],
  },
]
