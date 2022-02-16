<template>
    <simple>
        <s-side-bar :miniVariant="miniVariant" />
        <s-app-bar bgimage="https://picsum.photos/id/201/1920/1080" />

        <v-main>
            <v-sheet id="scrolling-techniques" class="overflow-y-auto">
                <v-row>
                    <v-col class="md-12">
                        <s-card
                            :params="{
                                class: 'mt-0',
                            }"
                            name="referral"
                        >
                            <div class="mt-5 mb-5">
                                {{ $t("referral.desc") }}
                            </div>
                            <v-item-group
                                v-for="(referrals, k) in $t('referrals')"
                                :key="k"
                            >
                                <v-row>
                                    <v-col md="12">
                                        <v-subheader>{{
                                            referrals.group
                                        }}</v-subheader>
                                    </v-col>
                                    <v-col
                                        v-for="(referral, i) in referrals.list"
                                        :key="i"
                                        cols="12"
                                        md="6"
                                        lg="4"
                                    >
                                        <v-card class="mx-auto" max-width="400">
                                            <v-card-title>
                                                <v-list-item-avatar rounded>
                                                    <g-image
                                                        class="elevation-6"
                                                        :src="
                                                            $func.getImg(
                                                                referral.image
                                                            )
                                                        "
                                                    ></g-image>
                                                </v-list-item-avatar>

                                                {{ referral.title }}
                                            </v-card-title>
                                            <v-card-text>
                                                <div
                                                    class="text-subtitle-1"
                                                    v-text="
                                                        referral.subtitle
                                                            ? referral.subtitle
                                                            : ''
                                                    "
                                                />
                                                <div>
                                                    {{
                                                        referral.description
                                                            ? referral.description
                                                            : ""
                                                    }}
                                                </div>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-list-item class="grow">
                                                    <v-row align="center">
                                                        <v-btn
                                                            text
                                                            @click="
                                                                newTab(
                                                                    referral.url
                                                                )
                                                            "
                                                        >
                                                            <v-icon
                                                                class="mr-1"
                                                            >
                                                                mdi-share-variant
                                                            </v-icon>
                                                            <span
                                                                class="
                                                                    subheading
                                                                "
                                                                >{{
                                                                    $t(
                                                                        "referral.linkButton"
                                                                    )
                                                                }}</span
                                                            >
                                                        </v-btn>
                                                    </v-row>
                                                </v-list-item>
                                            </v-card-actions>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-item-group>
                        </s-card>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-main>
    </simple>
</template>

<script>
    import sSideBar from "~/components/sSideBar";
    import sAppBar from "~/components/sAppBar";
    import sCard from "~/components/sCard";

    export default {
        data: () => ({
            textcolor: "orange",
            miniVariant: false,
        }),
        components: {
            sSideBar,
            sAppBar,
            sCard,
        },
        methods: {
            newTab: function (url) {
                if (url !== undefined && url != "") {
                    window.open(encodeURI(url), "_blank");
                }
            },
        },
        created() {
            let img = this.$func.getImg("bvr.svg");
            console.log(img);
        },
    };
</script>