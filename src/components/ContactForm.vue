<template>
  <div class="contact-form">
    <div class="card card-body">
      <h3 class="text-center mb-4">Request a callback</h3>
      <form>
        <div class="form-group" v-for="form in contactFormData" :key="form.id">
          <label for="fullName">{{ form.name }}</label>
          <input
            class="form-control"
            :type="form.type"
            :name="form.name"
            :placeholder="form.name"
            :id="form.id"
            :aria-describedby="form.id"
            v-validate.continues="form.validation"
            @input="setData(form.id, $event)"
          >
          <ul>
            <li
              v-for="error in errors.collect(form.name)"
              :key="error"
              :class="{ 'error-message': error }"
            >{{ error }}</li>
          </ul>
        </div>
        <input class="btn btn-lg btn-primary" value="Call Me" type="submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm"
};
</script>

<style scoped lang="scss">
li {
  display: block;
}
.dirty {
  border-color: #5a5;
  background: #efe;
  &.invalid {
    color: red;
    border-color: red;
    background: #f998983d;
  }
}
.error-message {
  color: red;
  font-size: 0.9em;
}
.error:focus {
  outline-color: #f99;
}
.btn-primary {
  background-color: #17a2b8;
  border-color: #17a2b8;
}
</style>
