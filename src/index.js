// index.js가 모든 js를 호출하고 있어서 "입구"역할을 한다. 우리는 이것을 entry file이라고 한다.
import hello_word from "./hello";
import world_word from "./world";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;
