const mainMenu = [
    {
        isTitle: true,
        isSub: false,
        title: "Menu",
    },
    {
        isTitle: false,
        isSub: false,
        title: "Calendar",
        icon: "feather-calendar",
        href: "#",
    },
    {
        isTitle: false,
        isSub: true,
        title: "Pages",
        icon: "feather-copy",
        href: "#",
        sub: [
            {
                title: "Invoice",
                href: "#",
            },
            {
                title: "Starter Page",
                href: "#",
            },
            {
                title: "Maintenance",
                href: "#",
            },
            {
                title: "FAQs",
                href: "#",
            },
            {
                title: "Pricing",
                href: "#",
            },
            {
                title: "Login",
                href: "#",
            },
        ],
    },
    {
        isTitle: true,
        isSub: false,
        title: "Extra",
    },
    {
        isTitle: false,
        isSub: false,
        title: "Report",
        icon: "feather-calendar",
        href: "#",
    },
    {
        isTitle: false,
        isSub: true,
        title: "Sale",
        icon: "feather-copy",
        href: "#",
        sub: [
            {
                title: "Create",
                href: "#",
            },
            {
                title: "List",
                href: "#",
            },
        ],
    },
];

export default mainMenu;
