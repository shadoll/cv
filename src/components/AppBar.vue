<template>
    <v-app-bar
        app
        clipped-left
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/id/180/1920/1080"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques"
    >
        <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(53,60,79,0.8), rgba(73,80,99,0.7)"
            ></v-img>
        </template>
        <v-app-bar-nav-icon
            @click.stop="miniVariant = !miniVariant"
        ></v-app-bar-nav-icon>

        <v-toolbar-title
            style="
                font-family: 'Poiret One', sans-serif;
                font-size: 3rem;
                text-shadow: #694800 1px 1px 6px;
            "
            class="amber--text text--darken-2"
        >
            <v-row no-gutters>
                <v-col no-gutters cols="12" sm="2">
                    <v-avatar size="100">
                        <g-image src="~/assets/images/avatar.png"></g-image>
                    </v-avatar>
                </v-col>
                <v-col no-gutters cols="12" sm="10"
                    ><v-row no-gutters
                        ><v-col no-gutters cols="12" sm="12">
                            {{ $t("about.name") }}</v-col
                        >
                        <v-col
                            no-gutters
                            cols="12"
                            sm="12"
                            style="font-size: 1.6rem; line-height: 0.1rem"
                            class="white--text"
                        >
                            {{ $t("about.trade") }}
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <ColorSwitcher />
        <LocaleSwitcher />
        <!-- <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
    </v-app-bar>
</template>

<script>
    import LocaleSwitcher from "~/components/LocaleSwitcher";
    import ColorSwitcher from "~/components/ColorSwitcher";
    export default {
        components: {
            LocaleSwitcher,
            ColorSwitcher,
        },
        data: () => ({
            miniVariant: false
        }),
    };
</script>