import Vue from "vue";
import { mount } from "@vue/test-utils";
import VeeValidate from "vee-validate";
import ContactForm from "@/components/ContactForm";

Vue.use(VeeValidate, {
  classes: true
});

describe("ContactForm", () => {
  const wrapper = mount(ContactForm);
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      '<h3 class="text-center mb-4">Request a callback</h3>'
    );
  });
});
