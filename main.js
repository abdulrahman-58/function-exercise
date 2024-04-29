// 1. Basic Function Creation
// function calculateProduct (a: number , b: number){
//     return a * b
// }
// const result = calculateProduct(5,10);
// console.log(result);
// 2. Using Default Parameters
// function greet(name: string , greeting: string ="Hello"): void{
//     console.log(`${greeting}, ${name}`)
// }
// greet("Ameen!");
// greet("Zia!", "Hi");
// 3. Arrow Function Conversion
// let add = (a: number, b: number): number=>{
//     return a + b;
// }
// 4. Implementing a rest parameter
// function sumAll (...ingredients: number[]){
//     console.log(ingredients)
// }
// sumAll(1+2+3);
// sumAll(10+20+30+40+50);
// 5. Function Returning Another Function
// function multipiler(number: number){
//     return function(n: number){
//         return n* number
//     }
// }
// const triple = multipiler(3);
// console.log(triple(5));
// 6. Recursive Function
// function factorial (n: number): number{
//     if (n === 1){
//         return 1;
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5));
// 7. Nested functions-Scoping
// function outerFunction(x: number){
//     const innerFunctionOne = function(): void{
//      x ++;
// }
// const innerFunctionTwo = function(): void{
//      innerFunctionOne();
//      const triple = x * 3;
//      console.log(triple)
// }
// innerFunctionTwo()
// }
// outerFunction(4);
// 8. Anonymous Function And Callbacks
// const anonymousFunction = (arr , callback) => arr.map(callback);
// const numbers = [1,2,3]
// const doubledNumbers = anonymousFunction(numbers, (x)=> x * 2);
// console.log(doubledNumbers)
// 9. Set Timeout Exercise
function simulateDelay(callback) {
    setTimeout(callback, 2000);
}
simulateDelay(function () { return console.log("Data retrieved"); });
