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
          >
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
</style>
