<template>
    <div class="jd-form">
      <p>
        At Samved Group, we recognize the power of synergy over individual vision.
        We are constantly seeking passionate collaborators who share our commitment to excellence.
        Partner with Samved Group, a leading real estate developer in Ahmedabad, and let's shape
        the city's future together, one landmark at a time.
      </p>

      <div class="jd-form-wrapper">
        <form method="post" action="thankyou.php" class="Join_Development" id="Join_Development" onsubmit="return checkForm(this);" autocomplete="off">
            <!-- <p>Request you to kindly fill all the required details.</p> -->
    
            <input type="text" id="name" name="name" placeholder="Name*" />
            <input type="text" name="contact_no" placeholder="Mobile No.*" onkeypress="contact_num_valid(event)" id="contact_no" minlength="10" maxlength="15" />
            <input type="email" id="email" name="email" placeholder="Email ID*" />
            <textarea id="address" name="address" placeholder="Communication Address*"></textarea>
            <input type="text" id="plot_Size" name="plot_Size" placeholder="Plot Size (sq.yard.)*" />
            
            <p>Permissible Usage*</p>
            
            <div class="radios">

                    <label class="container-radio">
                    Residential
                    <input type="radio" value="Residential" name="Permissible_Usage" />
                    <span class="checkmark"></span>
                    </label>
                    <label class="container-radio">
                    Commercial
                    <input type="radio" value="Commercial" name="Permissible_Usage" />
                    <span class="checkmark"></span>
                    </label>
                    <label class="container-radio">
                    Multi Purpose
                    <input type="radio" value="Multi Purpose" name="Permissible_Usage" />
                    <span class="checkmark"></span>
                    </label>
            </div>
            
    
            <input type="text" id="plot_Loc" name="plot_Loc" placeholder="Plot Location*" />
            <input type="text" id="nearby_Landmark" name="nearby_Landmark" placeholder="Nearby Landmark*" />
            <input type="text" id="town_Planning_Number" name="town_Planning_Number" placeholder="Town Planning Number ( TP )*" />
            <input type="text" id="final_Plot_Number" name="final_Plot_Number" placeholder="Final Plot Number ( FP )*" />
            <input type="text" id="road_Width" name="road_Width" placeholder="Road Width*" />
            <input type="text" id="rate" name="rate" placeholder="Market Rate Of Land ( per sq. yard. )*" />
            <input type="text" id="link" name="link" placeholder="Google Map Link*" />
            <textarea id="message" name="message" placeholder="Remarks"></textarea>
    
            <p id="error_data"></p>
            <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" />
            <input data-v-5d0f7a00="" type="submit" class="submit-btn" value="Submit">
            <input type="hidden" value="Join_Development" name="type_of_form" />
            <i class="fa fa-sync" id="form_process"></i>
        </form>
      </div>
  
      
    </div>
  </template>
  
  <style scoped src="./JDForm.scss"></style>
  