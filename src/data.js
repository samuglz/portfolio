export const skills = [
    {
        icon: 'HTML',
        id: 1,
        description: 'skills.html',
        rate: 4
    },
    {
        icon: 'CSS',
        id: 2,
        description: 'skills.css',
        rate: 4
    },
    {
        icon: 'JS',
        id: 3,
        description: 'skills.js',
        rate: 4
    },
    {
        icon: 'React',
        id: 4,
        description: 'skills.react',
        rate: 3
    },
    {
        icon: 'Vue',
        id: 5,
        description: 'skills.vue',
        rate: 4
    },
    {
        icon: 'Figma',
        id: 6,
        description: 'skills.figma',
        rate: 2
    },
    {
        icon: 'Git',
        id: 7,
        description: 'skills.git',
        rate: 3
    }
];

export const projects = [
    {
        id: 1,
        title: 'Coronavirus Stats',
        readme: 'coronavirus'
    },
    {
        id: 2,
        title: 'Telepharma',
        readme: 'telepharma'
    },
    {
        id: 3,
        title: 'Portfolio',
        readme: 'portfolio'
    }
];

export const packages = {
    coronavirus: `    {
        <strong class="text-red-500">"name"</strong>: <strong class="text-green-500">"react-coronvirus-stats"</strong>,
        <strong class="text-red-500">"homepage"</strong>: <strong class="text-green-500">"<a href="https://coronavirus-status.netlify.app/" target="_blank" class="text-blue-500 hover:underline cursor-pointer">https://coronavirus-status.netlify.app/</a>"</strong>,
        <strong class="text-red-500">"repository"</strong>: {
            <strong class="text-red-500">"type"</strong>: <strong class="text-green-500">"git"</strong>,
            <strong class="text-red-500">"url"</strong>: <strong class="text-green-500">"<a href="https://github.com/samuglz/react-coronavirus-stats" target="_blank" class="text-blue-500 hover:underline cursor-pointer">https://github.com/samuglz/react-coronavirus-stats</a>"</strong>,
        },
        <strong class="text-red-500">"version"</strong>: <strong class="text-green-500">"2.0.0"</strong>,
        <strong class="text-red-500">"dependencies"</strong>: {
           <strong class="text-red-500">"@fortawesome/fontawesome-svg-core"</strong>: <strong class="text-green-500">"^1.2.28"</strong>,
           <strong class="text-red-500">"@fortawesome/free-solid-svg-icons"</strong>: <strong class="text-green-500">"^5.13.0"</strong>,
           <strong class="text-red-500">"@fortawesome/react-fontawesome"</strong>: <strong class="text-green-500">"^0.1.9"</strong>,
           <strong class="text-red-500">"@testing-library/jest-dom"</strong>: <strong class="text-green-500">"^4.2.4"</strong>,
           <strong class="text-red-500">"@testing-library/react"</strong>: <strong class="text-green-500">"^9.5.0"</strong>,
           <strong class="text-red-500">"@testing-library/user-event"</strong>: <strong class="text-green-500">"^7.2.1"</strong>,
           <strong class="text-red-500">"axios"</strong>: <strong class="text-green-500">"^0.21.1"</strong>,
           <strong class="text-red-500">"classnames"</strong>: <strong class="text-green-500">"^2.2.6"</strong>,
           <strong class="text-red-500">"leaflet"</strong>: <strong class="text-green-500">"^1.6.0"</strong>,
           <strong class="text-red-500">"lodash"</strong>: <strong class="text-green-500">"^4.17.15"</strong>,
           <strong class="text-red-500">"mobx"</strong>: <strong class="text-green-500">"^5.15.4"</strong>,
           <strong class="text-red-500">"mobx-react-lite"</strong>: <strong class="text-green-500">"^1.5.2"</strong>,
           <strong class="text-red-500">"react"</strong>: <strong class="text-green-500">"^16.13.1"</strong>,
           <strong class="text-red-500">"react-dom"</strong>: <strong class="text-green-500">"^16.13.1"</strong>,
           <strong class="text-red-500">"react-leaflet"</strong>: <strong class="text-green-500">"^2.7.0"</strong>,
           <strong class="text-red-500">"react-router-dom"</strong>: <strong class="text-green-500">"^5.2.0"</strong>,
           <strong class="text-red-500">"react-scripts"</strong>: <strong class="text-green-500">"3.4.1</strong>"
        },
        <strong class="text-red-500">"scripts"</strong>: {
           <strong class="text-red-500">"start"</strong>: <strong class="text-green-500">"npm run build:style && react-scripts start"</strong>,
           <strong class="text-red-500">"build"</strong>: <strong class="text-green-500">"react-scripts build"</strong>,
        },
        <strong class="text-red-500">"devDependencies"</strong>: {
           <strong class="text-red-500">"autoprefixer"</strong>: <strong class="text-green-500">"^9.8.0"</strong>,
           <strong class="text-red-500">"postcss-cli"</strong>: <strong class="text-green-500">"^7.1.1"</strong>,
           <strong class="text-red-500">"tailwindcss"</strong>: <strong class="text-green-500">"^1.4.6"</strong>,
           <strong class="text-red-500">"typescript"</strong>: <strong class="text-green-500">"^3.9.3"</strong>
        }
     }`,
    telepharma: `   {
        <strong class="text-red-500">"name"</strong>: <strong class="text-green-500">"telepharma"</strong>,
        <strong class="text-red-500">"homepage"</strong>: <strong class="text-green-500">"<a href="https://telepharma.netlify.app" target="_blank" class="text-blue-500 hover:underline cursor-pointer">https://telepharma.netlify.app</a>"</strong>,
        <strong class="text-red-500">"repository"</strong>: {
            <strong class="text-red-500">"type"</strong>: <strong class="text-green-500">"git"</strong>,
            <strong class="text-red-500">"url"</strong>: <strong class="text-green-500">"<a href="https://github.com/samuglz/Telepharma" target="_blank" class="text-blue-500 hover:underline cursor-pointer">https://github.com/samuglz/Telepharma</a>"</strong>,
        },
        <strong class="text-red-500">"version"</strong>: <strong class="text-green-500">"0.1.0"</strong>,
        <strong class="text-red-500">"scripts"</strong>: {
          <strong class="text-red-500">"serve"</strong>: <strong class="text-green-500">"vue-cli-service serve"</strong>,
          <strong class="text-red-500">"build"</strong>: <strong class="text-green-500">"vue-cli-service build"</strong>,
          <strong class="text-red-500">"lint"</strong>: <strong class="text-green-500">"vue-cli-service lint</strong>"
        },
        <strong class="text-red-500">"dependencies"</strong>: {
          <strong class="text-red-500">"@fortawesome/fontawesome-svg-core"</strong>: <strong class="text-green-500">"^1.2.28"</strong>,
          <strong class="text-red-500">"@fortawesome/free-solid-svg-icons"</strong>: <strong class="text-green-500">"^5.13.0"</strong>,
          <strong class="text-red-500">"@fortawesome/vue-fontawesome"</strong>: <strong class="text-green-500">"^0.1.9"</strong>,
          <strong class="text-red-500">"@stripe/stripe-js"</strong>: <strong class="text-green-500">"^1.5.0"</strong>,
          <strong class="text-red-500">"axios"</strong>: <strong class="text-green-500">"^0.19.2"</strong>,
          <strong class="text-red-500">"core-js"</strong>: <strong class="text-green-500">"^3.6.4"</strong>,
          <strong class="text-red-500">"jsonwebtoken"</strong>: <strong class="text-green-500">"^8.5.1"</strong>,
          <strong class="text-red-500">"tailwindcss"</strong>: <strong class="text-green-500">"^1.4.6"</strong>,
          <strong class="text-red-500">"uniqid"</strong>: <strong class="text-green-500">"^5.2.0"</strong>,
          <strong class="text-red-500">"vue"</strong>: <strong class="text-green-500">"^2.6.11"</strong>,
          <strong class="text-red-500">"vue-js-modal"</strong>: <strong class="text-green-500">"^2.0.0-rc.3"</strong>,
          <strong class="text-red-500">"vue-router"</strong>: <strong class="text-green-500">"^3.1.6"</strong>,
          <strong class="text-red-500">"vue-sweetalert2"</strong>: <strong class="text-green-500">"^3.0.5"</strong>,
          <strong class="text-red-500">"vuex"</strong>: <strong class="text-green-500">"^3.4.0</strong>"
        },
        <strong class="text-red-500">"devDependencies"</strong>: {
          <strong class="text-red-500">"@fullhuman/postcss-purgecss"</strong>: <strong class="text-green-500">"^2.2.0"</strong>,
          <strong class="text-red-500">"@vue/cli-plugin-babel"</strong>: <strong class="text-green-500">"~4.3.0"</strong>,
          <strong class="text-red-500">"@vue/cli-plugin-eslint"</strong>: <strong class="text-green-500">"~4.3.0"</strong>,
          <strong class="text-red-500">"@vue/cli-plugin-router"</strong>: <strong class="text-green-500">"~4.3.0"</strong>,
          <strong class="text-red-500">"@vue/cli-plugin-vuex"</strong>: <strong class="text-green-500">"~4.3.0"</strong>,
          <strong class="text-red-500">"@vue/cli-service"</strong>: <strong class="text-green-500">"~4.3.0"</strong>,
          <strong class="text-red-500">"@vue/eslint-config-prettier"</strong>: <strong class="text-green-500">"^6.0.0"</strong>,
          <strong class="text-red-500">"babel-eslint"</strong>: <strong class="text-green-500">"^10.1.0"</strong>,
          <strong class="text-red-500">"eslint"</strong>: <strong class="text-green-500">"^6.7.2"</strong>,
          <strong class="text-red-500">"eslint-config-prettier"</strong>: <strong class="text-green-500">"^6.11.0"</strong>,
          <strong class="text-red-500">"eslint-plugin-prettier"</strong>: <strong class="text-green-500">"^3.1.1"</strong>,
          <strong class="text-red-500">"eslint-plugin-vue"</strong>: <strong class="text-green-500">"^6.2.2"</strong>,
          <strong class="text-red-500">"postcss-clean"</strong>: <strong class="text-green-500">"^1.1.0"</strong>,
          <strong class="text-red-500">"prettier"</strong>: <strong class="text-green-500">"^1.19.1"</strong>,
          <strong class="text-red-500">"vue-template-compiler"</strong>: <strong class="text-green-500">"^2.6.11"</strong>
        }
      }`,
    portfolio: `   {
        <strong class="text-red-500">"name"</strong>: <strong class="text-green-500">"portfolio"</strong>,
        <strong class="text-red-500">"homepage"</strong>: <strong class="text-green-500">"<a href="http://localhost:3000" target="_blank" class="text-blue-500 hover:underline cursor-pointer">http://localhost:3000</a>"</strong>,
        <strong class="text-red-500">"repository"</strong>: {
            <strong class="text-red-500">"type"</strong>: <strong class="text-green-500">"git"</strong>,
            <strong class="text-red-500">"url"</strong>: <strong class="text-green-500">"<a href="https://github.com/samuglz/Portfolio-2.0" target="_blank" class="text-blue-500 hover:underline cursor-pointer">https://github.com/samuglz/Portfolio-2.0</a>"</strong>,
        },
        <strong class="text-red-500">"version"</strong>: <strong class="text-green-500">"0.0.0"</strong>,
        <strong class="text-red-500">"scripts"</strong>: {
            <strong class="text-red-500">"dev"</strong>: <strong class="text-green-500">"vite"</strong>,
            <strong class="text-red-500">"build"</strong>: <strong class="text-green-500">"vite build"</strong>,
            <strong class="text-red-500">"serve"</strong>: <strong class="text-green-500">"vite preview</strong>"
        },
        <strong class="text-red-500">"dependencies"</strong>: {
            <strong class="text-red-500">"mitt"</strong>: <strong class="text-green-500">"^2.1.0"</strong>,
            <strong class="text-red-500">"vue"</strong>: <strong class="text-green-500">"^3.0.5"</strong>,
            <strong class="text-red-500">"vue-i18n"</strong>: <strong class="text-green-500">"^9.0.0</strong>"
        },
        <strong class="text-red-500">"devDependencies"</strong>: {
            <strong class="text-red-500">"@intlify/vite-plugin-vue-i18n"</strong>: <strong class="text-green-500">"^2.0.4"</strong>,
            <strong class="text-red-500">"@tailwindcss/postcss7-compat"</strong>: <strong class="text-green-500">"^2.0.4"</strong>,
            <strong class="text-red-500">"@vitejs/plugin-vue"</strong>: <strong class="text-green-500">"^1.1.5"</strong>,
            <strong class="text-red-500">"@vue/compiler-sfc"</strong>: <strong class="text-green-500">"^3.0.5"</strong>,
            <strong class="text-red-500">"autoprefixer"</strong>: <strong class="text-green-500">"^9.8.6"</strong>,
            <strong class="text-red-500">"postcss"</strong>: <strong class="text-green-500">"^7.0.35"</strong>,
            <strong class="text-red-500">"prettier"</strong>: <strong class="text-green-500">"^2.2.1"</strong>,
            <strong class="text-red-500">"tailwindcss"</strong>: <strong class="text-green-500">"npm:@tailwindcss/postcss7-compat@^2.0.3"</strong>,
            <strong class="text-red-500">"vite"</strong>: <strong class="text-green-500">"^2.1.2"</strong>
        }
    }`
};
