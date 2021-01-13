<template>
    <s-card
        :params="{
            class: 'mt-0',
        }"
        name="about"
    >
        <div class="trade mt-5 mb-5">
            {{ $t("about.trade") }}
        </div>
        <blockquote>
            {{ $t("about.summary") }}
        </blockquote>
    </s-card>
</template>

<script>
    import sCard from "../components/sCard";

    export default {
        components: {
            sCard,
        },
        data: () => ({
            textcolor: "orange",
        }),
    };
</script>