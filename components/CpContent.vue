<template>
    <div data-scroll-section>
        <div class="container-wide">
            <div class="cp-content">
            <div class="cp-content-form">
                <form action="">
                    <div class="form-row">
                        <input type="text" name="name" placeholder="Name">
                        <input type="email" name="email" placeholder="Email">
                        <input type="tel" name="tel" placeholder="Mobile Number">
                        <input type="text" name="companyame" placeholder="Company Name">
                        <Button buttonText="submit"/>
                        
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