<template>
    <v-card flat tile :id="name" v-bind="params">
        <v-card-title class="orange">{{
            $t("cv." + name + ".title")
        }}</v-card-title>
        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: {
            name: "",
            params: {},
        },
        created() {
        },
    };
</script>