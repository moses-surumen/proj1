function App() {
    this.bodyElem = $("body"), this.init()
}
var data = {
    en: {
        header: {
            links: [{
                title: "Home",
                link: "/",
                "class": "home"
            }, {
                title: "Features",
                link: "features",
                "class": "features"
            }, {
                title: "Pricing",
                link: "pricing",
                "class": "pricing"
            }],
            signIn: {
                title: "Log in",
                link: "https://dashboard.nuageapp.com/login",
                "class": "signIn"
            },
            signUp: {
                title: "Sign up",
                link: "https://dashboard.nuageapp.com/beta",
                "class": "signUp"
            }
        },
        home: {
            header: {
                subtitle: ["Managing domains", "has never been so cool."],
                ctaText: "Sign up for FREE"
            },
            content: {
                blocks: [{
                    title: "Buy",
                    subtitle: "Buy domains in seconds",
                    text: "Choose from hundreds of domains, easy peasy <br />with Nuage."
                }, {
                    title: "A—Z",
                    subtitle: "Import all your domains instantly",
                    text: "Manage domains from different registrars <br />in a single app."
                }, {
                    title: "Day-30",
                    subtitle: "Never lose your domain again",
                    text: "Your domains will be automatically renewed on time - except those you don’t want anymore."
                }],
                contentFooter: {
                    title: "Buy, import, renew, right now.",
                    ctaText: "Sign up for FREE"
                }
            }
        },
        pricing: {
            header: {
                title: ["Using Nuage", " is ", "f", "r", "e", "e", "."],
                subtitle: ["No subscription fee, no contract.", "We find you good domain prices", "on the internet."]
            },
            content: {
                title: "545 domains available, yes sir.",
                catchPhrase: "All our domains including domain WhoisGuard,<br />Free DNS server, Anti Cache poisoning, Transfer security",
                ctaText: "Download the domain prices",
                domains: [{
                    tld: ".org",
                    price: "$ 18.24/y"
                }, {
                    tld: ".com",
                    price: "$ 11.98/y"
                }, {
                    tld: ".co",
                    price: "$ 34.32/y"
                }, {
                    tld: ".net",
                    price: "$ 15.6/y"
                }, {
                    tld: ".io",
                    price: "$ 34.8/y"
                }, {
                    tld: ".fr",
                    price: "$ 11.9/y"
                }, {
                    tld: ".biz",
                    price: "$ 17.52/y"
                }],
                subtitle: "What are you waiting for?",
                ctaSubtitleText: "Start now"
            }
        },
        features: {
            header: {
                title: ["Domain names", "with ", "n", "o", "&nbsp;", "h", "a", "s", "s", "l", "e", "."],
                subtitle: "Buy, import and manage domains like a boss."
            },
            content: {
                search: {
                    searchPalceholder: "Your domain name",
                    blocks: [{
                        letter: "A",
                        subtitle: "Type",
                        text: "Check out domain availability from over 545 tlds. Nuage searches as you type, so you can explore all options in the time it takes to say “done”."
                    }, {
                        letter: "B",
                        subtitle: "Then pay",
                        text: "No need to fill out a zillion forms, just enter your contact details and credit card. Nuage saves your details so it’s even quicker next time. All in less than 10 seconds, sorted!"
                    }]
                },
                "import": {
                    title: "All your domains in one place",
                    subtitle: "Nuage connects to your registrars’ APIs, allowing you to manage all your domains in the same place. No need to transfer your domains. No worries, we don’t change the infrastructure. Everything remains secure, exactly where it should be.",
                    contacts: [{
                        name: "Gilles Suzanne",
                        provider: "OVH",
                        nickhandle: "GS40233-OVH",
                        numberOfDomains: 8
                    }, {
                        name: "Benjamin Zaken",
                        provider: "GD",
                        nickhandle: "BZ2411-GANDI",
                        numberOfDomains: 12
                    }, {
                        name: "Lia Manches",
                        provider: "GD",
                        nickhandle: "LM3128-GANDI",
                        numberOfDomains: 24
                    }]
                },
                dns: {
                    title: "Managing your DNS, no probs",
                    subtitle: "We know you will always need to edit your DNS. We’ve made it as simple as it should be.",
                    subDomainsText: "Subdomains"
                },
                services: {
                    title: "Connect your favorites services",
                    subtitle: "Redirect to Medium, Shopify, Tumblr, Squarespace, Behance… Create as many Subdomains as you want and communicate in just 1 click."
                }
            },
            footer: {
                title: "It will blow your mind.",
                ctaText: "Discover Nuage"
            }
        },
        signIn: {
            header: {
                title: ["s", "i", "g", "n", "&nbsp;", "i", "n", "."]
            },
            content: {
                form: {
                    emailLabel: "Email",
                    passwordLabel: "Password",
                    forgotenPassText: "Forgoten password?",
                    submitText: "Sign in"
                }
            }
        },
        subscribe: {
            header: {
                title: ["V", "e", "r", "y", "&nbsp;", "S", "o", "o", "n", "."],
                subtitle: "Sign up for the beta"
            },
            form: {
                email: {
                    placeholder: "Your Email"
                },
                firstName: {
                    placeholder: "Your First Name"
                },
                submit: {
                    text: "I want an invite"
                }
            }
        },
        qAndA: {
            header: {
                title: ["Q", "&", "A", "."],
                subtitle: "Give us your best"
            },
            content: {
                blocks: [{
                    title: "How Nuage works?",
                    paragraphs: ["Our job is to focus on the product and to make it easy for you. <br>We are not a registrar but we have built strong relationships with some awesome ones <br>which means that we offer you the best quality service. A secure one too."]
                }, {
                    title: "How does importing domains work?",
                    paragraphs: ["We have developed a service that integrates all your domains in Nuage thanks to registrars’ APIs, <br>without needing to transfer them. We are constantly working on supporting more registrars – so don’t hesitate to ask if yours isn’t on the list."]
                }, {
                    title: "What happens if I don’t want to renew my domains?",
                    paragraphs: ["We activate the auto-renew mode by default – so you don’t lose your domains by mistake. <br>You can always turn this setting off and do it manually for each domain."]
                }, {
                    title: "Can I transfer a domain?",
                    paragraphs: ["We are currently working on our transfer tool. You deserve the best, so give us two ticks. <br>In the meantime, you can connect to your registrar to import domains in Nuage."]
                }, {
                    title: "How do I stop using Nuage?",
                    paragraphs: ["You can leave Nuage anytime via your account settings. <br>Rest assured, your registrars’ settings stay the same. <br>Even if you leave us *sniff*, this will not affect your domains."]
                }, {
                    title: "How do I manage my hosting?",
                    paragraphs: ["At the moment, we help you manage your domain names in the simplest way possible. <br>More good stuff is on the way! We’re currently working on email and other projects to make your life easier."]
                }, {
                    title: "How do I manage multiple contacts on Nuage?",
                    paragraphs: ['You can create new contacts via your Settings (just click on "Contact Menu") <br> or add them directly during the buying process.']
                }, {
                    title: "Where are my invoices?",
                    paragraphs: ["They’re waiting for you in your Settings under ‘Invoices’."]
                }, {
                    title: "Still have a question?",
                    paragraphs: ["Drop us an email; we would love to hear from you."]
                }]
            }
        },
        contact: {
            header: {
                title: ["Y", "e", "s", "?"],
                subtitle: "A problem? contact us."
            },
            blocks: [{
                email: "contact@nuageapp.com?subject=Support",
                title: "Support",
                titleClass: "red",
                content: "We’re here to solve <br /> your problems"
            }, {
                email: "contact@nuageapp.com?subject=Sales",
                title: "Sales",
                titleClass: "green",
                content: "Looking for a particular offer? <br />Get in touch."
            }, {
                email: "contact@nuageapp.com?subject=Partnership",
                title: "Partnership",
                titleClass: "yellow",
                content: "Want to collaborate? <br />We’re interested."
            }]
        },
        privacy: {
            header: {
                title: ["Privacy", " ", "p", "o", "l", "i", "c", "y", "."]
            },
            content: {
                lastModified: "18th August 2016"
            }
        },
        terms: {
            header: {
                title: ["Terms of", " ", "s", "e", "r", "v", "i", "c", "e"]
            },
            content: {
                lastModified: "18th August 2016"
            }
        },
        footer: {
            crafted: "2016 © Nuage Inc. All rights reserved.",
            links: [{
                title: "Contact",
                link: "contact"
            }, {
                title: "Blog",
                link: "https://medium.com/@nuage"
            }, {
                title: "Terms of Service",
                link: "terms"
            }, {
                title: "Privacy",
                link: "privacy"
            }, {
                title: "Q & A",
                link: "q-and-a"
            }]
        }
    },
    fr: {}
};
this.templates = this.templates || {}, this.templates._footer = Handlebars.template({
    1: function(e, t, a, n) {
        var o = this.lambda,
            i = this.escapeExpression;
        return '                    <li><a href="' + i(o(null != e ? e.link : e, e)) + '">' + i(o(null != e ? e.title : e, e)) + "</a></li>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o;
        return '<footer>\n <section class="desktop">\n     <div>\n         <div class="logo">\n                <a href="#" class="logo--link">\n                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="38" height="28" viewBox="0 0 38 28">\n                   <defs>\n                      <style>\n                         .cls-1 {\n                            fill: #33afff;\n                            fill-rule: evenodd;\n                         }\n                       </style>\n                    </defs>\n                   <path d="M28.375,26.781 L28.375,27.000 L13.969,27.000 L13.969,26.999 C13.963,26.999 13.958,27.000 13.953,27.000 C6.799,27.000 1.000,21.180 1.000,14.000 C1.000,6.820 6.799,1.000 13.953,1.000 C17.920,1.000 21.465,2.794 23.841,5.612 C24.602,5.441 25.391,5.344 26.203,5.344 C32.166,5.344 37.000,10.192 37.000,16.172 C37.000,21.406 33.297,25.772 28.375,26.781 Z" class="cls-1"/>\n                   </svg>\n                </a>\n          </div>\n            <p>' + this.escapeExpression(this.lambda(null != (o = null != e ? e.footer : e) ? o.crafted : o, e)) + "</p>\n     </div>\n        <div>\n         <ul>\n" + (null != (o = t.each.call(e, null != (o = null != e ? e.footer : e) ? o.links : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '          </ul>\n     </div>\n    </section>\n\n  <section class="mobile">\n      <p>\n           2016 © Nuage Inc - All Right reserved.\n           Privacy and Terms of Use\n      </p>\n  </section>\n</footer>\n'
    },
    useData: !0
}), this.templates._header = Handlebars.template({
    1: function(e, t, a, n) {
        var o = this.lambda,
            i = this.escapeExpression;
        return '            <a\n            href="' + i(o(null != e ? e.link : e, e)) + '"\n           class="nav-' + i(o(null != e ? e["class"] : e, e)) + '">\n             ' + i(o(null != e ? e.title : e, e)) + "\n         </a>\n"
    },
    3: function(e, t, a, n) {
        var o = this.lambda,
            i = this.escapeExpression;
        return '          <li>\n              <a href="' + i(o(null != e ? e.link : e, e)) + '">\n                   ' + i(o(null != e ? e.title : e, e)) + "\n             </a>\n          </li>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return "<header>\n   <nav>\n" + (null != (o = t.each.call(e, null != (o = null != e ? e.header : e) ? o.links : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + ' </nav>\n    <div class="logo">\n        <a href="/#" class="logo--link">\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="38" height="28" viewBox="0 0 38 28">\n           <defs>\n              <style>\n                 .cls-1 {\n                    fill: #33afff;\n                    fill-rule: evenodd;\n                 }\n               </style>\n            </defs>\n           <path d="M28.375,26.781 L28.375,27.000 L13.969,27.000 L13.969,26.999 C13.963,26.999 13.958,27.000 13.953,27.000 C6.799,27.000 1.000,21.180 1.000,14.000 C1.000,6.820 6.799,1.000 13.953,1.000 C17.920,1.000 21.465,2.794 23.841,5.612 C24.602,5.441 25.391,5.344 26.203,5.344 C32.166,5.344 37.000,10.192 37.000,16.172 C37.000,21.406 33.297,25.772 28.375,26.781 Z" class="cls-1"/>\n           </svg>\n        </a>\n  </div>\n    <div class="right">\n       <a href="' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signIn : o) ? o.link : o, e)) + '">' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signIn : o) ? o.title : o, e)) + '</a>\n      <a\n        href="' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signUp : o) ? o.link : o, e)) + '"\n     class="cta cta-border cta-transparent cta--sign-up nav-' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signUp : o) ? o["class"] : o, e)) + '">\n           ' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signUp : o) ? o.title : o, e)) + '\n       </a>\n  </div>\n\n  <div class="mobile">\n      <div class="link active">\n         <a href="' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signIn : o) ? o.link : o, e)) + '">' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signIn : o) ? o.title : o, e)) + '</a>\n      </div>\n\n      <div class="logo">\n            <a href="/#" class="logo--link">\n              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="38" height="28" viewBox="0 0 38 28">\n               <defs>\n                  <style>\n                     .cls-1 {\n                        fill: #33afff;\n                        fill-rule: evenodd;\n                     }\n                   </style>\n                </defs>\n               <path d="M28.375,26.781 L28.375,27.000 L13.969,27.000 L13.969,26.999 C13.963,26.999 13.958,27.000 13.953,27.000 C6.799,27.000 1.000,21.180 1.000,14.000 C1.000,6.820 6.799,1.000 13.953,1.000 C17.920,1.000 21.465,2.794 23.841,5.612 C24.602,5.441 25.391,5.344 26.203,5.344 C32.166,5.344 37.000,10.192 37.000,16.172 C37.000,21.406 33.297,25.772 28.375,26.781 Z" class="cls-1"/>\n               </svg>\n            </a>\n      </div>\n\n      <div class="burger">\n          <div class="bars">\n                <span></span>\n             <span></span>\n             <span></span>\n         </div>\n        </div>\n    </div>\n\n  <ul class="mobile-dropdown">\n' + (null != (o = t.each.call(e, null != (o = null != e ? e.header : e) ? o.links : o, {
            name: "each",
            hash: {},
            fn: this.program(3, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '      <li>\n          <a href="#/contact">Contact</a>\n       </li>\n     <li class="log-in">\n           <a href="' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signIn : o) ? o.link : o, e)) + '">' + r(i(null != (o = null != (o = null != e ? e.header : e) ? o.signIn : o) ? o.title : o, e)) + "</a>\n      </li>\n </ul>\n</header>\n"
    },
    useData: !0
}), this.templates.contact = Handlebars.template({
    1: function(e, t, a, n) {
        var o;
        return "                    <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    3: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return '                <a href="mailto:' + r(i(null != e ? e.email : e, e)) + '">\n                    <p>\n                        <b class="' + r(i(null != e ? e.titleClass : e, e)) + '">' + r(i(null != e ? e.title : e, e)) + "</b>\n                    </p>\n                    <p>" + (null != (o = i(null != e ? e.content : e, e)) ? o : "") + "</p>\n                </a>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o;
        return '<div class="headerWrapper"></div>\n\n<div class="page contact">\n    <div class="pageContent">\n        <div class="centeredContainer">\n            <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.contact : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '            </h2>\n            <h4 class="headerSubtitle">' + this.escapeExpression(this.lambda(null != (o = null != (o = null != e ? e.contact : e) ? o.header : o) ? o.subtitle : o, e)) + '</h4>\n        </div>\n\n        <div class="contactBox">\n' + (null != (o = t.each.call(e, null != (o = null != e ? e.contact : e) ? o.blocks : o, {
            name: "each",
            hash: {},
            fn: this.program(3, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '        </div>\n\n        <div class="footerWrapper"></div>\n    </div>\n</div>\n'
    },
    useData: !0
}), this.templates.features = Handlebars.template({
    1: function(e, t, a, n) {
        var o;
        return "                <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    3: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return "              <div>\n                 <b>" + r(i(null != e ? e.letter : e, e)) + "</b>\n                 <h4>" + r(i(null != e ? e.subtitle : e, e)) + "</h4>\n                 <p>" + (null != (o = i(null != e ? e.text : e, e)) ? o : "") + "</p>\n             </div>\n"
    },
    5: function(e, t, a, n) {
        var o = this.lambda,
            i = this.escapeExpression;
        return '                        <li>\n                          <div class="provider">\n                                <span>' + i(o(null != e ? e.provider : e, e)) + '</span>\n                         </div>\n                            <div class="contactInformations">\n                             <b>' + i(o(null != e ? e.name : e, e)) + "</b>\n                               <span>" + i(o(null != e ? e.nickhandle : e, e)) + '</span>\n                           </div>\n                            <div class="numberOfDomains">\n                             ' + i(o(null != e ? e.numberOfDomains : e, e)) + " domains\n                           </div>\n                        </li>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return '<div class="headerWrapper"></div>\n\n<div class="page features">\n   <div class="pageHeader">\n      <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.features : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '       </h2>\n     <h3 class="headerSubtitle">\n           ' + r(i(null != (o = null != (o = null != e ? e.features : e) ? o.header : o) ? o.subtitle : o, e)) + '\n      </h3>\n </div>\n    <div class="pageContent sectionSearchWrapper">\n        <section class="searchBlock">\n         <input type="text" name="search" placeholder="' + r(i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o.search : o) ? o.searchPalceholder : o, e)) + '" disabled="disabled">\n       </section>\n        <section>\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o.search : o) ? o.blocks : o, {
            name: "each",
            hash: {},
            fn: this.program(3, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '       </section>\n    </div>\n    <div class="pageContent sectionContactsWrapper">\n      <section>\n         <div>\n             <h3>' + r(i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o["import"] : o) ? o.title : o, e)) + '</h3>\n               <b class="subtitle">\n                  ' + (null != (o = i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o["import"] : o) ? o.subtitle : o, e)) ? o : "") + '\n               </b>\n          </div>\n            <div class="box">\n             <ul class="contacts">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o["import"] : o) ? o.contacts : o, {
            name: "each",
            hash: {},
            fn: this.program(5, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '              </ul>\n         </div>\n        </section>\n    </div>\n    <div class="pageContent sectionDNSWrapper">\n       <section>\n         <div class="catchphrase">\n             <h3>' + r(i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o.dns : o) ? o.title : o, e)) + "</h3>\n             <h4>" + r(i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o.dns : o) ? o.subtitle : o, e)) + '</h4>\n          </div>\n            <div>\n             <div class="dnsBlock">\n                    <span>' + r(i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o.dns : o) ? o.subDomainsText : o, e)) + '</span>\n                    <span>205.251.19.3</span>\n             </div>\n                <ul class="dnsZones">\n                 <li><span>A</span></li>\n                   <li><span>TXT</span></li>\n                 <li><span>CNAME</span></li>\n                   <li><span>MX</span></li>\n              </ul>\n         </div>\n        </section>\n    </div>\n    <div class="pageContent sectionServicesWrapper">\n      <section>\n         <div>\n             <h3>' + r(i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o.services : o) ? o.title : o, e)) + "</h3>\n                <h4>" + r(i(null != (o = null != (o = null != (o = null != e ? e.features : e) ? o.content : o) ? o.services : o) ? o.subtitle : o, e)) + '</h4>\n         </div>\n            <div>\n             <ul>\n                  <li><span>Behance</span></li>\n                 <li><span>Tumblr</span></li>\n                  <li><span>Medium</span></li>\n                  <li><span>Shopify</span></li>\n                 <li><span>Squarespace</span></li>\n             </ul>\n             <div class="serviceBlock">\n                    <span>Medium</span>\n                   <span>blog.mydomain.com</span>\n                </div>\n            </div>\n        </section>\n    </div>\n    <div class="pageContent contentFooter">\n       <section>\n         <h3>' + r(i(null != (o = null != (o = null != e ? e.features : e) ? o.footer : o) ? o.title : o, e)) + '</h3>\n            <a href="https://dashboard.nuageapp.com/beta" class="cta cta-colored cta-blue">' + r(i(null != (o = null != (o = null != e ? e.features : e) ? o.footer : o) ? o.ctaText : o, e)) + '</a>\n        </section>\n    </div>\n</div>\n\n<div class="footerWrapper"></div>\n'
    },
    useData: !0
}), this.templates.home = Handlebars.template({
    1: function(e, t, a, n) {
        return "                       <span>" + this.escapeExpression(this.lambda(e, e)) + "</span>\n"
    },
    3: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return '                <section class="block">\n                   <h3 class="block--title">\n                     ' + r(i(null != e ? e.title : e, e)) + '\n                 </h3>\n                 <span class="block--catch">\n                       ' + r(i(null != e ? e.subtitle : e, e)) + '\n                  </span>\n                   <div class="block--text">\n                     ' + (null != (o = i(null != e ? e.text : e, e)) ? o : "") + "\n                    </div>\n                </section>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return '<div class="page home">\n   <div class="pageWrapper">\n     <div class="centeredContainer">\n           <div class="catchZone">\n               <div class="hello">\n                   <span id="intro">\n                     <span>H</span>\n                        <span>e</span>\n                        <span>l</span>\n                        <span>l</span>\n                        <span>o</span>\n                        <span>.</span>\n                    </span>\n               </div>\n            </div>\n\n          <div class="catchPhrase">\n             <p>\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.home : e) ? o.header : o) ? o.subtitle : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '             </p>\n          </div>\n\n          <div class="catchCta">\n                <a href="https://dashboard.nuageapp.com/beta" class="cta cta-colored cta-blue cta--invite">\n                   <span>' + r(i(null != (o = null != (o = null != e ? e.home : e) ? o.header : o) ? o.ctaText : o, e)) + '</span>\n              </a>\n          </div>\n        </div>\n    </div>\n\n  <section class="blocks">\n      <div class="pageWrapper blocksWrapper">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.home : e) ? o.content : o) ? o.blocks : o, {
            name: "each",
            hash: {},
            fn: this.program(3, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '      </div>\n    </section>\n\n  <div class="pageWrapper">\n     <div class="horizontalContainer">\n         <div class="catchPhrase catchPhrase-light-margin catchPhrase-large">\n              <p class="black">' + r(i(null != (o = null != (o = null != (o = null != e ? e.home : e) ? o.content : o) ? o.contentFooter : o) ? o.title : o, e)) + '</p>\n           </div>\n\n          <div class="catchCta">\n                <a href="https://dashboard.nuageapp.com/beta" class="cta cta-colored cta-blue cta-visible cta-width-strict cta--invite cta--signup">' + r(i(null != (o = null != (o = null != (o = null != e ? e.home : e) ? o.content : o) ? o.contentFooter : o) ? o.ctaText : o, e)) + '</a>\n          </div>\n        </div>\n    </div>\n</div>\n\n<div class="footerWrapper"></div>\n'
    },
    useData: !0
}), this.templates.pricing = Handlebars.template({
    1: function(e, t, a, n) {
        return "                        <span>" + this.escapeExpression(this.lambda(e, e)) + "</span>\n"
    },
    3: function(e, t, a, n) {
        var o;
        return "                        <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    5: function(e, t, a, n) {
        var o = this.lambda,
            i = this.escapeExpression;
        return '                    <div class="domainBlock">\n                        <em class="tld">' + i(o(null != e ? e.tld : e, e)) + '</em>\n                        <span class="price">' + i(o(null != e ? e.price : e, e)) + "</span>\n                    </div>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return '<div class="pricingCtn">\n    <div class="headerWrapper"></div>\n\n    <div class="page pricing">\n        <div class="pageHeader">\n            <div class="centeredContainer">\n                <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.pricing : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '                </h2>\n                <h3 class="headerSubtitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.pricing : e) ? o.header : o) ? o.subtitle : o, {
            name: "each",
            hash: {},
            fn: this.program(3, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '                </h3>\n            </div>\n        </div>\n        <div class="pageContent">\n            <div class="domainsBlocksWrapper">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.pricing : e) ? o.content : o) ? o.domains : o, {
            name: "each",
            hash: {},
            fn: this.program(5, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '            </div>\n\n            <h3 class="contentTitle">\n                ' + r(i(null != (o = null != (o = null != e ? e.pricing : e) ? o.content : o) ? o.title : o, e)) + '\n            </h3>\n\n            <h5 class="contentCatchphrase">\n                ' + (null != (o = i(null != (o = null != (o = null != e ? e.pricing : e) ? o.content : o) ? o.catchPhrase : o, e)) ? o : "") + '\n            </h5>\n\n            <div class="ctaWrapper">\n                <a href="/tlds_prices.csv" class="cta cta-bordered cta-transparent">\n                    ' + r(i(null != (o = null != (o = null != e ? e.pricing : e) ? o.content : o) ? o.ctaText : o, e)) + '\n                </a>\n            </div>\n\n            <div class="bottomWrapper">\n                <h3 class="contentSubtitle">\n                    ' + r(i(null != (o = null != (o = null != e ? e.pricing : e) ? o.content : o) ? o.subtitle : o, e)) + '\n                </h3>\n\n                <div class="ctaWrapper">\n                    <a href="https://dashboard.nuageapp.com/beta" class="cta cta-colored cta-blue">\n                        ' + r(i(null != (o = null != (o = null != e ? e.pricing : e) ? o.content : o) ? o.ctaSubtitleText : o, e)) + '\n                    </a>\n                </div>\n\n                <div class="footerWrapper"></div>\n            </div>\n        </div>\n    </div>\n</div>\n'
    },
    useData: !0
}), this.templates.privacy = Handlebars.template({
    1: function(e, t, a, n) {
        var o;
        return "                    <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o;
        return '<div class="headerWrapper"></div>\n\n<div class="page privacy">\n    <div class="pageContent">\n        <div class="centeredContainer">\n            <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.privacy : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '            </h2>\n        </div>\n\n        <div class="contentWrapper">\n            <p class="lastModified">Last Modified: ' + this.escapeExpression(this.lambda(null != (o = null != (o = null != e ? e.privacy : e) ? o.content : o) ? o.lastModified : o, e)) + '</p>\n<!--\n            <p>Welcome to Nuage, provided by Nuage, Inc. (“Nuage,” “we,” “our,” or “us”). These Terms of Service govern your use of the Nuage website and the software and services made available there, as well as any other websites, subdomains, or services owned or controlled by Nuage (collectively, the “Service”).",\n            "To access the Service, users must at all times agree to and abide by these Terms. The Service allows you to submit, store, and access certain business data and other information related to you, your Subscription Organization (defined below), and/or your and/or their business, primarily relating to your domain name registrations (collectively, “Customer Data”).</p>\n            <p>\n              This Terms of Service for the Service is a legal contract between you, either an individual subscriber, customer, member, or user of at least 18 years of age or a single company, organization, or entity (“you” or, collectively with other users, “Users”) and Nuage regarding your use of the Service. Nuage may have different roles with respect to different types of Users, and “you” as used in these Terms will apply to the appropriate type of User under the circumstances.", <br>\n              "Please read carefully the following terms of service. By registering for and/or accessing, browsing, using or subscribing to the Service, or by clicking “I Agree,” or otherwise affirmatively manifesting your intent to be bound by these Terms of Service, you signify that you have read, understood, and agree to be bound by the following terms, including any additional guidelines and any future modifications (collectively, the “Terms”), and to the collection and use of your personal information as set forth in the Nuage Privacy Policy <a href="https://www.nuageapp.com/#/privacy">https://www.nuageapp.com/#/privacy</a>\n            </p> -->\n\n<p>Nuage, Inc.&nbsp; (&ldquo;<strong>Nuage</strong>,&rdquo; &ldquo;<strong>we</strong>&rdquo; or &ldquo;<strong>us</strong>&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how Nuage collects, uses, and shares the personal information we collect from users of our Service and visitors to our website. By accessing or using our Service, you signify that you have read, understood and agree to our collection, storage, use and disclosure of your personal information as described in this Privacy Policy.</p>\n\n<p>Capitalized terms not defined in this Privacy Policy have the meanings given them in our <a href="https://www.nuageapp.com/#/terms">Terms of Service</a>.</p>\n\n<p>We collect personal information about you from various sources to provide our services to you, to analyze and improve our services, and to communicate with you. To help you understand how we use and share this information, this Privacy Policy describes our data privacy and confidentiality practices.</p>\n\n<p><strong>How We Collect and Use Information</strong></p>\n\n<p>We collect personal information from our Service users and website visitors in order to provide you with a personalized, useful and efficient experience. The categories of information we collect can include:&nbsp;</p>\n\n<p><strong>Information that you provide to us.</strong> We collect information that you provide to us when you set up an account with us, use our Services, or communicate with us. For example, we may request your personal information (e.g., name, postal address, email address, telephone number, credit/debit card number, security code, time zone) or your applicable business information when you register for an account or purchase our Service. We may also collect any communications that you exchange with us, as well as any information you provide if you take part in any interactive features of the Service (e.g., promotions, surveys, etc.).</p>\n\n<p><strong>Information we receive from messaging and/or social networking apps or sites</strong>. When you interact with our site through various third-party websites or services, we may receive information from the app or social network including your profile information, profile picture, gender, user name, user ID associated with your social media account, age range, language, country, friends list, and any other information you permit the app or social network to share with third parties. The data we receive is dependent upon your privacy settings with the third-party website or service. You should always review, and if necessary, adjust your privacy settings on third-party websites and services before linking or connecting them to our website or Service.&nbsp;</p>\n\n<p><strong>Information collected through technology.</strong> We automatically collect certain types of usage information when you visit our website or use our Service. When you visit or use the Service, we may send one or more cookies &mdash; a small text file containing a string of alphanumeric characters &mdash; to your computer that uniquely identifies your browser and lets us help you log in faster and enhance your navigation through the site. A cookie may also convey information to us about how you use the Service (e.g., the pages you view, the links you click, how frequently you access the Service, and other actions you take on the Service), and allow us to track your usage of the Service over time. We may collect log file information from your browser or mobile device each time you access the Service. Log file information may include anonymous information such as your web request, Internet Protocol (&ldquo;<strong>IP</strong>&rdquo;) address, browser type, information about your mobile device, referring / exit pages and URLs, number of clicks and how you interact with links on the Service, domain names, landing pages, pages viewed, and other such information. We may employ clear gifs (also known as web beacons) which are used to anonymously track the online usage patterns. In addition, we may also use clear gifs in HTML-based emails to track which emails are opened and which links are clicked by recipients. The information allows for more accurate reporting and improvement of the Service. We may also collect analytics data, or use third-party analytics tools, to help us measure traffic and usage trends for the Service and to understand more about the demographics of our visitors. These tools collect information sent by your browser or mobile device, including the pages you visit, your use of third party applications, and other information that assists us in analyzing and improving the Service. Although we do our best to honor the privacy preferences of our visitors, we are not able to respond to Do Not Track signals from your browser at this time, as we believe that there is no consistent industry standard for how to respond to Do Not Track browser settings.</p>\n\n<p>When you access our Service by or through a mobile device, we may receive or collect and store a unique identification numbers associated with your device or our mobile application (including, for example, a UDID, Unique ID for Advertisers (&ldquo;<strong>IDFA</strong>&rdquo;), Google Ad ID, or Windows Advertising ID), mobile carrier, device type, model and manufacturer, mobile device operating system brand and model, phone number, and, depending on your mobile device settings, your geographical location data, including GPS coordinates (e.g. latitude and/or longitude) or similar information regarding the location of your mobile device.</p>\n\n<p><strong>Information from other sources.</strong> We may obtain information from other sources, such as third-party information providers, or through mergers and acquisitions, and combine this with information previously collected. In these cases, our Privacy Policy governs the handling of the combined personal information.</p>\n\n<p><strong>Information third-parties collect</strong>. When you visit or use the Service, third parties may obtain information about you or your computer or device. These third parties may include:</p>\n\n<ul>\n    <li> <strong>Service Providers. </strong>We may use service providers to help us with the Service or any other lawful activity may do, including the other activities we describe under this Policy. This means service providers may collect, process, and store any of the information that we may collect under the Policy, and information collected in connection with the Service may be collected directly by our service providers.</li>\n  <li> <strong>Third Party Tracking and Online Advertising.</strong> We may permit third party ad networks, social media companies, and other third party services to collect information about you, your computer or device when you visit or use the Service. This information may be collected automatically, including through cookies, social media plug-ins, and other technologies. The information collected, and manner in which it is collected, may include the information and methods described in the &ldquo;Information We Collect, and How We Collect It&rdquo; Section above, under the &ldquo;Information That Is Automatically Collected (Cookies and Other Technologies)&rdquo; heading. These third parties may collect information about your use of the Service over time, and they may combine it with other information that they possess or obtain about you, such as about your use of other websites and services. These third parties may use this information for our or for third party purposes, including commercial purposes such as tailoring advertising to you on the Service or in other locations like third party websites and services. For information about choices that you may have about this information collection and use, see the &ldquo;Your Choices&rdquo; Section below.</li>\n  <li>We use this information for a variety of purposes, including the following: (a) for our business activities, including to operate the Service; (b) to have your payments processed; (c) to communicate with you and respond to your requests, such as to respond to your questions, contact you about changes to the Service, and about new products and services]; (d) for marketing and advertising purposes, such as to market to you or offer you our and third party&nbsp; special offers or other products or services we think that you may be interested in; (e) for analytics and research purposes; (f) to enforce this Privacy Policy and our Terms of Service, to resolve disputes, and otherwise to carry out our obligations and enforce our rights, and to protect our business interests and the interests and rights of third parties; (g) to comply with contractual and legal obligations and requirements; (h) to fulfill any other purpose for which you provide personal information; and (i) for any other lawful purpose, or other purpose that you consent to.</li>\n  <li>We may also use your personal information to communicate directly with you, such as to send you email messages about products and services that may be of interest to you. We may also send you Service-related emails or messages (e.g., account verification, purchase confirmation, changes or updates to features of the Service, technical and security notices). Similarly, if you request information from us through an online contact form or if you email us, we collect the information you provide (e.g., name, telephone number, email address) so that we can respond to you. For more information about your communication preferences, see &ldquo;Your Choices Regarding Your Information&rdquo; below.</li>\n  <li><strong>How We Share Personal Information</strong></li>\n   <li>We may share your personal information in the instances described below. For further information on your choices regarding your information, see &ldquo;Your Choices Regarding Your Information.&rdquo;&nbsp;</li>\n    <li> We may share your personal information with third-party service providers or business partners who help us deliver or improve our service, for example, providers who help us process payments, send postal mail, provide back-office services, or measure site traffic. These providers will be given access to your personal information as is reasonably necessary to perform their function under reasonable confidentiality terms.</li>\n <li> We may aggregate, or strip information of personally identifying characteristics, and then share that aggregated or anonymized information with third parties.</li>\n  <li> We may share or disclose your personal information if we determine, in our sole discretion, that we are required to do so under applicable law or regulatory requirements, or if we reasonably believe disclosure is necessary to prevent harm or financial loss, or in connection with preventing fraud or illegal activity, and/or to enforce our Terms of Service.</li>\n   <li> We may share your personal information with corporate subsidiaries we own or control and which are governed by this Privacy Policy.</li>\n <li> We reserve the right to transfer any information we collect in the event we sell or transfer all or a portion of our business or assets (including any shares in the company) or any portion or combination of our products, services, businesses and/or assets. Should such a transaction occur (whether a divestiture, merger, acquisition, bankruptcy, dissolution, reorganization, liquidation, or similar transaction or proceeding), we will use reasonable efforts to ensure that any transferred information is treated in a manner consistent with this Privacy Policy.</li>\n    <li><strong>Personal Information and Customer Data</strong></li>\n  <li>Customers may upload or otherwise provide to us personal information. Personal information is owned and controlled by our users, and any personal information that we maintain or process we consider to be strictly confidential. We collect and process personal information solely on behalf of our users, and in accordance with our agreements with the users. We do not use or disclose personal information except as authorized and required by our users and provided for in our agreements with our users.&nbsp;</li>\n   <li>For purposes of clarity, our obligations with respect to Customer Data are as set forth in our <a href="https://www.nuageapp.com/#/terms">Terms of Service</a>.</li>\n  <li><strong>Your Choices Regarding Your Information</strong></li>\n <li>Email Communications. From time to time, we may send you emails regarding updates to our website, products or services, notices about our organization, or information about products/services we offer (or promotional offers from third parties) that we think may be of interest to you. If you wish to unsubscribe from such emails, simply click the &ldquo;unsubscribe link&rdquo; provided at the bottom of the email communication. Note that you cannot unsubscribe from certain Services-related email communications (e.g., account verification, confirmations of transactions, technical or legal notices).</li>\n <li>Modifying Account Information. If you have an online account with us, you have the ability to modify certain information in your account (e.g., your contact information) through &ldquo;profile,&rdquo; &ldquo;account,&rdquo; &ldquo;settings,&rdquo; or &ldquo;preferences&rdquo; options provided on the website or service. If you have any questions about modifying or updating any information in your account, please contact us at the email or postal address provided below. Please note that Nuage does not own or control the personal information uploaded to our Service by our Customers, and cannot modify or delete personal information except at the request of our Customer, or as permitted by our Terms of Service.</li>\n  <li><strong>Data Protection and Security</strong></li>\n    <li>Storage and transfer: Your information may be stored and processed in the United States or any other country in which Nuage or its subsidiaries, affiliates or service providers maintain facilities. If you are located in the European Union or other regions with laws governing data collection and use that may differ from U.S. law, please note that we may transfer information, including personal information, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction, and you consent to the transfer of information to the U.S. or any other country in which we or our parent, subsidiaries, affiliates or service providers maintain facilities and the use and disclosure of information about you as described in this Privacy Policy.&nbsp;</li>\n    <li>Keeping information safe: Nuage cares about the security of your information and uses commercially reasonable physical, technical and organizational measures designed to preserve the integrity and security of all information we collect and that we share with our service providers. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations.&nbsp;</li>\n   <li>Nuage&rsquo;s obligations with respect to personal information are defined in our agreements with our customers and are not included in this Privacy Policy. Each customer will remain responsible for the privacy and security of the personal information that it collects and processes and for compliance with applicable data protection laws that may apply to the collection, processing and disclosure of personal information.</li>\n  <li><strong>Links to Third-Party Websites and Services</strong></li>\n  <li>For your convenience, our website and Services may provide links to third-party websites or services that are not governed by this Privacy Policy. To the extent that any linked third-party websites or services you visit are not owned or controlled by Nuage, we are not responsible for those websites&rsquo; or services&rsquo; content or information practices. We encourage you to review the privacy policies of any site or service before providing any personal information.</li>\n    <li><strong>Do Not Track Preferences</strong></li>\n    <li>While we want to honor your privacy as described in this Policy, unfortunately the Service does not monitor for or behave differently if your computer or browser transmits a &ldquo;do not track&rdquo; or similar message to us or the Service.</li>\n    <li><strong>Children&rsquo;s Privacy</strong></li>\n    <li>Nuage&rsquo;s website and services are intended for use strictly by adults. We do not knowingly solicit or collect personal information from children under the age of 18. If we learn that any personal information has been collected from a child under 18, we will delete the information as soon as possible. If you believe that we might have collected information from a child under 18, please contact us at contact@nuageapp.com.</li>\n <li><strong>Changes to Privacy Policy</strong></li>\n   <li>We reserve the right to change this Privacy Policy from time to time in our sole discretion. We will post changes on this page and indicate the &ldquo;last modified&rdquo; date at the top of this page. Please check back often for any updates. Your continued use of our website or services after any change in this Privacy Policy will constitute your acceptance of such change.</li>\n <p><strong>Contact Us</strong></p>\n  <p>\n    For additional inquiries about this Privacy Policy, please send us an email at contact@nuageapp.com, or contact us at:\n  </p>\n  <p>\n    Nuage, inc. <br>\n    71 Stevenson St #400, San Francisco, CA 94105, United States of America\n  </p>\n</ul>\n        </div>\n\n        <div class="footerWrapper"></div>\n    </div>\n</div>\n';
    },
    useData: !0
}), this.templates.qAndA = Handlebars.template({
    1: function(e, t, a, n) {
        var o;
        return "                    <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    3: function(e, t, a, n) {
        var o;
        return "                <h3>" + this.escapeExpression(this.lambda(null != e ? e.title : e, e)) + "</h3>\n" + (null != (o = t.each.call(e, null != e ? e.paragraphs : e, {
            name: "each",
            hash: {},
            fn: this.program(4, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "")
    },
    4: function(e, t, a, n) {
        var o;
        return "                    <p>" + (null != (o = this.lambda(e, e)) ? o : "") + "</p>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o;
        return '<div class="headerWrapper"></div>\n\n<div class="page qAndA">\n    <div class="pageContent">\n        <div class="centeredContainer">\n            <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.qAndA : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '            </h2>\n            <h4 class="headerSubtitle">' + this.escapeExpression(this.lambda(null != (o = null != (o = null != e ? e.qAndA : e) ? o.header : o) ? o.subtitle : o, e)) + '</h4>\n        </div>\n\n        <div class="contentWrapper">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.qAndA : e) ? o.content : o) ? o.blocks : o, {
            name: "each",
            hash: {},
            fn: this.program(3, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '        </div>\n\n        <div class="footerWrapper"></div>\n    </div>\n</div>\n\n'
    },
    useData: !0
}), this.templates.signIn = Handlebars.template({
    1: function(e, t, a, n) {
        var o;
        return "                    <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return '<div class="headerWrapper"></div>\n\n<div class="page signIn">\n    <div class="pageContent">\n        <div class="centeredContainer">\n            <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.signIn : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '            </h2>\n            <form action="#">\n                <input type="email" placeholder="' + r(i(null != (o = null != (o = null != (o = null != e ? e.signIn : e) ? o.content : o) ? o.form : o) ? o.emailLabel : o, e)) + '" required>\n                <input type="password" placeholder="' + r(i(null != (o = null != (o = null != (o = null != e ? e.signIn : e) ? o.content : o) ? o.form : o) ? o.passwordLabel : o, e)) + '" required>\n\n                <div class="actionsWrapper">\n                    <a href="#" class="forgotenPass">' + r(i(null != (o = null != (o = null != (o = null != e ? e.signIn : e) ? o.content : o) ? o.form : o) ? o.forgotenPassText : o, e)) + '</a>\n                    <input type="submit" class="cta cta-colored cta-blue" value="' + r(i(null != (o = null != (o = null != (o = null != e ? e.signIn : e) ? o.content : o) ? o.form : o) ? o.submitText : o, e)) + '">\n                </div>\n            </form>\n        </div>\n\n        <div class="footerWrapper"></div>\n    </div>\n</div>\n\n'
    },
    useData: !0
}), this.templates.subscribe = Handlebars.template({
    1: function(e, t, a, n) {
        var o;
        return "                    <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o, i = this.lambda,
            r = this.escapeExpression;
        return '<div class="headerWrapper"></div>\n\n<div class="page subscribe">\n    <div class="pageContent">\n        <div class="centeredContainer">\n            <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.subscribe : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '            </h2>\n            <h4 class="headerSubtitle">' + r(i(null != (o = null != (o = null != e ? e.subscribe : e) ? o.header : o) ? o.subtitle : o, e)) + '</h4>\n            <form class="signUpForm">\n                <input class="firstNameInput" type="text" required placeholder="' + r(i(null != (o = null != (o = null != (o = null != e ? e.subscribe : e) ? o.form : o) ? o.firstName : o) ? o.placeholder : o, e)) + '">\n                <input class="emailInput" type="email" required placeholder="' + r(i(null != (o = null != (o = null != (o = null != e ? e.subscribe : e) ? o.form : o) ? o.email : o) ? o.placeholder : o, e)) + '">\n                <button type="submit" class="cta cta-colored cta-blue submit-cta">\n                    <span class="submit-text">' + r(i(null != (o = null != (o = null != (o = null != e ? e.subscribe : e) ? o.form : o) ? o.submit : o) ? o.text : o, e)) + '</span>\n                    <span class="submit-loader loader-wrapper">\n                        <span class="loader inline-loader"></span>\n                    </span>\n                </button>\n            </form>\n        </div>\n\n        <div class="successMessageCtn">\n          <p>You\'ve been added to the waiting list</p>\n        </div>\n\n        <div class="footerWrapper"></div>\n    </div>\n</div>\n'
    },
    useData: !0
}), this.templates.terms = Handlebars.template({
    1: function(e, t, a, n) {
        var o;
        return "                    <span>" + (null != (o = this.lambda(e, e)) ? o : "") + "</span>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, a, n) {
        var o;
        return '<div class="headerWrapper"></div>\n\n<div class="page privacy">\n    <div class="pageContent">\n        <div class="centeredContainer">\n            <h2 class="headerTitle">\n' + (null != (o = t.each.call(e, null != (o = null != (o = null != e ? e.terms : e) ? o.header : o) ? o.title : o, {
            name: "each",
            hash: {},
            fn: this.program(1, n, 0),
            inverse: this.noop,
            data: n
        })) ? o : "") + '            </h2>\n        </div>\n\n        <div class="contentWrapper">\n            <p class="lastModified">Last Modified: ' + this.escapeExpression(this.lambda(null != (o = null != (o = null != e ? e.terms : e) ? o.content : o) ? o.lastModified : o, e)) + '</p>\n\n            <p>Welcome to Nuage, provided by Nuage, Inc. (&ldquo;<strong>Nuage</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>our</strong>,&rdquo; or &ldquo;<strong>us</strong>&rdquo;). These Terms of Service govern your use of the Nuage website and the software and services made available there, as well as any other websites, subdomains, or services owned or controlled by Nuage (collectively, the &ldquo;<strong>Service</strong>&rdquo;). To access the Service, users must at all times agree to and abide by these Terms. The Service allows you to submit, store, and access certain business data and other information related to you, your Subscription Organization (defined below), and/or your and/or their business, primarily relating to your domain name registrations (collectively, &ldquo;<strong>Customer Data</strong>&rdquo;).</p>\n\n            <p>This Terms of Service for the Service is a legal contract between you, either an individual subscriber, customer, member, or user of at least 18 years of age or a single company, organization, or entity (&ldquo;<strong>you</strong>&rdquo; or, collectively with other users, &ldquo;<strong>Users</strong>&rdquo;) and Nuage regarding your use of the Service. Nuage may have different roles with respect to different types of Users, and &ldquo;you&rdquo; as used in these Terms will apply to the appropriate type of User under the circumstances.</p>\n\n            <p>Please read carefully the following terms of service. By registering for and/or accessing, browsing, using or subscribing to the Service, or by clicking &ldquo;I Agree,&rdquo; or otherwise affirmatively manifesting your intent to be bound by these Terms of Service, you signify that you have read, understood, and agree to be bound by the following terms, including any additional guidelines and any future modifications (collectively, the &ldquo;<strong>Terms</strong>&rdquo;), and to the collection and use of your personal information as set forth in the Nuage Privacy Policy https://www.nuageapp.com/#/privacy.</p>\n\n            <p>If you are using or opening an account with Nuage on behalf of a company, entity, or organization (collectively, the &ldquo;<strong>Subscribing Organization</strong>&rdquo;) then you represent and warrant that you: (i) are an authorized representative of that entity with the authority to bind such entity to these Terms; (ii) have read these Terms; (iii) understand these Terms, and (iv) agree to these Terms on behalf of such Subscribing Organization.</p>\n\n            <p>Please read these Terms carefully to ensure that you understand each provision. This Agreement contains a mandatory individual arbitration and class action/jury trial waiver provision that requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or class actions.</p>\n\n            <ol>\n                <li><strong>1. License Grant</strong>. Subject to the terms and conditions of these Terms,&nbsp;Nuage hereby grants to you a limited, personal, non-transferable license to use the Service in the manner contemplated by these Terms solely for your internal business purposes. Users shall have no right to sub-license or resell the&nbsp;Service or any component thereof.</li>\n              <li><strong>2. Privacy</strong>. User privacy is important to us. Please read our Privacy Policy https://www.nuageapp.com/#/privacy carefully for details relating to the collection, use, and disclosure of your personal information.</li>\n              <li><strong>3. Individual Features and Services</strong>. Certain features of the Service (&ldquo;<strong>Individual Services</strong>&rdquo;) may have their own terms and conditions that you must agree to when you sign up for that particular product, function, or service (each an &ldquo;<strong>Individual Service Agreement</strong>&rdquo;). An Individual Service Agreement supplements these Terms and is hereby incorporated by reference. If any term of these Terms expressly conflicts with any term of an Individual Service Agreement, the conflicting term in the Individual Service Agreement will control. All other terms and conditions of each agreement will remain in full force and effect. Further, you will be subject to any additional posted guidelines or rules applicable to specific services and features which may be posted from time to time (the &ldquo;<strong>Guidelines</strong>&rdquo;). All such Guidelines are hereby incorporated by reference into the Terms.</li>\n               <li><strong>4. Modification of the Terms</strong>. Nuage reserves the right, at its sole discretion, to change, modify, add, or remove portions of these Terms at any time. You agree to review these Terms and any Guidelines periodically for changes. When we change the Terms in a material manner, we will update the &lsquo;last modified&rsquo; date at the top of this page and notify you that material changes have been made to these Terms. If any such revision is unacceptable to you, your only remedy is to terminate your Nuage User Account.</li>\n               <li><strong>5. Eligibility; Termination</strong>. The Service is not available to persons under 18 years of age or to any Users previously suspended or removed from the Service by Nuage. Nuage may terminate your account, delete any content or information that you have posted on the Service, and/or prohibit you from using or accessing the Services (or any portion, aspect, or feature of the Services) for any reason or no reason, at any time in its sole discretion, with or without notice, including without limitation if it believes that you are under 18.</li>\n                <li>You agree that Nuage, in its sole discretion and for any or no reason, may terminate any account (or any part thereof) you may have with Nuage. In addition, Nuage reserves the right to discontinue any aspect of the Service at any time, including the right to discontinue the display of any Customer Data. You agree that any termination of your access to the Service or any account you may have or portion thereof may be affected without prior notice, and you agree that Nuage will not be liable to you or any third-party for such termination. Any suspected fraudulent, abusive, or illegal activity that may be grounds for termination of your use of the Service may be referred to appropriate law enforcement authorities. These remedies are in addition to any other remedies Nuage may have at law or in equity.</li>\n                <li><strong>6. Account Activity Responsibility</strong>\n               <ol>\n                  <li><strong>6.1. User Accounts</strong>. In order to use certain aspects of the Service, you will have to register for the Service and create an account (&ldquo;<strong>User Account</strong>&rdquo;). When creating your account for the Service, you agree to provide true, accurate, current, and complete information. You further agree to maintain and update your personal information as needed to keep it true, accurate, current, and complete. You are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. If you have reason to believe that your account is no longer secure (for example, in the event of a loss, theft or unauthorized disclosure or use of your ID, password, or any credit, debit or charge card number), you agree to immediately notify Nuage. You may be liable for the losses incurred by Nuage or others due to any unauthorized use of your User Account.</li>\n                  <li><strong>6.2. Administrator Accounts</strong>. The person who first completes the Service registration on behalf of any Subscribing Organization is the initial &ldquo;Administrator&rdquo; for purposes of such Subscribing Organization&rsquo;s use of the Service, and exercises certain options to initially determine the level of access, privacy, and security for the Service related to the Subscribing Organization (&ldquo;<strong>Administrator Account</strong>&rdquo;). For example, the Administrator will determine who can be a User of the Service under the organization associated with that Administrator and Subscribing Organization and the level of privileges that such Users will possess. Once initial registration has been completed, each Subscribing Organization will be able to register additional Administrators. Each Administrator may designate other Users as additional and/or successor Administrators, and is responsible for confirming that those person(s) accept such responsibility. Upon becoming an Administrator, each person will be deemed to agree to the obligations hereunder. In addition, any person designated as the billing contact in the Service billing record for a Subscribing Organization will be deemed to assume the rights and obligations of an Administrator. Administrator Accounts must comply in all respects with all terms and conditions applicable to User Accounts.</li>\n                  <li><strong>6.3. System Access</strong>. You may choose to allow Nuage to automatically retrieve data from your system(s) or third-party systems or services on your behalf. You hereby represent and warrant that you have the permission, authority, and rights to allow Nuage to so automatically access such system(s) and services and you hereby grant Nuage permission to access such system(s) and services and retrieve Customer Data therefrom by indicating the same within your User Account. Nuage disclaims any and all liability associated with accessing and retrieving Customer Data from such system(s) and services on your or your Subscribing Organization&rsquo;s behalf. In order to connect the Service with any third-party service, you hereby designate Nuage as your agent and attorney-in-fact in connection with such service and further authorize us to: (a) store your Customer Data relating to such service; (b) access such service using Customer Data you provide us; (c) use any materials you provide us in order to provide you the Service; (d) gather and export from such service any Customer Data reasonably necessary for us to provide the Service to you; and (e) otherwise take any action in connection with such service as is reasonably necessary for us to provide the Service to you. You agree that those third-party service providers are entitled to rely on the foregoing authorization, agency, and power of attorney granted by you. If at any time you do not have the right and authority to allow Nuage automatic access to such system(s), then you hereby agree to immediately disable such functionality within your User or Administrator Account.</li>\n                    <li><strong>6.4. Account Information</strong>. You acknowledge and agree that Nuage may access, preserve and disclose your account information and related contents if required to do so by law or in a good faith belief that such access preservation or disclosure is reasonably necessary to: (a) comply with legal process; (b) enforce these Terms; (c) respond to claims that any Customer Data violates the rights of third parties; (d) respond to your requests for customer service; or (e) protect the rights, property or personal safety of Nuage, its users, or the public.&nbsp;</li>\n             </ol>\n             </li>\n             <li><strong>7. Payment Terms; Charges and Taxes</strong>\n              <ol>\n                  <li><strong>7.1. Fees and Taxes</strong>. You are responsible for paying any applicable fees as set forth on our Pricing and Payment Terms <a href="https://www.nuageapp.com/#/pricing">https://www.nuageapp.com/#/pricing</a> and applicable taxes associated with the Service in a timely manner with a valid payment method. Unless otherwise stated, all fees are quoted in U.S. Dollars. All payments must be made electronically by the methods specified within the Service. You agree that we may charge your selected payment method for any such fees owed. You are required to keep your billing information current, complete, and accurate (<em>e.g.</em>, a change in billing address, credit card number, or expiration date) and to notify Nuage if your selected payment method is cancelled (<em>e.g.</em>, for loss or theft). All fees and charges are earned upon receipt by us and are nonrefundable (and there are no credits) except (a) as expressly set forth herein, and/or (b) as required by applicable law.</li>\n                    <li><strong>7.2. Charges on Your Account</strong>. You are responsible for all charges incurred under your account made by you or anyone who uses your User Account (including your co-workers, colleagues, team-members, etc.). If your payment method fails or you are past due on amounts owed, we may collect fees owed using other collection mechanisms. Your User Account may be deactivated without notice to you if payment is past due, regardless of the dollar amount. You are also responsible for paying any governmental taxes imposed on your use of the Service, including, but not limited to, sales, use, or value-added taxes. To the extent Nuage is obligated to collect such taxes, the applicable tax will be added to your billing account.</li>\n                 <li><strong>7.3. Payment Authorization</strong>. Authorization to charge your chosen payment method account will remain in effect until you cancel or modify your preferences within the Service; provided, however, that such notice will not affect charges submitted before Nuage could reasonably act. Your charges may be payable in advance, in arrears, per usage, or as otherwise described when you ordered the applicable service or on the Pricing and Payment Terms <a href="https://www.nuageapp.com/#/pricing">https://www.nuageapp.com/#/pricing</a>.&nbsp; You agree that charges may be accumulated as incurred and may be submitted as one or more aggregate charges during or at the end of the applicable billing cycle.</li>\n                 <li><strong>7.4. Changes to Fees</strong>. Nuage reserves the right to change the amount of, or basis for determining, any fees or charges for the Service we provide, and to institute new fees, charges, or terms effective upon prior notice to our Users. You will receive notice of any fee change at least five (5) days before the scheduled date of the transaction and failure to cancel your account as set forth herein will constitute acceptance of such fee change. Any changes to fees will apply only on a prospective basis. If you do not agree to any such changes to fees, charges, or terms, your sole remedy is to cancel your subscription. Fees paid for any subscription term are paid in advance and are not refundable in whole or in part. If you have a balance due on any Service account, you agree that Nuage can charge these unpaid fees to any payment method that you have previously provided.&nbsp;</li>\n                    <li><strong>7.5. Automatic Renewals</strong>. Your Service will be automatically renewed and your credit card account (or other payment method account) will be charged as follows without further authorization from you: (a) every month for monthly subscriptions; (b) upon every one (1) year anniversary for annual subscriptions; (c) such other periodic rate you have selected from among the options offered on the Service. You acknowledge that your subscription is subject to automatic renewals and you consent to and accept responsibility for all related recurring charges to your applicable payment method without further authorization from you and without further notice unless required by law. You acknowledge that the amount of the recurring charge may change if the applicable tax rates change or if there has been a change in the applicable fees.</li>\n             </ol>\n             </li>\n             <li><strong>8. Restrictions.</strong> When using the Service you agree not to: (a) upload or transmit via the Service pornographic, threatening, embarrassing, hateful, racially or ethnically insulting, libelous, or otherwise inappropriate content; (b) use the Service for any purpose that is unlawful or is otherwise prohibited by these Terms; (c) use the Service in any manner that in our sole discretion could damage, disable, overburden, or impair it; (d) attempt to gain unauthorized access to the Service, or any part of them, other User Accounts, computer systems or networks connected to the Service, or any part of them, through hacking, password mining or any other means or interfere or attempt to interfere with the proper working of the Service or any activities conducted on the Service; (e) modify the Service in any manner or form, or use modified versions of the Service, including but not limited to for the purpose of obtaining unauthorized access to the Service; (f) use any robot, spider, scraper, or other automated means to access the Service for any purpose without our express written permission, or bypass any measures we may use to prevent or restrict access to the Service; (g) impersonate another person or access another User&rsquo;s User Account without that User&rsquo;s permission or to violate any contractual or fiduciary relationships;&nbsp; (h) share Nuage-issued passwords with any third party or encourage any other User to do so; (i) misrepresent the source, identity, or content of Customer Data; (j) modify, adapt, translate or create derivative works based upon the Service; (k) reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of the Service, except and only to the extent that such activity is expressly permitted by applicable law notwithstanding this limitation; (l) rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Service to any third party; provide time sharing or similar services for any third party; or use the Service for any purpose other than your own internal business use; (m) remove, circumvent, disable, damage or otherwise interfere with security-related features of the Service, features that prevent or restrict use or copying of any content accessible through the Service or Service, or features that enforce limitations on use of the Service or Service; (n) access the Service if you are a direct competitor of Nuage, except with Nuage&rsquo;s prior written consent, or for any other competitive purposes; or (o) collect or harvest any personally identifiable information, including account names, from the Service.</li>\n              <li><strong>9. Customer Data</strong>\n             <ol>\n                  <li><strong>9.1. Use of Customer Data</strong>. By submitting Customer Data to Nuage, you hereby grant, and represent and warrant that you have all rights necessary to grant, all rights and licenses to the Customer Data required for Nuage and its subcontractors and service providers to provide the Service. Nuage shall have no right to sublicense or resell Customer Data, except however, that you agree that Nuage may collect, analyze, and use data derived from Customer Data, which may include Personal Data and/or information collected from or about an individual but which does not identify the individual personally, as well as data about you, and other Users&rsquo; access and use of the Service, for purposes of operating, analyzing, improving, or marketing the Service and any related services. If Nuage shares or publicly discloses information (<em>e.g.</em>, in marketing materials, or in application development) that is derived from Customer Data, such data will be aggregated or anonymized to reasonably avoid identification of a specific individual or the User. By way of example and not limitation, Nuage may: (a) track the number of users on an anonymized aggregate basis as part of Nuage&rsquo;s marketing efforts to publicize the total number of Users of the Service; (b) analyze aggregated usage patterns for product development efforts; or (c) use anonymous data derived from Customer Data in a form which may not reasonably identify either a particular individual or the User to develop further analytic frameworks and application tools. You further agree that Nuage will have the right, both during and after the term of these Terms, to use, store, transmit, distribute, modify, copy, display, sublicense, and create derivative works of the anonymized, aggregated data.</li>\n                  <li><strong>9.2. Your Responsibilities for Customer Data</strong>. In connection with Customer Data, you hereby represent, warrant, and agree that: (a) you have obtained the Customer Data lawfully, and the Customer Data does not and will not violate any applicable laws or any person or entity&rsquo;s proprietary or intellectual property rights; (b)&nbsp;the Customer Data is free of all viruses, Trojan horses, and other elements that could interrupt or harm the systems or software used by Nuage or its subcontractors to provide the Service; (c) all Customer Data has and will be collected by you in accordance with a privacy policy that permits Nuage to share, collect, use, and disclose such Customer Data as contemplated under these Terms, and if required by applicable law, pursuant to consents obtained by you to do each of the foregoing; (d) you are solely responsible for ensuring compliance with all privacy laws in all jurisdictions that may apply to Customer Data provided hereunder; (e)&nbsp;Nuage may exercise the rights in Customer Data granted hereunder without liability or cost to any third party; and (f) the Customer Data complies with the terms of these Terms. For purposes of clarity, Nuage takes no responsibility and assumes no liability for any Customer Data, and you will be solely responsible for its Customer Data and the consequences of sharing it hereunder. Except as requested by us via the Service, you may not submit any Customer Data that includes any information that can be used to identify, locate, or contact any of your employees, customers, users or potential customers or users, including: (1) first and last name; (2) home or other physical address; (3) telephone number; (4) email address or online identifier associated with an individual; (5) social security number, passport number, driver&rsquo;s license number, or similar identifier; (6) credit or debit card number; (7) employment, financial or health information; or (8) any other information relating to an individual, including cookie information and usage and traffic data or profiles, that is combined with any of the foregoing (collectively, &ldquo;<strong>Personal Data</strong>&rdquo;) without Nuage&rsquo;s prior written approval.</li>\n                 <li><strong>9.3. Security Incidents</strong>. In the event that Customer Data is disclosed to or accessed by an unauthorized party, Nuage will promptly notify you and use reasonable efforts to cooperate with your investigation of the incident; and if such incident triggers any third party notice requirements under applicable laws, you agree that as the owner of the Customer Data, you will be responsible for the timing, content, cost and method of any such notice and compliance with such laws.</li>\n                    <li><strong>9.4. No Responsibility for Backups</strong>. Nuage will not be responsible for any backup, recovery or other steps required to ensure that Customer Data is recoverable in the case of data loss. You are solely responsible for backing up your Customer Data on a regular basis, and taking appropriate steps to safeguard and ensure the integrity of your Customer Data.</li>\n                 <li><strong>9.5. Rights to Customer Data</strong>. You own all right, title and interest (including all intellectual property rights) in and to your Customer Data.</li>\n              </ol>\n             </li>\n             <li><strong>10. Ownership; Proprietary Rights</strong>. The Service is owned and operated by Nuage. The visual interfaces, graphics, design, compilation, information, computer code, products, software, services, and all other elements of the Service provided by Nuage, but expressly excluding any of the foregoing owned or licensed by and posted to the Service at the direction of Users (including without limitation Customer Data) (&ldquo;<strong>Materials</strong>&rdquo;) are protected by intellectual property and other applicable laws. Except for any technology licensed by Nuage, which is owned by and provided by our third-party licensors, all Materials contained in the Service, including without limitation the intellectual property rights therein and thereto, are the property of Nuage or its subsidiaries or affiliated companies. All trademarks, service marks, and trade names are proprietary to Nuage or its affiliates and/or third-party licensors. Except as expressly provided herein, nothing in these Terms shall be deemed to create a license in or under any such Materials or the intellectual property rights therein or thereto, you agree not to sell, license, distribute, copy, modify, publicly perform or display, transmit, publish, edit, adapt, create derivative works from, or otherwise make unauthorized use of the Materials.&nbsp;</li>\n              <li>You may choose to or we may invite you to submit comments or ideas about the Service, including without limitation about how to improve the Service or our products (&ldquo;<strong>Ideas</strong>&rdquo;). By submitting any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place Nuage under any fiduciary or other obligation, and that we are free to use the Idea without any additional compensation to you, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Nuage does not waive any rights to use similar or related ideas previously known to Nuage, or developed by its employees, or obtained from sources other than you.</li>\n              <li><strong>11. Third-Party Sites, Third-Party Information</strong></li>\n              <li>The Service may call the servers of other websites or services solely at the direction of and as a convenience to Users (&ldquo;<strong>Third Party Sites</strong>&rdquo;). Nuage makes no express or implied warranties with regard to the information, or other material, products, or services that are contained on or accessible through Third-Party Sites. Access and use of Third Party Sites, including the information, material, products, and services on such sites or available through such sites, is solely at your own risk.</li>\n             <li>You acknowledge that Nuage does not manage or control the Customer Data that you access, store or distribute through the Service, and accepts no responsibility or liability for that information regardless of whether such Customer Data is transmitted to or by you in breach of these Terms. Nuage makes no warranty with respect to such Customer Data you may access, store or distribute through the Service. In particular, without limiting the generality of the foregoing, Nuage makes no warranty that such Customer Data will be free of any virus, worm, trojan horse, easter egg, time bomb, cancelbot, or other destructive or malicious code or programs. You agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against Nuage with respect to third party and/or Customer Data that you choose to access, store or distribute, through the Service.</li>\n               <li><strong>12. Security and Privacy Settings</strong>. We have implemented commercially reasonable technical and organizational measures designed to secure your Customer Data from accidental loss and from unauthorized access, use, alteration or disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your Customer Data for improper purposes. You understand that internet technologies have the inherent potential for disclosure. You acknowledge that you are under no obligation to provide Personal Data or other sensitive information in order to use the Service and that you provide any such information at your own risk.</li>\n               <li><strong>13. Disclaimers</strong>; <strong>No Warranties</strong></li>\n             <li>The Service and any third-party or Customer Data, software, services, or applications made available in conjunction with or through the Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind either express or implied. To the fullest extent permissible pursuant to applicable law, Nuage, its suppliers, licensors, and partners disclaim all warranties, statutory, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement of proprietary rights.</li>\n             <li>Nuage, its suppliers, licensors, and partners do not warrant that the functions contained in the Service will be uninterrupted or error-free, that the Service will meet your requirements, that defects will be corrected, or that the Service or the server that makes it available is free of viruses or other harmful components.</li>\n                <li>Nuage, its suppliers, licensors, and partners do not warrant or make any representations regarding the use or the results of the use of the Service in terms of correctness, accuracy, reliability, or otherwise. You understand and agree that you download or otherwise obtain third party or Customer Data, material, or data through the use of the Service at your own discretion and risk and that you will be solely responsible for any damage to your computer system or loss of data that results from the download of such third party or User provided information, material, or data. Nuage will not be responsible or liable for the deletion, correction, destruction, damage, loss, or failure to store or maintain any third-party or Customer Data.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Certain state laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers, exclusions, or limitations may not apply to you, and you might have additional rights.</li>\n                <li><strong>14. Limitation of Liability</strong></li>\n             <li>Under no circumstances, including, but not limited to, negligence, will Nuage or its affiliates, contractors, employees, agents, or third-party partners, licensors, or suppliers be liable for any special, indirect, incidental, consequential, punitive, reliance, or exemplary damages (including without limitation losses or liability resulting from loss of data, loss of revenue, anticipated profits, or loss of business opportunity) that result from your use or your inability to use the information or materials on the Service, or any other interactions with Nuage, even if Nuage or a Nuage authorized representative has been advised of the possibility of such damages. Applicable law may not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you. In such cases, Nuage&rsquo;s liability will be limited to the fullest extent permitted by applicable law.</li>\n               <li>In no event will Nuage&rsquo;s or its affiliates&rsquo;, contractors&rsquo;, employees&rsquo;, agents&rsquo;, or third-party partners&rsquo;, licensor&rsquo;s, or suppliers&rsquo; total liability to you for all damages, losses, and causes of action arising out of or relating to these terms or your use of the Service, including without limitation your interactions with other users, (whether in contract, tort including negligence, warranty, or otherwise) exceed the amount paid by you, if any, for accessing the Service during the twelve (12) months immediately preceding the day the act or omission occurred that gave rise to your claim or one hundred dollars, whichever is greater.</li>\n                <li>You acknowledge and agree that Nuage has offered its products and services, set its prices, and entered into these terms in reliance upon the disclaimers of warranty and the limitations of liability set forth herein, that the disclaimers of warranty and the limitations of liability set forth herein reflect a reasonable and fair allocation of risk between the parties (including the risk that a contract remedy may fail of its essential purpose and cause consequential loss), and that the disclaimers of warranty and the limitations of liability set forth herein form an essential basis of the bargain between you and Nuage.</li>\n                <li><strong>15. Indemnification</strong>. You agree to defend, indemnify and hold harmless Nuage and its subsidiaries, agents, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&#39;s fees) arising from: (a) your use of and access to the Service, including any data or work transmitted or received by you; (b) your violation of any term of these Terms, including without limitation, your breach of any of the representations and warranties above; (c) your violation of any third-party right, including without limitation any right of privacy, publicity rights or intellectual property rights; (d) your violation of any law, rule or regulation of the United States or any other country; (e) any claim or damages that arise as a result of any of your Customer Data or any other data that are submitted via your account; or (f) any other party&rsquo;s access and use of the Service with your unique username, password or other appropriate security code. Nuage will have the right to control the defense, settlement, adjustment or compromise of any such claims, actions or proceedings by using counsel selected by Nuage. Nuage will use reasonable efforts to notify you of any such claims, actions, or proceedings upon becoming aware of the same.</li>\n                <li><strong>16. Location of the Service</strong>. The Service is controlled and operated from our facilities in the United States. Nuage makes no representations that the Service is appropriate or available for use in other locations. Those who access or use the Service from other jurisdictions do so at their own volition and are entirely responsible for compliance with local law, including but not limited to export and import regulations. You may not use the Service if you are a resident of a country embargoed by the United States, or are a foreign person or entity blocked or denied by the United States government. Unless otherwise explicitly stated, all materials found on the Service are solely directed to individuals, companies, or other entities located in the U.S. By using the Service, you are consenting to have your personal data transferred to and processed in the United States.</li>\n               <li><strong>17. Governing Law; Arbitration; and Class Action/Jury Trial Waiver</strong>\n               <ol>\n                  <li><strong>17.1. Governing Law</strong>. You agree that: (a) the Service shall be deemed solely based in California; and (b) the Service shall be deemed a passive one that does not give rise to personal jurisdiction over us, either specific or general, in jurisdictions other than California. This Agreement shall be governed by the internal substantive laws of the State of California, without respect to its conflict of laws principles. The parties acknowledge that these Terms evidences a transaction involving interstate commerce. Notwithstanding the preceding sentences with respect to the substantive law, any arbitration conducted pursuant to the terms of these Terms shall be governed by the Federal Arbitration Act (9 U.S.C. &sect;&sect; 1-16). The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. You agree to submit to the personal jurisdiction of the federal and state courts located in Santa Clara County, California for any actions for which we retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a our copyrights, trademarks, trade secrets, patents, or other intellectual property or proprietary rights, as set forth in the Arbitration provision below, including any provisional relief required to prevent irreparable harm. You agree that Santa Clara County, California is the proper forum for any appeals of an arbitration award or for trial court proceedings if the arbitration provision below is found to be unenforceable.</li>\n                  <li><strong>17.2. Arbitration</strong>. Read this section carefully because it requires the parties to arbitrate their disputes and limits the manner in which you can seek relief from Nuage. For any dispute with Nuage, you agree to first contact us at <a href="mailto:contact@nuageapp.com">contact@nuageapp.com</a> and attempt to resolve the dispute with us informally. In the unlikely event that Nuage has not been able to resolve a dispute it has with you after sixty (60) days, we each agree to resolve any claim, dispute, or controversy (excluding any claims for injunctive or other equitable relief as provided below) arising out of or in connection with or relating to these Terms, or the breach or alleged breach thereof (collectively, &ldquo;<strong>Claims</strong>&rdquo;), by binding arbitration by JAMS, under the Optional Expedited Arbitration Procedures then in effect for JAMS, except as provided herein. JAMS may be contacted at www.jamsadr.com. The arbitration will be conducted in Santa Clara County, California, unless you and Nuage agree otherwise. If you are using the Service for commercial purposes, each party will be responsible for paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules, and the award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys&rsquo; fees and reasonable costs for expert and other witnesses. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall be deemed as preventing Nuage from seeking injunctive or other equitable relief from the courts as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, intellectual property or other proprietary rights.</li>\n                   <li><strong>17.3. Class Action/Jury Trial Waiver</strong>. With respect to all persons and entities, regardless of whether they have obtained or used the Service for personal, commercial or other purposes, all claims must be brought in the parties&rsquo; individual capacity, and not as a plaintiff or class member in any purported class action, collective action, private attorney general action or other representative proceeding. This waiver applies to class arbitration, and, unless we agree otherwise, the arbitrator may not consolidate more than one person&rsquo;s claims. You agree that, by entering into these Terms, you and Nuage are each waiving the right to a trial by jury or to participate in a class action, collective action, private attorney general action, or other representative proceeding of any kind.</li>\n                </ol>\n             </li>\n             <li><strong>18. Miscellaneous</strong>\n                <ol>\n                  <li><strong>18.1. Notice and Modifications</strong>. Nuage may provide you with notices, including those regarding changes to Nuage&rsquo;s terms and conditions, by email, regular mail, or postings on the Service. Notice will be deemed given twenty-four hours after email is sent, unless Nuage is notified that the email address is invalid. Alternatively, we may give you legal notice by mail to a postal address, if provided by you through the Service. In such case, notice will be deemed given three days after the date of mailing. Notice posted on the Service is deemed given five (5) days following the initial posting. Nuage reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in these Terms. Nuage is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us. Nuage may, in its sole discretion, modify or update these Terms from time to time, and so you should review this page periodically. When we change the Agreement in a material manner, we will update the &lsquo;last modified&rsquo; date at the top of this page and notify you that material changes have been made to the Agreement. Your continued use of the Service after any such change constitutes your acceptance of the new Terms of Service. If you do not agree to any of these terms or any future Terms of Service, do not use or access (or continue to access) the Service.</li>\n                  <li><strong>18.2. Waiver</strong>. The failure of Nuage to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by Nuage.</li>\n                   <li><strong>18.3. Severability</strong>. If any provision of these Terms, an Individual Service Agreement, or any Guideline is held to be unlawful, void, or for any reason unenforceable, then that provision will be limited or eliminated from these Terms to the minimum extent necessary and will not affect the validity and enforceability of any remaining provisions; except that in the event of unenforceability of the universal Class Action/Jury Trial Waiver, the entire arbitration agreement shall be unenforceable.</li>\n                    <li><strong>18.4. Assignment</strong>. These Terms, Individual Service Agreements, and related Guidelines, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Nuage without restriction.</li>\n                   <li><strong>18.5. Survival</strong>. Upon termination of these Terms, any provision which, by its nature or express terms should survive, shall survive such termination or expiration, including, but not limited to, Sections 3 and 8 through 18.</li>\n                  <li><strong>18.6. Headings</strong>. The heading references herein are for convenience only, do not constitute a part of these Terms, and will not be deemed to limit or affect any of the provisions hereof.</li>\n                    <li><strong>18.7. Entire Agreement</strong>. This, including the agreements incorporated by reference, constitutes the entire agreement between you and Nuage relating to the subject matter herein and will not be modified except in writing, signed by both parties, or by a change made by Nuage as set forth in these Terms.</li>\n                    <li><strong>18.8. Claims</strong>. You and Nuage agree that any cause of action arising out of or related to the Service must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is permanently barred.</li>\n                 <li><strong>18.9. Disclosures</strong>. The Service is offered by Nuage, Inc., located at 71 Stevenson St #400, San Francisco, CA 94105, United States, and can be reached via email at contact@nuageapp.com. If you are a California resident, (a) you may have this same information emailed to you by sending a letter to the foregoing address with your email address and a request for this information; and (b) in accordance with Cal. Civ. Code &sect;1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210 or (916) 445-1254.</li>\n             </ol>\n             </li>\n            </ol>\n        </div>\n\n        <div class="footerWrapper"></div>\n    </div>\n</div>\n';
    },
    useData: !0
}), App.prototype.init = function() {
    $(window).width() < 930 ? this.isMobile = !0 : this.isMobile = !1, this.bindEvents(), this.launchAnimations()
}, App.prototype.bindEvents = function() {
    this.header = $("header"), this.burgerMenu = $("header > .mobile > .burger > .bars"), this.mobileMenu = $("header > .mobile-dropdown"), this.mobileMenuLogin = $("header > .mobile > .link"), this.burgerMenu.bind("click", $.proxy(this.toggleMobileMenu, this)), $(window).bind("resize", $.proxy(this.onResize, this))
}, App.prototype.launchAnimations = function() {
    this.bodyElem.hasClass("home") && $.proxy(this.homeAnims(), this), this.bodyElem.hasClass("features") && $.proxy(this.featuresAnims(), this), this.bodyElem.hasClass("pricing") && (TweenMax.fromTo("body", .8, {
        backgroundColor: "#FFF"
    }, {
        backgroundColor: "#f6f6f6"
    }), $.proxy(this.pricingParallaxAnimations(), this)), this.bodyElem.hasClass("q-and-a") && $.proxy(this.qAndAAnims(), this), this.bodyElem.hasClass("contact") && $.proxy(this.contactAnims(), this), (this.bodyElem.hasClass("privacy") || this.bodyElem.hasClass("terms")) && $.proxy(this.privacyAnims(), this)
}, App.prototype.onResize = function() {
    $(window).width() < 930 ? this.isMobile = !0 : this.isMobile = !1
}, App.prototype.toggleMobileMenu = function() {
    this.burgerMenu.parent().hasClass("active") ? (this.burgerMenu.parent().removeClass("active"), this.mobileMenu.removeClass("active"), this.mobileMenuLogin.addClass("active")) : (this.burgerMenu.parent().addClass("active"), this.mobileMenu.addClass("active"), this.mobileMenuLogin.removeClass("active"))
}, App.prototype.homeAnims = function() {
    var e = new ScrollMagic.Controller,
        t = "208px";
    this.isMobile && (t = "180px");
    var a = new TimelineMax,
        n = a.staggerTo("#intro span", .6, {
            opacity: 1,
            y: "0px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .12).to(".catchPhrase span:first-child", 1, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1, .7)
        }, "-=0.77").to(".catchPhrase span:nth-child(2)", 1, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }, "-=0.9").to(".centeredContainer .catchCta .cta--invite", .9, {
            y: "0px",
            width: t,
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1.2, .7)
        }, "-=0.9").staggerTo(".block", 1.2, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1.2, .7)
        }, .1, "-=0.9");
    new ScrollMagic.Scene({
        triggerElement: ".page.home",
        triggerHook: 1
    }).setTween(n).addTo(e)
}, App.prototype.pricingParallaxAnimations = function() {
    var e = new ScrollMagic.Controller,
        t = [".headerTitle span:nth-child(2)", ".headerTitle span:nth-child(3)", ".headerTitle span:nth-child(4)", ".headerTitle span:nth-child(5)", ".headerTitle span:nth-child(6)"],
        a = new TimelineMax,
        n = a.to(".headerTitle span:nth-child(1)", 1.2, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }, "-=1.1").staggerTo(t, .6, {
            opacity: 1,
            y: "-=140px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .05, "-=1").staggerTo(".headerSubtitle span", 1.3, {
            y: "0px",
            scale: 1,
            opacity: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 1)
        }, .1, "-=0.75"),
        o = (new ScrollMagic.Scene({
            triggerElement: ".pageHeader",
            triggerHook: 1
        }).setTween(n).addTo(e), new TimelineMax);
    o.staggerTo(".domainsBlocksWrapper .domainBlock", 1, {
        y: "0",
        opacity: 1,
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, 1)
    }, .06, "+=0.15"), new ScrollMagic.Scene({
        triggerElement: ".domainsBlocksWrapper",
        triggerHook: 1
    }).setTween(o).addTo(e)
}, App.prototype.featuresAnims = function() {
    var e = new ScrollMagic.Controller,
        t = TweenMax.fromTo(".sectionSearchWrapper .searchBlock", 1.6, {
            y: "+=120px",
            scale: .95,
            opacity: .98
        }, {
            y: "+20px",
            scale: 1,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }),
        a = [".headerTitle span:nth-child(3)", ".headerTitle span:nth-child(4)", ".headerTitle span:nth-child(5)", ".headerTitle span:nth-child(6)", ".headerTitle span:nth-child(7)", ".headerTitle span:nth-child(8)", ".headerTitle span:nth-child(9)", ".headerTitle span:nth-child(10)", ".headerTitle span:nth-child(11)", ".headerTitle span:nth-child(12)"],
        n = new TimelineMax,
        o = n.to(".headerTitle span:first-child", 1.1, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }).to(".headerTitle span:nth-child(2)", 1.1, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }, "-=1").staggerTo(a, .5, {
            opacity: 1,
            y: "-=140px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .05, "-=0.95").to(".headerSubtitle", 1.5, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 1)
        }, "-=0.65").to(".headerSubtitle", .8, {
            opacity: 1,
            ease: Power3.easeInOut
        }, "-=1.55"),
        n = (new ScrollMagic.Scene({
            triggerElement: ".pageHeader",
            triggerHook: 1
        }).setTween([t, o]).addTo(e), new TimelineMax),
        i = n.to(".sectionContactsWrapper .box", 1.4, {
            y: "-=70px",
            ease: Elastic.easeOut.config(1, 1),
            force3D: !0
        }).staggerTo(".contacts li", 1.4, {
            scale: 1,
            opacity: 1,
            x: "+=12px",
            ease: Elastic.easeInOut,
            force3D: !0
        }, .32, "-=1.6"),
        r = (new ScrollMagic.Scene({
            triggerElement: ".sectionContactsWrapper",
            triggerHook: .5
        }).setTween(i).addTo(e), new TimelineMax);
    r.staggerTo(".dnsZones li", 1.2, {
        scale: 1,
        y: "+=14px",
        ease: Elastic.easeInOut,
        force3D: !0
    }, .12).staggerTo(".dnsZones li", .6, {
        opacity: 1,
        ease: Power3.easeOut
    }, .12, "-=1").to(".dnsBlock", 1.3, {
        y: "-=12px",
        scale: 1,
        ease: Elastic.easeInOut,
        force3D: !0
    }, "-=1.2").to(".dnsBlock", .3, {
        opacity: 1,
        ease: Power3.easeInOut
    }, "-=0.8");
    var s = (new ScrollMagic.Scene({
        triggerElement: ".sectionDNSWrapper",
        triggerHook: .6
    }).setTween(r).addTo(e), new TimelineMax);
    s.to(".sectionServicesWrapper .serviceBlock", .8, {
        y: "-=30px",
        opacity: 1,
        ease: Elastic.easeOut.config(1, 1),
        force3D: !0
    }).to(".sectionServicesWrapper li:nth-child(2)", .8, {
        scale: 1,
        y: "-=80px",
        x: "-=80px",
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, 1),
        force3D: !0
    }, "-=0.65").to(".sectionServicesWrapper li:nth-child(4)", .8, {
        scale: 1,
        y: "-=80px",
        x: "+=80px",
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, 1),
        force3D: !0
    }, "-=0.8").to(".sectionServicesWrapper li:nth-child(3)", .8, {
        scale: 1,
        y: "-=30px",
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, 1),
        force3D: !0
    }, "-=0.8").to(".sectionServicesWrapper li:nth-child(3)", .8, {
        scale: 1,
        y: "-=20px",
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, 1),
        force3D: !0
    }, "-=0.75").to(".sectionServicesWrapper li:nth-child(1)", .8, {
        scale: 1,
        y: "-=35px",
        x: "-=35px",
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, 1),
        force3D: !0
    }, "-=0.6").to(".sectionServicesWrapper li:last-child", .8, {
        scale: 1,
        y: "-=35px",
        x: "+=35px",
        transformOrigin: "center center",
        ease: Elastic.easeOut.config(1, 1),
        force3D: !0
    }, "-=0.8").to(".sectionServicesWrapper li:nth-child(2)", .7, {
        opacity: 1,
        ease: Elastic.easeOut.config(1, 1)
    }, "-=0.95").to(".sectionServicesWrapper li:nth-child(4)", .7, {
        opacity: 1,
        ease: Elastic.easeOut.config(1, 1)
    }, "-=0.95").to(".sectionServicesWrapper li:nth-child(3)", .7, {
        opacity: 1,
        ease: Elastic.easeOut.config(1, 1)
    }, "-=1.05").to(".sectionServicesWrapper li:nth-child(1)", .7, {
        opacity: 1,
        ease: Elastic.easeOut.config(1, 1)
    }, "-=0.8").to(".sectionServicesWrapper li:last-child", .7, {
        opacity: 1,
        ease: Elastic.easeOut.config(1, 1)
    }, "-=0.8"), new ScrollMagic.Scene({
        triggerElement: ".sectionServicesWrapper",
        triggerHook: .3
    }).setTween(s).addTo(e)
}, App.prototype.subscribeAnims = function() {
    var e = new ScrollMagic.Controller,
        t = TweenMax.fromTo(".sectionSearchWrapper .searchBlock", 1.6, {
            y: "+=120px",
            scale: .95,
            opacity: .98
        }, {
            y: "+20px",
            scale: 1,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }),
        a = [".headerTitle span:nth-child(1)", ".headerTitle span:nth-child(2)", ".headerTitle span:nth-child(3)", ".headerTitle span:nth-child(4)", ".headerTitle span:nth-child(5)", ".headerTitle span:nth-child(6)", ".headerTitle span:nth-child(7)", ".headerTitle span:nth-child(8)", ".headerTitle span:nth-child(9)", ".headerTitle span:nth-child(10)"],
        n = new TimelineMax,
        o = n.staggerTo(a, .5, {
            opacity: 1,
            y: "-=140px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .05, "-=0.95").to(".headerSubtitle", 1.5, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 1)
        }, "-=0.65").to(".headerSubtitle", .8, {
            opacity: 1,
            ease: Power3.easeInOut
        }, "-=1.55").to(".signUpForm .firstNameInput", .8, {
            y: "0px",
            scale: 1,
            opacity: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 1)
        }, "-=1.4").to(".signUpForm .emailInput", .8, {
            y: "0px",
            scale: 1,
            opacity: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 1)
        }, "-=1.3").to(".signUpForm .cta", .8, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 1)
        }, "-=1.2").to(".signUpForm .cta", .5, {
            opacity: 1,
            ease: Power3.easeInOut
        }, "-=1.16");
    new ScrollMagic.Scene({
        triggerElement: ".pageHeader",
        triggerHook: 1
    }).setTween([t, o]).addTo(e)
}, App.prototype.signInAnims = function() {
    var e = new ScrollMagic.Controller,
        t = TweenMax.fromTo(".sectionSearchWrapper .searchBlock", 1.6, {
            y: "+=120px",
            scale: .95,
            opacity: .98
        }, {
            y: "+20px",
            scale: 1,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }),
        a = [".headerTitle span:nth-child(1)", ".headerTitle span:nth-child(2)", ".headerTitle span:nth-child(3)", ".headerTitle span:nth-child(4)", ".headerTitle span:nth-child(5)", ".headerTitle span:nth-child(6)", ".headerTitle span:nth-child(7)", ".headerTitle span:nth-child(8)", ".headerTitle span:nth-child(9)", ".headerTitle span:nth-child(10)"],
        n = new TimelineMax,
        o = n.staggerTo(a, .5, {
            opacity: 1,
            y: "-=140px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .05, "-=0.95").staggerTo("form input", .7, {
            opacity: 1,
            y: "0px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .1, "-=0.4").to(".forgotenPass", 1, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 1)
        }, "-=0.65").to(".forgotenPass", .8, {
            opacity: 1,
            ease: Power3.easeInOut
        }, "-=1.2");
    new ScrollMagic.Scene({
        triggerElement: ".pageHeader",
        triggerHook: 1
    }).setTween([t, o]).addTo(e)
}, App.prototype.qAndAAnims = function() {
    var e = new ScrollMagic.Controller,
        t = TweenMax.fromTo(".sectionSearchWrapper .searchBlock", 1.6, {
            y: "+=120px",
            scale: .95,
            opacity: .98
        }, {
            y: "+20px",
            scale: 1,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }),
        a = [".headerTitle span:nth-child(1)", ".headerTitle span:nth-child(2)", ".headerTitle span:nth-child(3)", ".headerTitle span:nth-child(4)"],
        n = new TimelineMax,
        o = n.staggerTo(a, 1, {
            opacity: 1,
            y: "0px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .1, "-=0.95").to(".headerSubtitle", .7, {
            opacity: 1,
            y: "0px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, "-=1").to(".contentWrapper", .7, {
            opacity: 1,
            ease: Power1.easeInOut
        }, "-=1");
    new ScrollMagic.Scene({
        triggerElement: ".pageHeader",
        triggerHook: 1
    }).setTween([t, o]).addTo(e)
}, App.prototype.contactAnims = function() {
    var e = new ScrollMagic.Controller,
        t = TweenMax.fromTo(".sectionSearchWrapper .searchBlock", 1.6, {
            y: "+=120px",
            scale: .95,
            opacity: .98
        }, {
            y: "+20px",
            scale: 1,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }),
        a = [".headerTitle span:nth-child(1)", ".headerTitle span:nth-child(2)", ".headerTitle span:nth-child(3)", ".headerTitle span:nth-child(4)"],
        n = new TimelineMax,
        o = n.staggerTo(a, 1, {
            opacity: 1,
            y: "0px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .1, "-=0.95").to(".headerSubtitle", .7, {
            opacity: 1,
            y: "0px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, "-=1").to(".contactBox", .7, {
            opacity: 1,
            ease: Power1.easeInOut
        }, "-=1");
    new ScrollMagic.Scene({
        triggerElement: ".pageHeader",
        triggerHook: 1
    }).setTween([t, o]).addTo(e)
}, App.prototype.privacyAnims = function() {
    var e = new ScrollMagic.Controller,
        t = [".headerTitle span:nth-child(3)", ".headerTitle span:nth-child(4)", ".headerTitle span:nth-child(5)", ".headerTitle span:nth-child(6)", ".headerTitle span:nth-child(7)", ".headerTitle span:nth-child(8)", ".headerTitle span:nth-child(9)"],
        a = new TimelineMax,
        n = a.to(".headerTitle span:first-child", 1.1, {
            y: "0px",
            scale: 1,
            rotation: "0deg",
            transformOrigin: "center center",
            opacity: 1,
            ease: Elastic.easeOut.config(1, 1)
        }).staggerTo(t, .7, {
            opacity: 1,
            y: "0px",
            ease: Elastic.easeOut.config(1, 1.14),
            force3D: !0
        }, .05, "-=0.95").to(".contentWrapper", .7, {
            opacity: 1,
            ease: Power1.easeInOut
        }, "-=0.7");
    new ScrollMagic.Scene({
        triggerElement: ".pageHeader",
        triggerHook: 1
    }).setTween([browserAnim, n]).addTo(e)
};
var App = new App;