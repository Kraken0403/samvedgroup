<template>
    <div data-scroll-section>
        <div class="container-wide">
            <div class="cp-content">
            <div class="cp-content-form">
                <form action="">
                    <div class="form-row">
                        <input type="text" name="name" required placeholder="Name">
                        <input type="text" name="company" required placeholder="Company Name">
                        <input type="email" name="email" required placeholder="Email">
                        <input type="tel" name="tel" required placeholder="Mobile Number">
                        <textarea name="address" id="address" cols="30" rows="5" placeholder="Address" required />
                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Write a Message"  />
                        <Button buttonText="submit" ></Button>
                        <div class="form-text">
                            <h5>Terms and Conditions</h5>
                            <!-- <p><strong>Commission:</strong> 2% Commission for selling residential or Commercial properties</p>
                            <p><strong>Payment Release:</strong> 100% Commission Release on Agreement to sale (Banakhat) or Sale Deed (Dastavej) whichever is earlier</p> -->
                            <p>*Get in touch with us for channel partner support +91-95124 47776 or email us at info@samvedgroup.com*</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style src="./CpContent.scss" lang="scss" scoped>

</style>