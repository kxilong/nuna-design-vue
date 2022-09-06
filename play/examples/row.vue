<template>
    <n-divider orientation="left">Normal</n-divider>
    <n-row type="flex" :gutter="16">
        <n-col :span="6" :order="4"><div class="height">4 col-order-responsive</div></n-col>
        <n-col :span="6" :order="3"><div class="height">3 col-order-responsive</div></n-col>
        <n-col :span="6" :order="2"><div class="height">2 col-order-responsive</div></n-col>
        <n-col :span="6" :order="1">
            <div class="height">1 col-order-responsive</div>
        </n-col>
    </n-row>
</template>

<style scoped>
.height {
    background: rgb(0 146 255 / 75%);
    color: #fff;
}
.height-50 {
    height: 50px;
    line-height: 50px;
}

.height-80 {
    height: 80px;
    line-height: 80px;
}

.height-100 {
    height: 100px;
    line-height: 100px;
}

.height-120 {
    height: 120px;
    line-height: 120px;
}
</style>
