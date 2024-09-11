<template>
    <div class="wa">
        <div class="container-fluid">
            <div class="whatsapp-button">
                <a href="https://api.whatsapp.com/send?phone=919512447776&text=Hello!" target="_blank">
                    <img src="../assets/images/wa.png" alt="WhatsApp">
                </a>
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

<style lang="scss" scoped>
    .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        width: 60px;
        height: 60px;
    }

    .whatsapp-button a img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        background: #f5f5f5;
        transition: all 0.3s ease;
    }

    .whatsapp-button a img:hover {
        transform: scale(1.1);
    }
</style>