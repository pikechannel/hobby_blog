<script>
    let menu = [
        {
            name: "プロフィール",
            href: "/profile",
        },
        {
            name: "プライバシーポリシー",
            href: "/privacy",
        },
    ];

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<header class="bg-white shadow-md mb-1">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <!-- ロゴ -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">
                    Pike's Blog
                </a>
            </div>

            <!-- デスクトップメニュー -->
            <div class="hidden md:flex md:items-center md:space-x-8">
                {#each menu as item}
                    <a 
                        href={item.href}
                        class="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                    >
                        {item.name}
                    </a>
                {/each}
            </div>

            <!-- モバイルメニューボタン -->
            <div class="md:hidden flex items-center">
                <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-300"
                    on:click={toggleMenu}
                >
                    <span class="sr-only">メニューを開く</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- モバイルメニュー -->
        {#if isMenuOpen}
            <div class="md:hidden">
                <div class="pt-2 pb-3 space-y-1">
                    {#each menu as item}
                        <a
                            href={item.href}
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </nav>
</header>

<style>
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    :global(.md\:hidden > div) {
        animation: slideDown 0.2s ease-out forwards;
    }
</style>
