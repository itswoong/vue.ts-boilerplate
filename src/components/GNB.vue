<template>
    <header class="gnbBox">
        <h1 class="pageTitle">{{ title }}</h1>
        <div class="gnbMenuBox">
            <a href="#" class="buttonAlarm">알람보기</a>
            <button type="button" class="buttonGnb">gnb보기</button>
            <img src="../assets/images/img_gnbarea.jpg" />
        </div>
    </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
    @Prop({ required: true, type: String }) readonly title!: string
}
</script>

<style lang="scss">
.gnbBox {
    position: relative;

    .pageTitle {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        color: #000;
        font-weight: 700;
        line-height: 1.1;
    }
}
</style>
