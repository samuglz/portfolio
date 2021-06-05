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
    },
    {
        icon: 'Graphql',
        id: 8,
        description: 'skills.graphql',
        rate: 2
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
    },
    {
        id: 4,
        title: 'InstaUpload (Back)',
        readme: 'instauploadBackend'
    },
    {
        id: 5,
        title: 'InstaUpload (Front)',
        readme: 'instauploadFrontend'
    }
];

export const packages = {
    coronavirus: `{
    <strong class="md:text-base text-xs text-red-400">"name"</strong>: <strong class="md:text-base text-xs text-green-400">"react-coronvirus-stats"</strong>,
    <strong class="md:text-base text-xs text-red-400">"homepage"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://coronavirus-status.netlify.app/" rel="noopener noreferrer" target="_blank" class="text-blue-400 hover:underline cursor-pointer">https://coronavirus-status.netlify.app/</a>"</strong>,
    <strong class="md:text-base text-xs text-red-400">"repository"</strong>: {
        <strong class="md:text-base text-xs text-red-400">"type"</strong>: <strong class="md:text-base text-xs text-green-400">"git"</strong>,
        <strong class="md:text-base text-xs text-red-400">"url"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://github.com/samuglz/react-coronavirus-stats" rel="noopener noreferrer" target="_blank" class="text-blue-400 hover:underline cursor-pointer">https://github.com/samuglz/react-coronavirus-stats</a>"</strong>,
    },
    <strong class="md:text-base text-xs text-red-400">"version"</strong>: <strong class="md:text-base text-xs text-green-400">"2.0.0"</strong>,
    <strong class="md:text-base text-xs text-red-400">"dependencies"</strong>: {
        <strong class="md:text-base text-xs text-red-400">"@fortawesome/fontawesome-svg-core"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.2.28"</strong>,
        <strong class="md:text-base text-xs text-red-400">"@fortawesome/free-solid-svg-icons"</strong>: <strong class="md:text-base text-xs text-green-400">"^5.13.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"@fortawesome/react-fontawesome"</strong>: <strong class="md:text-base text-xs text-green-400">"^0.1.9"</strong>,
        <strong class="md:text-base text-xs text-red-400">"@testing-library/jest-dom"</strong>: <strong class="md:text-base text-xs text-green-400">"^4.2.4"</strong>,
        <strong class="md:text-base text-xs text-red-400">"@testing-library/react"</strong>: <strong class="md:text-base text-xs text-green-400">"^9.5.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"@testing-library/user-event"</strong>: <strong class="md:text-base text-xs text-green-400">"^7.2.1"</strong>,
        <strong class="md:text-base text-xs text-red-400">"axios"</strong>: <strong class="md:text-base text-xs text-green-400">"^0.21.1"</strong>,
        <strong class="md:text-base text-xs text-red-400">"classnames"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.2.6"</strong>,
        <strong class="md:text-base text-xs text-red-400">"leaflet"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.6.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"lodash"</strong>: <strong class="md:text-base text-xs text-green-400">"^4.17.15"</strong>,
        <strong class="md:text-base text-xs text-red-400">"mobx"</strong>: <strong class="md:text-base text-xs text-green-400">"^5.15.4"</strong>,
        <strong class="md:text-base text-xs text-red-400">"mobx-react-lite"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.5.2"</strong>,
        <strong class="md:text-base text-xs text-red-400">"react"</strong>: <strong class="md:text-base text-xs text-green-400">"^16.13.1"</strong>,
        <strong class="md:text-base text-xs text-red-400">"react-dom"</strong>: <strong class="md:text-base text-xs text-green-400">"^16.13.1"</strong>,
        <strong class="md:text-base text-xs text-red-400">"react-leaflet"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.7.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"react-router-dom"</strong>: <strong class="md:text-base text-xs text-green-400">"^5.2.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"react-scripts"</strong>: <strong class="md:text-base text-xs text-green-400">"3.4.1</strong>"
    },
    <strong class="md:text-base text-xs text-red-400">"scripts"</strong>: {
        <strong class="md:text-base text-xs text-red-400">"start"</strong>: <strong class="md:text-base text-xs text-green-400">"npm run build:style && react-scripts start"</strong>,
        <strong class="md:text-base text-xs text-red-400">"build"</strong>: <strong class="md:text-base text-xs text-green-400">"react-scripts build"</strong>,
    },
    <strong class="md:text-base text-xs text-red-400">"devDependencies"</strong>: {
        <strong class="md:text-base text-xs text-red-400">"autoprefixer"</strong>: <strong class="md:text-base text-xs text-green-400">"^9.8.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"postcss-cli"</strong>: <strong class="md:text-base text-xs text-green-400">"^7.1.1"</strong>,
        <strong class="md:text-base text-xs text-red-400">"tailwindcss"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.4.6"</strong>,
        <strong class="md:text-base text-xs text-red-400">"typescript"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.9.3"</strong>
    }
}`,
    telepharma: `{
        <strong class="md:text-base text-xs text-red-400">"name"</strong>: <strong class="md:text-base text-xs text-green-400">"telepharma"</strong>,
        <strong class="md:text-base text-xs text-red-400">"homepage"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://telepharma.netlify.app" rel="noopener noreferrer" target="_blank" class="text-blue-400 hover:underline cursor-pointer">https://telepharma.netlify.app</a>"</strong>,
        <strong class="md:text-base text-xs text-red-400">"repository"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"type"</strong>: <strong class="md:text-base text-xs text-green-400">"git"</strong>,
            <strong class="md:text-base text-xs text-red-400">"url"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://github.com/samuglz/Telepharma" rel="noopener noreferrer" target="_blank" class="text-blue-400 hover:underline cursor-pointer">https://github.com/samuglz/Telepharma</a>"</strong>,
        },
        <strong class="md:text-base text-xs text-red-400">"version"</strong>: <strong class="md:text-base text-xs text-green-400">"0.1.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"scripts"</strong>: {
          <strong class="md:text-base text-xs text-red-400">"serve"</strong>: <strong class="md:text-base text-xs text-green-400">"vue-cli-service serve"</strong>,
          <strong class="md:text-base text-xs text-red-400">"build"</strong>: <strong class="md:text-base text-xs text-green-400">"vue-cli-service build"</strong>,
          <strong class="md:text-base text-xs text-red-400">"lint"</strong>: <strong class="md:text-base text-xs text-green-400">"vue-cli-service lint</strong>"
        },
        <strong class="md:text-base text-xs text-red-400">"dependencies"</strong>: {
          <strong class="md:text-base text-xs text-red-400">"@fortawesome/fontawesome-svg-core"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.2.28"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@fortawesome/free-solid-svg-icons"</strong>: <strong class="md:text-base text-xs text-green-400">"^5.13.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@fortawesome/vue-fontawesome"</strong>: <strong class="md:text-base text-xs text-green-400">"^0.1.9"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@stripe/stripe-js"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.5.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"axios"</strong>: <strong class="md:text-base text-xs text-green-400">"^0.19.2"</strong>,
          <strong class="md:text-base text-xs text-red-400">"core-js"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.6.4"</strong>,
          <strong class="md:text-base text-xs text-red-400">"jsonwebtoken"</strong>: <strong class="md:text-base text-xs text-green-400">"^8.5.1"</strong>,
          <strong class="md:text-base text-xs text-red-400">"tailwindcss"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.4.6"</strong>,
          <strong class="md:text-base text-xs text-red-400">"uniqid"</strong>: <strong class="md:text-base text-xs text-green-400">"^5.2.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"vue"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.6.11"</strong>,
          <strong class="md:text-base text-xs text-red-400">"vue-js-modal"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.0.0-rc.3"</strong>,
          <strong class="md:text-base text-xs text-red-400">"vue-router"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.1.6"</strong>,
          <strong class="md:text-base text-xs text-red-400">"vue-sweetalert2"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.0.5"</strong>,
          <strong class="md:text-base text-xs text-red-400">"vuex"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.4.0</strong>"
        },
        <strong class="md:text-base text-xs text-red-400">"devDependencies"</strong>: {
          <strong class="md:text-base text-xs text-red-400">"@fullhuman/postcss-purgecss"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.2.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-plugin-babel"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.3.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-plugin-eslint"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.3.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-plugin-router"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.3.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-plugin-vuex"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.3.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-service"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.3.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"@vue/eslint-config-prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^6.0.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"babel-eslint"</strong>: <strong class="md:text-base text-xs text-green-400">"^10.1.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"eslint"</strong>: <strong class="md:text-base text-xs text-green-400">"^6.7.2"</strong>,
          <strong class="md:text-base text-xs text-red-400">"eslint-config-prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^6.11.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"eslint-plugin-prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.1.1"</strong>,
          <strong class="md:text-base text-xs text-red-400">"eslint-plugin-vue"</strong>: <strong class="md:text-base text-xs text-green-400">"^6.2.2"</strong>,
          <strong class="md:text-base text-xs text-red-400">"postcss-clean"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.1.0"</strong>,
          <strong class="md:text-base text-xs text-red-400">"prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.19.1"</strong>,
          <strong class="md:text-base text-xs text-red-400">"vue-template-compiler"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.6.11"</strong>
        }
}`,
    portfolio: `{
        <strong class="md:text-base text-xs text-red-400">"name"</strong>: <strong class="md:text-base text-xs text-green-400">"portfolio"</strong>,
        <strong class="md:text-base text-xs text-red-400">"homepage"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://www.samuglz.dev" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline cursor-pointer">www.samuglz.dev</a>"</strong>,
        <strong class="md:text-base text-xs text-red-400">"repository"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"type"</strong>: <strong class="md:text-base text-xs text-green-400">"git"</strong>,
            <strong class="md:text-base text-xs text-red-400">"url"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://github.com/samuglz/portfolio" rel="noopener noreferrer" target="_blank" class="text-blue-400 hover:underline cursor-pointer">https://github.com/samuglz/portfolio</a>"</strong>,
        },
        <strong class="md:text-base text-xs text-red-400">"version"</strong>: <strong class="md:text-base text-xs text-green-400">"0.0.0"</strong>,
        <strong class="md:text-base text-xs text-red-400">"scripts"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"dev"</strong>: <strong class="md:text-base text-xs text-green-400">"vite"</strong>,
            <strong class="md:text-base text-xs text-red-400">"build"</strong>: <strong class="md:text-base text-xs text-green-400">"vite build"</strong>,
            <strong class="md:text-base text-xs text-red-400">"serve"</strong>: <strong class="md:text-base text-xs text-green-400">"vite preview</strong>"
        },
        <strong class="md:text-base text-xs text-red-400">"dependencies"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"dayjs"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.10.4"</strong>,
            <strong class="md:text-base text-xs text-red-400">"mitt"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.1.0"</strong>,
            <strong class="md:text-base text-xs text-red-400">"vue"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.0.5"</strong>,
            <strong class="md:text-base text-xs text-red-400">"vue-i18n"</strong>: <strong class="md:text-base text-xs text-green-400">"^9.0.0</strong>"
        },
        <strong class="md:text-base text-xs text-red-400">"devDependencies"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"@intlify/vite-plugin-vue-i18n"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.0.4"</strong>,
            <strong class="md:text-base text-xs text-red-400">"@tailwindcss/postcss7-compat"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.0.4"</strong>,
            <strong class="md:text-base text-xs text-red-400">"@vitejs/plugin-vue"</strong>: <strong class="md:text-base text-xs text-green-400">"^1.1.5"</strong>,
            <strong class="md:text-base text-xs text-red-400">"@vue/compiler-sfc"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.0.5"</strong>,
            <strong class="md:text-base text-xs text-red-400">"autoprefixer"</strong>: <strong class="md:text-base text-xs text-green-400">"^9.8.6"</strong>,
            <strong class="md:text-base text-xs text-red-400">"postcss"</strong>: <strong class="md:text-base text-xs text-green-400">"^7.0.35"</strong>,
            <strong class="md:text-base text-xs text-red-400">"prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.2.1"</strong>,
            <strong class="md:text-base text-xs text-red-400">"tailwindcss"</strong>: <strong class="md:text-base text-xs text-green-400">"npm:@tailwindcss/postcss7-compat@^2.0.3"</strong>,
            <strong class="md:text-base text-xs text-red-400">"vite"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.1.2"</strong>
        }
}`,
    instauploadBackend: `{
        <strong class="md:text-base text-xs text-red-400">"name"</strong>: <strong class="md:text-base text-xs text-green-400">"backend",</strong>
        <strong class="md:text-base text-xs text-red-400">"repository"</strong>: <strong class="md:text-base text-xs text-green-400">:{</strong>
            <strong class="md:text-base text-xs text-red-400">"type"</strong>: <strong class="md:text-base text-xs text-green-400">"git",</strong>
            <strong class="md:text-base text-xs text-red-400">"url"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://github.com/samuglz/InstaUploader" rel="noopener noreferrer" target="_blank" class="text-blue-400 hover:underline cursor-pointer">https://github.com/samuglz/InstaUploader</a>"</strong>
        },
        <strong class="md:text-base text-xs text-red-400">"version"</strong>: <strong class="md:text-base text-xs text-green-400">"1.0.0",</strong>
        <strong class="md:text-base text-xs text-red-400">"main"</strong>: <strong class="md:text-base text-xs text-green-400">"index.js",</strong>
        <strong class="md:text-base text-xs text-red-400">"scripts"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"start"</strong>: <strong class="md:text-base text-xs text-green-400">"node index.js",</strong>
            <strong class="md:text-base text-xs text-red-400">"dev"</strong>: <strong class="md:text-base text-xs text-green-400">"nodemon index.js"</strong>
        },
        <strong class="md:text-base text-xs text-red-400">"author"</strong>: <strong class="md:text-base text-xs text-green-400">"Samuel Gonzalez",</strong>
        <strong class="md:text-base text-xs text-red-400">"license"</strong>: <strong class="md:text-base text-xs text-green-400">"MIT",</strong>
        <strong class="md:text-base text-xs text-red-400">"devDependencies"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"nodemon"</strong>: <strong class="md:text-base text-xs text-green-400">"2.0.7",</strong>
            <strong class="md:text-base text-xs text-red-400">"prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.2.1"</strong>
        },
        <strong class="md:text-base text-xs text-red-400">"dependencies"</strong>: {
            <strong class="md:text-base text-xs text-red-400">"cors"</strong>: <strong class="md:text-base text-xs text-green-400">"2.8.5",</strong>
            <strong class="md:text-base text-xs text-red-400">"dotenv"</strong>: <strong class="md:text-base text-xs text-green-400">"8.2.0",</strong>
            <strong class="md:text-base text-xs text-red-400">"express"</strong>: <strong class="md:text-base text-xs text-green-400">"4.17.1",</strong>
            <strong class="md:text-base text-xs text-red-400">"express-fileupload"</strong>: <strong class="md:text-base text-xs text-green-400">"1.2.1",</strong>
            <strong class="md:text-base text-xs text-red-400">"morgan"</strong>: <strong class="md:text-base text-xs text-green-400">"1.10.0",</strong>
            <strong class="md:text-base text-xs text-red-400">"uuid"</strong>: <strong class="md:text-base text-xs text-green-400">"8.3.2"</strong>
        }
}`,
    instauploadFrontend: `{
        <strong class="md:text-base text-xs text-red-400">"name"</strong>: <strong class="md:text-base text-xs text-green-400">"frontend",</strong>
        <strong class="md:text-base text-xs text-red-400">"repository"</strong>: <strong class="md:text-base text-xs text-green-400">:{</strong>
            <strong class="md:text-base text-xs text-red-400">"type"</strong>: <strong class="md:text-base text-xs text-green-400">"git",</strong>
            <strong class="md:text-base text-xs text-red-400">"url"</strong>: <strong class="md:text-base text-xs text-green-400">"<a href="https://github.com/samuglz/InstaUploader" rel="noopener noreferrer" target="_blank" class="text-blue-400 hover:underline cursor-pointer">https://github.com/samuglz/InstaUploader</a>"</strong>
        },
        <strong class="md:text-base text-xs text-red-400">"version"</strong>: <strong class="md:text-base text-xs text-green-400">"1.0.0",</strong>
        <strong class="md:text-base text-xs text-red-400">"scripts"</strong>: {
          <strong class="md:text-base text-xs text-red-400">"serve"</strong>: <strong class="md:text-base text-xs text-green-400">"vue-cli-service serve",</strong>
          <strong class="md:text-base text-xs text-red-400">"build"</strong>: <strong class="md:text-base text-xs text-green-400">"vue-cli-service build",</strong>
          <strong class="md:text-base text-xs text-red-400">"lint"</strong>: <strong class="md:text-base text-xs text-green-400">"vue-cli-service lint"</strong>
        },
        <strong class="md:text-base text-xs text-red-400">"dependencies"</strong>: {
          <strong class="md:text-base text-xs text-red-400">"autoprefixer"</strong>: <strong class="md:text-base text-xs text-green-400">"^9.8.6",</strong>
          <strong class="md:text-base text-xs text-red-400">"axios"</strong>: <strong class="md:text-base text-xs text-green-400">"^0.21.1",</strong>
          <strong class="md:text-base text-xs text-red-400">"core-js"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.6.5",</strong>
          <strong class="md:text-base text-xs text-red-400">"tailwindcss"</strong>: <strong class="md:text-base text-xs text-green-400">"npm:@tailwindcss/postcss7-compat@^2.1.0",</strong>
          <strong class="md:text-base text-xs text-red-400">"vue"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.6.11",</strong>
          <strong class="md:text-base text-xs text-red-400">"vue-router"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.2.0"</strong>
        },
        <strong class="md:text-base text-xs text-red-400">"devDependencies"</strong>: {
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-plugin-babel"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.5.0",</strong>
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-plugin-eslint"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.5.0",</strong>
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-plugin-router"</strong>: <strong class="md:text-base text-xs text-green-400">"^4.5.12",</strong>
          <strong class="md:text-base text-xs text-red-400">"@vue/cli-service"</strong>: <strong class="md:text-base text-xs text-green-400">"~4.5.0",</strong>
          <strong class="md:text-base text-xs text-red-400">"@vue/eslint-config-prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^6.0.0",</strong>
          <strong class="md:text-base text-xs text-red-400">"babel-eslint"</strong>: <strong class="md:text-base text-xs text-green-400">"^10.1.0",</strong>
          <strong class="md:text-base text-xs text-red-400">"eslint"</strong>: <strong class="md:text-base text-xs text-green-400">"^6.7.2",</strong>
          <strong class="md:text-base text-xs text-red-400">"eslint-plugin-prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^3.3.1",</strong>
          <strong class="md:text-base text-xs text-red-400">"eslint-plugin-vue"</strong>: <strong class="md:text-base text-xs text-green-400">"^6.2.2",</strong>
          <strong class="md:text-base text-xs text-red-400">"prettier"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.2.1",</strong>
          <strong class="md:text-base text-xs text-red-400">"vue-template-compiler"</strong>: <strong class="md:text-base text-xs text-green-400">"^2.6.11"</strong>
        }
}`
};

export const commitsInfo = [
    {
        date: {
            from: '2007-09',
            to: '2009-06'
        },
        hash: '',
        type: 'git.education',
        description: 'IES Punta Larga - Titulo De Bachillerato'
    },
    {
        date: {
            from: '2009-09',
            to: '2014-06'
        },
        hash: '',
        type: 'git.education',
        description:
            'Universidad de La Laguna - 144 créditos del título Grado en Ingeniería Informática.'
    },
    {
        date: {
            from: '2015-03',
            to: '2019-04'
        },
        hash: '',
        type: 'git.job',
        description: 'Correduría Grupo Gómez'
    },
    {
        date: {
            from: '2019-04',
            to: '2019-10'
        },
        hash: '',
        type: 'git.job',
        description: 'Vadeaguas'
    },
    {
        date: {
            from: '2020-02',
            to: '2020-05'
        },
        hash: '',
        type: 'git.education',
        description:
            'Escuela De Organización Industrial - Programación y Diseño Web Front-End'
    },
    {
        date: {
            from: '2020-07',
            to: 'Today'
        },
        type: 'git.job',
        description: 'Integra Cloud Technologies',
        hash: ''
    }
];
