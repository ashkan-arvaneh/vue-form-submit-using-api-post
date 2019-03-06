<template>
  <div class="contact-page container-fluid py-3 h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-11 card text-white bg-info mb-3">
        <div class="card-body">
          <h5 class="card-title">Making your life easier</h5>
          <p class="card-text">
            Since 2007, we’ve been dedicated to saving UK businesses like yours
            the time, hassle and frustration of dealing with utilities. Whether
            it’s electricity, gas, insurance, phone and broadband, or even
            water, we are your hassle-free and fair alternative to traditional
            suppliers.
          </p>
        </div>
      </div>
      <div class="col-md-6 mx-auto">
        <ContactForm></ContactForm>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "ContactPage",
  components: {
    ContactForm
  }
};
</script>

<style scoped>
.contact-page {
  background-color: #eafdfc;
  background-image: url(../assets/images/bg-01.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
