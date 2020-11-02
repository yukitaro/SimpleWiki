<template>
  <div>
    <b-form-group>
      <b-form-input id="title"></b-form-input>
      <b-form-input id="tag"></b-form-input>
      <b-form-textarea id="content" v-model="text" placeholder="Enter some text..." rows="3"></b-form-textarea>
    </b-form-group>
  </div>
</template>
