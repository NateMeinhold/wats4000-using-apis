<template>
  <div class="adjfornoun">
      <h2>Adjectives for a Noun</h2> <!--Adjective for a noun-->
      <p>
       <router-link to="/">Rhymesaurus</router-link>
       </P>
    <form v-on:submit.prevent="findWords">
      <p>Find an adjective for a given noun 
          <input type="text" v-model="noun"> 
          <button type="submit">Search</button></p>
    </form>
    <ul class="results" v-if="results && results.length > 0">
      <li class="item" v-for="(item, index) of results" :key="index">
        <p><strong>{{item.word}}</strong></p>
        <p>{{item.score}}</p>
      </li>
    </ul>

    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdjForNoun',
  data () {
    return {
        results: null, 
        errors: [],
        noun: '',
      
    }
  }, 
  methods: {
  findWords: function() {
    axios.get('https://api.datamuse.com/words', {
      params: {
        rel_jjb: this.noun //change rel_jjb to change to adjectives rel_hom
      }
    })
    .then(response => {
      this.results = response.data;
    })
    .catch(error => {
      this.errors.push(error);
    });
  }
}
    
}
</script>

<style scoped>
.adjfornoun {
  font-size: 1.4rem;
}

input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>
