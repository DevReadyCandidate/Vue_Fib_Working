<template>

<div>
    <h1>Fibonacci Definition</h1>
    <p>The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers, usually starting with 0 and 1.</p>
<p><strong>Definition:</strong></p>
<p>The Fibonacci Numbers is a sequence of numbers in the following order: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... The next number is found by adding up the two numbers before it. The formula for calculating these numbers is:</p>
<p>F(n) = F(n-1) + F(n-2)</p>
<p>Where:</p>
<ul>
  <li>F(n) is the term number.</li>
  <li>F(n-1) is the previous term (n-1).</li>
  <li>F(n-2) is the term before that (n-2).</li>
</ul>
<p>By definition, the first two numbers in the Fibonacci Sequence are either 0 and 1, or 1 and 1, depending on the chosen starting point of the sequence and each subsequent number is the sum of the previous two numbers.</p>

<p><strong>Business Rule:</strong></p>
<p>The program should return a fibonacci sequence representing values between zero and ten.</p>

<p><strong>Problem:</strong></p>
<p>The code returns an incorrect sequence.</p>

<p><strong>Instruction:</strong></p>
<p>Determine why and return a proper set of Fibonacci Numbers.</p>
<br>
 

    <button class="google-button" @click="searchGoogle">Search Google</button>
  </div>
  <div>
    <h1>Fibonacci Sequence</h1>
    <label>
      Number of terms:
      <input type="number" v-model="numTerms" min="1" max="100">
    </label>
    <button @click="generateSequence">Generate Fib Sequence</button>
    <p v-if="sequence.length > 0">
      The first {{ sequence.length }} numbers in the Fibonacci sequence are:
      <span v-for="(number, index) in sequence" :key="index">{{ number }}</span>
    </p>
    <p v-else>No sequence generated yet.</p>
    
    
  </div>
  <div>
    <button @click="downloadFib">Download Fibonacci Sequence as JSON</button>
    <br> <br>
 


  </div>
 
  

</template>

<script>
import { generateFib } from './main.js';

export default {
  name: 'App',
  data() {
    return {
      numTerms: 10,
      sequence: [],
    };
  },
  methods: {
    generateSequence() {
      let a = 0;
      let b = 1;
      this.sequence = [a, b];

      for (let i = 2; i < this.numTerms; i++) {
        let c = a + b;
        this.sequence.push(c);
        a = b;
        b = c;
      }
    },
    downloadFib() {
    let n = this.numTerms;
    let fib = generateFib(n); // generate Fibonacci sequence
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fib));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'fibonacci.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  },
    searchGoogle() {
      window.open('https://www.google.com/search?q=fibonacci+sequence');
    },
 
  }
}
</script>

 
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
}
h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input[type="number"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
.google-button {
  background-color: green;
}
button:hover {
  background-color: #0069d9;
}
p {
  margin-top: 1rem;
  font-size: 1.2rem;
}
span {
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}
body {
  background-color: grey;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}
</style>
