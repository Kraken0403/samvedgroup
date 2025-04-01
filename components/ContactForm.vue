<template>
  <div class="contact-form">
    <div class="container-wide">
      <div class="cf-wrapper">
        <div class="cf-details">
          <div class="cf-detail-card">
            <h2>Our Address</h2>
            <p> Beside Keshav Aradhyam,
                Kudasan Central(KC), Gandhinagar - 382421, Gujarat 
            </p>
           
          </div>
          <div class="cf-detail-card">
            <h2>Contact Details</h2>
            <p>
              info@samvedgroup.com<br />
              +91-9512447776
            </p>
          </div>
          <div class="cf-detail-card">
            <h2>Our Socials</h2>
            <div class="socials-icons">
              <a href="https://www.facebook.com/profile.php?id=61565955622784">
                <Icon name="uil:facebook" />
              </a>
              <a href="https://www.instagram.com/samvedgroup/">
                <Icon name="uil:instagram" />
              </a>
              <!-- <Icon name="uil:facebook" style="color: white" /> -->
              <a href="https://www.linkedin.com/in/samved-group-272299280/">
                <Icon name="uil:linkedin" />
              </a>
              <a href="https://www.youtube.com/@samvedgroup">
                <Icon name="uil:youtube" />
              </a>
            </div>
             
          </div>
        </div>
        <div class="cf-form">
          <form ref="formRef" @submit.prevent="submitForm">
            <!-- Hidden field to specify the form name -->
            <input type="hidden" name="form-name" value="contact" />

            <div class="form-group">
              <h2>Fill up the form</h2>
              <input type="text" name="name" v-model="form.name" placeholder="Name" required />
              <input type="email" name="email" v-model="form.email" placeholder="Email" required />
              <input type="tel" name="num" v-model="form.num" placeholder="Mobile Number" required />
              <textarea name="message" v-model="form.message" cols="30" rows="10" placeholder="Message" required></textarea>
              <input type="submit" class="submit-btn" value="Submit" />
              <p v-if="result" class="result">{{ result }}</p>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  access_key: "d269f5b0-7525-4d86-b3be-8f1d7d5ecb08",
  subject: "New Submission from Samved Group Contact Page",
  name: "",
  email: "",
  num: "",
  message: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  result.value = "Please wait...";
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    });

    const data = await response.json();

    if (response.ok) {
      result.value = "Form submitted successfully!";
      status.value = "success";
    } else {
      result.value = data.message || "Error submitting form.";
      status.value = "error";
    }
  } catch (error) {
    console.error(error);
    result.value = "Something went wrong!";
    status.value = "error";
  } finally {
    // Reset form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.num = "";
    form.value.message = "";

    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>

<style lang="scss" src="./ContactForm.scss" scoped></style>
