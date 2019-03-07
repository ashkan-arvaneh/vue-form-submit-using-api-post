<template>
  <div class="contact-form">
    <div class="card card-body">
      <h3 class="text-center mb-4">Request a callback</h3>
      <form @submit.prevent="validateBeforeSubmit">
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
        <button class="btn btn-lg btn-primary" type="submit">Call Me</button>
      </form>
    </div>
  </div>
</template>

<script>
import contactFormData from "@/assets/data/contactFormData.js";
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      contactFormData,
      formFields: {
        pGUID: "CFFBF53F-6D89-4B5B-8B36-67A97F18EDEB",
        pAccName: "MicDevtest",
        pPartner: "MicDevtest",
        access_token: "c13766577aa629d1aa9cb0168882b216"
      }
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const payload = qs.stringify(this.formFields);
          axios
            .post(
              "http://mic-leads.dev-test.makeiteasy.com/api/v1/create",
              payload
            )
            .then(result => {
              console.log("hi");
              console.log(result.data);
            })
            .catch(error => console.log(error));

          alert("Form Submitted!");
          return;
        }
      });
    },
    setData(fieldName, event) {
      this.$set(this.formFields, fieldName, event.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  padding-left: 10px;
}
li {
  display: block;
}
.dirty {
  border-color: #5a5;
  background: #efe;
}
.invalid {
  color: red;
  border-color: red;
  background: #f998983d;
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
