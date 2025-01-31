const COMPONENTS = [{
    icon: 'globe',
    color: 'primary',
    link: 'https://odoo.com',
    title: 'Odoo',
    size: 6,
}, {
    icon: 'globe',
    color: 'primary',
    link: 'https://www.vauxoo.com',
    title: 'Vauxoo',
    size: 6,
}, {
    icon: 'cloud-fill',
    color: 'gray',
    link: 'https://www.odoo.sh/project',
    title: 'Odoo.sh',
    size: 6,
}, {
    icon: 'cloud-fill',
    color: 'gray',
    link: 'https://deployv.net/my/projects',
    title: 'Deployv',
    size: 6,
}, {
    icon: 'patch-question',
    color: 'danger',
    title: 'Support',
    size: 6,
    shortcuts: [{
        title: 'Odoo',
        link: 'https://www.odoo.com/help',
    }, {
        title: 'Vauxoo',
        link: 'https://www.vauxoo.com/en_US/helpdesk',
    }],
}, {
    icon: 'robot',
    color: 'green',
    title: 'Runbot',
    size: 6,
    shortcuts: [{
        title: 'Odoo',
        link: 'https://runbot.odoo.com',
    }, {
        title: 'Vauxoo',
        link: 'https://runbot.vauxoo.com/runbot',
    }],
}, {
    icon: 'robot',
    color: 'green',
    link: 'https://downloads.deployv.net/minio/login',
    title: 'Minio',
    size: 6,
}, {
    icon: 'robot',
    color: 'green',
    link: 'https://logs.vauxoo.com',
    title: 'Graylogs',
    size: 6,
}, {
    icon: 'card-text',
    color: 'purple',
    link: 'https://www.odoo.com/forum/help-1',
    title: 'Forum',
    size: 6,
}, {
    icon: 'boxes',
    color: 'blue',
    title: 'Apps Store',
    size: 6,
    shortcuts: [{
        title: 'Apps',
        link: 'https://apps.odoo.com/apps/modules',
    }, {
        title: 'Themes',
        link: 'https://apps.odoo.com/apps/themes',
    }],
}, {
    icon: 'book',
    color: 'pink',
    title: 'Documentation',
    size: 12,
    shortcuts: [{
        title: 'Videos',
        link: 'https://www.odoo.com/slides/all',
    }, {
        title: 'User Docs',
        link: 'https://www.odoo.com/documentation/15.0/applications.html',
    }, {
        title: 'Developer',
        link: 'https://www.odoo.com/documentation/15.0/developer.html',
    }, {
        title: 'Installation',
        link: 'https://www.odoo.com/documentation/15.0/administration.html',
    }, {
        title: 'Awesome-Odoo',
        link: 'https://desdelinux.github.io/awesome-odoo',
    }],
}, {
    icon: 'youtube',
    color: 'pink',
    title: 'Youtube',
    size: 12,
    shortcuts: [{
        title: 'Odoo',
        link: 'https://www.youtube.com/c/Odooapps',
    }, {
        title: 'Vauxoo',
        link: 'https://www.youtube.com/c/Vauxoo',
    }, {
        title: 'Odoo Mates',
        link: 'https://www.youtube.com/c/OdooMates',
    }],
}, {
    icon: 'github',
    color: 'dark',
    link: 'https://github.com/vauxoo',
    title: 'Github Vauxoo',
    size: 6,
}, {
    icon: 'git',
    color: 'dark',
    link: 'https://git.vauxoo.com',
    title: 'Gitlab Vauxoo',
    size: 6,
}, {
    icon: 'github',
    color: 'dark',
    title: 'Github',
    size: 12,
    shortcuts: [{
        title: 'Source Code CE',
        link: 'https://github.com/odoo/odoo/tree/master',
        items: {
            '15.0': 'https://github.com/odoo/odoo/tree/15.0',
            '14.0': 'https://github.com/odoo/odoo/tree/14.0',
            '13.0': 'https://github.com/odoo/odoo/tree/13.0',
        }
    }, {
        title: 'Source Code EE',
        link: 'https://github.com/odoo/enterprise/tree/master',
        items: {
            '15.0': 'https://github.com/odoo/enterprise/tree/15.0',
            '14.0': 'https://github.com/odoo/enterprise/tree/14.0',
            '13.0': 'https://github.com/odoo/enterprise/tree/13.0',
        }
    }, {
        title: 'Issues CE',
        link: 'https://github.com/odoo/odoo/issues',
    }, {
        title: 'PR CE',
        link: 'https://github.com/odoo/odoo/pulls',
    }, {
        title: 'PR EE',
        link: 'https://github.com/odoo/enterprise/pulls',
    }],
}];

let componentContent = '';
COMPONENTS.forEach(component => {
    let shortcutsContent = '';
    let linkContent = '';
    if (component.shortcuts) {
        component.shortcuts.forEach(shortcut => {
            if (shortcut.items) {
                let items = '';
                for (let option in shortcut.items) {
                    items += `<li><a class="dropdown-item" target="_blank" href="${shortcut.items[option]}">${option}</a></li>`
                }
                shortcutsContent += `\
                    <div class="btn-group" role="group">
                        <a class="btn btn-${component.color}-soft ms-2 btn-sm" href="${shortcut.link}" target="_blank">
                            ${shortcut.title}
                        </a>
                        <div class="btn-group" role="group">
                            <button class="btn btn-${component.color}-soft btn-sm dropdown-toggle" type="button" id="options" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="options">
                                ${items}
                            </ul>
                        </div>
                    </div>
                `;
            } else {
                shortcutsContent += `\
                    <a class="btn btn-${component.color}-soft ms-2 btn-sm" href="${shortcut.link}" target="_blank">
                        ${shortcut.title}
                    </a>
                `;
            }
        });
    } else {
        linkContent = `<a class="link" href="${component.link}" target="_blank"></a>`;
    }
    componentContent += `\
        <div class="col-${component.size || 6} my-1">
            <div class="ou-link border rounded position-relative">
                ${linkContent}
                <div class="d-flex align-items-center p-2">
                    <div class="flex-shrink-0">
                        <div class="rounded-circle ou-icon-container ou-bg-${component.color}">
                            <i class="bi bi-${component.icon}"></i>
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-2">
                        <h6 class="mb-0">${component.title}</h6>
                    </div>
                    ${shortcutsContent}
                </div>
            </div>
        </div>
    `;
});
document.querySelector('.ou-link-container').innerHTML = componentContent;

document.querySelector('.ou-open-options-page').addEventListener('click', ev => {
    chrome.tabs.create({ url: 'options.html' });
});
