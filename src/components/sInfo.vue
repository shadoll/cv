<template>
    <s-card
        :params="{
            class: 'mt-0',
        }"
        name="information"
    >
        <v-list>
            <v-list-item v-for="(info, name) in $t('information')" :key="name">
                <v-list-item-icon class="mt-3 mb-3">
                    <v-icon :color="textcolor">{{ info.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="pt-1 pb-1">
                    <v-list-item-title>
                        {{
                            $t(
                                "information." + name + ".msg",
                                information[name]
                            )
                        }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
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
        computed: {
            lifeyears() {
                // wrong counter, it start from year, not bithday
                return new Date().getFullYear() - 1981;
            },
            lifedays() {
                return Math.round(
                    (new Date().getTime() - new Date("1981/03/01").getTime()) /
                        (1000 * 3600 * 24)
                );
            },
            information() {
                return {
                    age: {
                        years: this.lifeyears,
                        days: this.lifedays,
                    },
                };
            },
        },
    };
</script>
