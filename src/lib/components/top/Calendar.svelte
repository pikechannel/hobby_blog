<script lang="ts">
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    // 日付の配列を生成（1から最終日まで）
    const days: (number | undefined)[] = Array.from({ length: lastDay }, (_, i) => i + 1);
    
    // 月初めの空きマスを追加
    const calendar: (number | undefined)[][] = [];
    const firstWeek = Array(startDay).fill(undefined).concat(days.slice(0, 7 - startDay));
    calendar.push(firstWeek);
    
    // 残りの週を追加
    for (let i = 7 - startDay; i < lastDay; i += 7) {
        calendar.push(days.slice(i, i + 7));
    }
    
    // 最後の週が7日未満の場合、undefinedで埋める
    if (calendar[calendar.length - 1].length < 7) {
        calendar[calendar.length - 1] = [
            ...calendar[calendar.length - 1],
            ...Array(7 - calendar[calendar.length - 1].length).fill(undefined)
        ];
    }
</script>

<section id="calendar">
    <div id="calendar-box">
        {#each calendar as week}
            <div class="week">
                {#each week as day}
                    {#if day === today.getDate()}
                        <span class="day w-8 h-[30px] leading-[30px] align-middle inline-block text-center rounded-full bg-sky-400">{day}</span>
                    {:else}
                        <span class="day w-8 h-[30px] leading-[30px] align-middle inline-block text-center">{day}</span>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</section>
