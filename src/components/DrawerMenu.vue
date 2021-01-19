<template>
    <div class="gnbArea">
        <button type="button" class="buttonGnbClose">닫기</button>
        <a role="button" class="buttonGoHome">홈으로</a>
        <div class="menus">
            <img src="../assets/images/gnb01.jpg" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DrawerMenu extends Vue {}
</script>

<style lang="scss">
.gnbArea {
    transition: right 0.5s;
    position: fixed;
    right: -100%;
    top: 0;
    overflow-y: auto;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #fff;

    .buttonGnbClose {
        position: absolute;
        z-index: 110;
        left: 0;
        top: 0;
        width: 100px;
        height: 65px;
        background-color: transparent;
        color: transparent;
        font-size: 12px;
    }

    .buttonGoHome {
        display: block;
        position: absolute;
        z-index: 30;
        background-color: transparent;
        right: 50px;
        top: 12px;
        width: 50px;
        height: 50px;
        color: transparent;
    }

    .menus {
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
