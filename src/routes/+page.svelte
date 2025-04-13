<script>
    import HeaderLogoPng from "$lib/img/header_logo.png";
    import HeaderLogoWebp from "$lib/img/header_logo.webp";
</script>

<section>
    <div class="w-full">
        <img
            src={HeaderLogoPng}
            alt=""
            srcset={HeaderLogoWebp}
            class="m-auto"
        />
    </div>
</section>

<div class="flex">
    <main class="w-3/4">
        <section>
            <h2>記事一覧</h2>
            <section class="pr-6 pl-6">
                <!-- 繰り返し -->
                <div class="w-full h-32 border-1 rounded-lg flex items-center p-3">
                    <!-- サムネイル？ -->
                    <div class="w-128 h-25">
                        <img
                            src={HeaderLogoPng}
                            alt=""
                            class="object-cover w-full h-25"
                        />
                    </div>
                    <div class="break-all">
                        <div>タイトル</div>
                        <div>
                            descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
                        </div>
                    </div>
                </div>
                <!-- 繰り返し -->
            </section>
            <section>
                <div>ページング or もっとみるボタン</div>
            </section>
        </section>
    </main>
    
    <aside class="w-1/4">
        テスト
    </aside>
</div>
