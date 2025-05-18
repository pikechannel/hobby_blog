<script>
    let menu = [
        {
            name: "HOME",
            href: "/",
        },
        {
            name: "プロフィール",
            href: "/profile",
        },
        {
            name: "プライバシーポリシー",
            href: "/privacy",
        },
    ];
</script>

<header>
    <nav class="pb-3 pl-[100px] pr-[100px] text-sm whitespace-nowrap">
        <ul class="flex justify-around">
            {#each menu as item}
                <li
                    class="hover:text-sky-700 hover:bg-sky-100 transition duration-300 w-72 h-16 relative"
                >
                    <a
                        href={item.href}
                        class="absolute m-auto -translate-y-1/2 -translate-x-1/2 top-[50%] left-[50%]"
                    >
                        <span>{item.name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>
