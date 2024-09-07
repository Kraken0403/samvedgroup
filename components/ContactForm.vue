<template>
  <div class="contact-form" data-scroll-section>
    <div class="container-wide">
      <div class="cf-wrapper">
        <div class="cf-details">
          <div class="cf-detail-card">
            <h2>Our Address</h2>
            <p>
              SAMVED INFRA, Shop No 10, 1st Floor, City Light Complex, T B Road, Vijapur, Vajapur, Mahesana, Gujarat, 382875
            </p>
          </div>
          <div class="cf-detail-card">
            <h2>Contact Details</h2>
            <p>
              salessamvedgroup@gmail.com<br />
              +91-9909223336<br />
              +91-9512447776
            </p>
          </div>
          <div class="cf-detail-card">
            <h2>Our Socials</h2>
            <div class="social-icons">
              <Icon name="uil:instagram" />
              <Icon name="uil:facebook" />
              <Icon name="uil:linkedin" />
            </div>
          </div>
        </div>
        <div class="cf-form">
          <form name="contact" method="POST" data-netlify="true" @submit="handleSubmit" netlify>
            <!-- Hidden field to specify the form name -->
            <input type="hidden" name="form-name" value="contact" />

            <div class="form-group">
              <h2>Fill up the form</h2>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="num" placeholder="Mobile Number" required />
              <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
              <!-- <Button buttonText="Submit" type="submit"/> -->
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formRef = ref(null);

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = formRef.value;
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    body: formData,
  })
    .then(() => {
      alert('Form submitted successfully!');
      form.reset(); // Reset form fields
    })
    .catch((error) => {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form. Please try again.');
    });
};
</script>

<style lang="scss" src="./ContactForm.scss" scoped></style>
