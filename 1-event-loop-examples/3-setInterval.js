// setInterval is asychronous thus invokes after than console.log
setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("I will run first");
// process stays alive unless
// kill process ctrl+c
// unexpected error
