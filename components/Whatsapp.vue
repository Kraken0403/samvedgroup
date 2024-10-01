<template>
    <div class="wa">
        <div class="container-fluid">
            <div class="whatsapp-button">
                <a href="https://api.whatsapp.com/send?phone=919512447776&text=Hello!" target="_blank">
                    <Icon name="uil:whatsapp" style="{color: '#0000000'}" />
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
        right: 20px;
        top: 30%;
        z-index: 1000;
        width: 45px;
        height: 45px;

        span {
            font-size: 45px;
            background: rgb(202, 202, 202);
        }
    }



    .whatsapp-button a img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        background: transparent;
        transition: all 0.3s ease;
    }

    .whatsapp-button a img:hover {
        transform: scale(1.1);
    }
</style>