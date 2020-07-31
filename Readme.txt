Resource : 
Codevolution
https://www.youtube.com/watch?v=WBPrJSw7yQA


What?
  Typed superset of javascript


Why?
  Relation to javascript
  Optional static typing and type interface
  Intellepsense IDE support


Environment setup
  Install node.js
  Install typescript
    npm install -g typescript
  Code editor


General
  tsc main --watch -> to watch and automatic compile the file


Variable
  Declaration
    let and const can't redeclare
    let 
      -> without initialization
    const 
      -> must with initialization
      -> can't redeclare
  
  Type
    let isBeginner: boolean = true;
    let total: number = 0;
    let name: string = "Sample";

    // multiple line
    let sentence: string = `My name is ${name}
    I am a beginner in type script`;
    let n: null = null;
    let u: undefined = undefined;


