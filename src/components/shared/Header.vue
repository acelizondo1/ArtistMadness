<template>
    <div class="top-bar">
        <!-- <div class="top-bar-left">
            <ul class="menu dropdown" data-dropdown-menu>
                <li class="menu-text"><img src="../../images/download.png" alt=""></li>
                <li>
                    <a href="#">Artist Brackets</a>
                    <ul class="menu">
                        <li><a href="#">Kendrick Lamar</a></li>
                        <li><a href="#">Kanye West</a></li>
                    </ul>
                </li>
                <li><a href="#">Create Bracket</a></li>
            </ul>
        </div> -->
        <div class="mainImage">
            <img src="../../images/download.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                foundation: ''
            }
        },
        mixins: [
            require('../../mixins/foundation.js')
        ]
    }
</script>

<style>
    .mainImage{
        margin-left: auto;
        margin-right: auto;
    }

    .mainImage>img{
        height: 8vh;
    }

</style>
