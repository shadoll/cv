<template>
    <s-card
        :params="{
            class: 'mt-0',
            width: '100%',
        }"
        name="technologies"
    >
        <v-col v-for="(tech, k) in $t('tech')" :key="k">
            <v-subheader>{{ tech.group }}</v-subheader>
            <v-chip-group column>
                <v-chip
                    v-for="(tech, k) in tech.list"
                    :key="k"
                    class="ma-1"
                    :color="textcolor"
                    outlined
                    @click="newTab(tech.url)"
                >
                    <v-icon left>{{ tech.icon }}</v-icon>
                    {{ tech.title }}
                </v-chip>
            </v-chip-group>
        </v-col>
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
        methods: {
            newTab: function (url) {
                if (url !== undefined && url != "") {
                    window.open(encodeURI(url), "_blank");
                }
            },
        },
    };
</script>


<style>
    .v-chip-group {
        margin-top: -15px;
    }
</style>
