<template>
    <div class="jd-form">
      <p>
        Bring us your land, and let Samved Group handle the rest.

            For collaboration opportunities, please contact us at +91-9512447776. We offer flexible partnership models based on revenue or construction area (Minimum land size: 7000 sq. ft. in GMC & 10000 sq. ft. in GUDA).
      </p>

      <div class="jd-form-wrapper">
        <form method="post" action="thankyou.php" class="Join_Development" id="Join_Development" onsubmit="return checkForm(this);" autocomplete="off">
            <!-- <p>Request you to kindly fill all the required details.</p> -->
    
            <input type="text" id="name" name="name" placeholder="Name*" />
            <input type="text" name="contact_no" placeholder="Mobile No.*" onkeypress="contact_num_valid(event)" id="contact_no" minlength="10" maxlength="15" />
            <input type="email" id="email" name="email" placeholder="Email ID*" />
            <textarea id="address" name="address" placeholder="Communication Address*"></textarea>
            <input type="text" id="plot_Size" name="plot_Size" placeholder="Plot Size (sq.yard.)*" />
            
            <p>Are you*</p>
            
            <div class="radios">

                    <label class="container-radio">
                    Broker
                    <input type="radio" value="Broker" name="Are_You" />
                    <span class="checkmark"></span>
                    </label>
                    <label class="container-radio">
                    Land Owner
                    <input type="radio" value="Land Owner" name="Are_You" />
                    <span class="checkmark"></span>
                    </label>
                    <label class="container-radio">
                    Other
                    <input type="radio" value="Other" name="Are_You" />
                    <span class="checkmark"></span>
                    </label>
            </div>
            
    
            <textarea id="message" name="message" placeholder="Message"></textarea>
    
            <!-- <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" /> -->
            <input data-v-5d0f7a00="" type="submit" class="submit-btn" value="Submit">
            <!-- <input type="hidden" value="Join_Development" name="type_of_form" /> -->
            <!-- <i class="fa fa-sync" id="form_process"></i> -->
        </form>
      </div>
  
      
    </div>
  </template>
  
  <style scoped src="./JDForm.scss"></style>
  