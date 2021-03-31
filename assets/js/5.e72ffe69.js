(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"how-to-use-this-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-template"}},[e._v("#")]),e._v(" How to use this template")]),e._v(" "),r("h2",{attrs:{id:"get-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[e._v("#")]),e._v(" Get started")]),e._v(" "),r("p",[e._v("You do not have to deploy on Netlify to use Netlify CMS, but it is the fastest way to get started. I have also included instructions for deploying to GitHub Pages.")]),e._v(" "),r("h3",{attrs:{id:"deploy-to-netlify"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-netlify"}},[e._v("#")]),e._v(" Deploy to Netlify")]),e._v(" "),r("p",[e._v("The best way to start is to hit this button:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://app.netlify.com/start/deploy?repository=https://github.com/petedavisdev/VuePress-with-Netlify-CMS&stack=cms"}},[r("img",{attrs:{src:"https://www.netlify.com/img/deploy/button.svg",alt:"Deploy to Netlify"}})])]),e._v(" "),r("p",[e._v('This is the fastest way to get your website going. You will initially be hosted on a random URL, but you can add your own domain name later in your "Domain settings" on Netlify.')]),e._v(" "),r("h3",{attrs:{id:"deploy-to-github-pages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-github-pages"}},[e._v("#")]),e._v(" Deploy to GitHub Pages")]),e._v(" "),r("p",[e._v("You will need "),r("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),r("OutboundLink")],1),e._v(" installed on your computer.")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://github.com/petedavisdev/VuePress-with-Netlify-CMS/generate",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a new repo from this template"),r("OutboundLink")],1),e._v(" and clone it to your computer.")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("npm i")]),e._v(" to install VuePress.")]),e._v(" "),r("li",[e._v("Add "),r("code",[e._v('base: "/name-of-your-repo/"')]),e._v(" to your "),r("strong",[e._v("docs/.vuepress/config.js")]),e._v(" file.")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("npm run deploy")]),e._v(" to deploy your to GitHub pages.")])]),e._v(" "),r("p",[e._v("In GitHub, go to your repo settings to see a link to your deployed site. It will be something like "),r("code",[e._v("https://username/github.io/name-of-your-repo/")]),e._v(". You can configure a "),r("a",{attrs:{href:"https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom domain"),r("OutboundLink")],1),e._v(" in GitHub later.")]),e._v(" "),r("h2",{attrs:{id:"setup-netlify-cms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-netlify-cms"}},[e._v("#")]),e._v(" Setup Netlify CMS")]),e._v(" "),r("p",[e._v("Edit the "),r("code",[e._v("backend")]),e._v(" config in "),r("code",[e._v(".vuepress/public/admin/config.yml")]),e._v(" to point at your repo and deploy the change.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("backend:\n  name: github\n  repo: username/repo\n")])])]),r("h2",{attrs:{id:"login-with-github-oauth"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#login-with-github-oauth"}},[e._v("#")]),e._v(" Login with GitHub OAuth")]),e._v(" "),r("p",[e._v("You can use "),r("a",{attrs:{href:"https://docs.netlify.com/visitor-access/identity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify Identity"),r("OutboundLink")],1),e._v(" to authenticate CMS users, but to start off, it's simplest to give yourself access with GitHub OAuth.")]),e._v(" "),r("ol",[r("li",[e._v("Go to your "),r("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[e._v("developer settings on GitHub"),r("OutboundLink")],1),e._v(" and add a new OAuth app.")]),e._v(" "),r("li",[e._v("Enter the name and full URL of your site and this authorization callback URL:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://api.netlify.com/auth/done\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Click Register application to get your Client ID and Client Secret. You will need these in a moment.")]),e._v(" "),r("li",[e._v("In your site Settings, open 'Access control'. Under OAuth, click 'Install provider' and copy in the Client ID and Secret from "),r("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("You should now be able to visit the /admin page on your website and login with GitHub.")]),e._v(" "),r("h2",{attrs:{id:"install-and-develop-on-your-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-and-develop-on-your-computer"}},[e._v("#")]),e._v(" Install and develop on your computer")]),e._v(" "),r("p",[e._v("You will need "),r("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),r("OutboundLink")],1),e._v(" installed on your computer. Run these commands inside your repo to install vuepress and start a live-reloading development server:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])]),r("h3",{attrs:{id:"build-and-deploy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-and-deploy"}},[e._v("#")]),e._v(" Build and deploy")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),r("p",[e._v("After build the folder to deploy is "),r("code",[e._v("docs/.vuepress/dist")])]),e._v(" "),r("h2",{attrs:{id:"read-the-docs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read-the-docs"}},[e._v("#")]),e._v(" Read the docs")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://vuepress.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official VuePress guide"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress default theme config"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.netlifycms.org/docs/intro/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify CMS docs"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"contribute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contribute"}},[e._v("#")]),e._v(" Contribute")]),e._v(" "),r("p",[e._v("This template is default VuePress - so please give your "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("skills"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://opencollective.com/vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("money"),r("OutboundLink")],1),e._v(" to the "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress team"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"author"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[e._v("#")]),e._v(" Author")]),e._v(" "),r("p",[e._v("Pete Davis")]),e._v(" "),r("ul",[r("li",[e._v("Website: "),r("a",{attrs:{href:"https://petedavis.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("petedavis.dev"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Github: "),r("a",{attrs:{href:"https://github.com/petedavisdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("@petedavisdev"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Twitter: "),r("a",{attrs:{href:"https://twitter.com/petedavisdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("@petedavisdev"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);