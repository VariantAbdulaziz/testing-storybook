<template>
  <div>
    <div
      class="fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2"
    >
      <div
        class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center"
      >
        <div
          class="w-3/5 sm:w-1/3 group/input pointer-events-auto relative h-full rounded-md pt-2 transition-all"
        >
          <div
            class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm"
          >
            <input
              type="text"
              maxlength="100"
              class="h-full w-0 flex-1 bg-transparent text-13 outline-none"
              placeholder="Search courses..."
            />
            <div
              class="relative z-20 shrink-0 cursor-pointer text-sm text-[#707070] hover:text-[#ffffff]"
            >
              x
            </div>
            <div
              class="bg-gradient-top absolute bottom-0 left-0 right-0 h-[1px] w-full"
            />
          </div>
        </div>
      </div>
      <el-button
        class="group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95"
      >
        <div
          class="absolute inset-0 z-0 flex h-full w-full items-center justify-center"
        >
          <div
            class="gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded"
          ></div>
        </div>
        <div
          class="relative z-10 flex items-center justify-center gap-2 group-hover:text-black"
        >
          <font-awesome-icon :icon="['fas', 'user-plus']" /> Join Us
        </div>
      </el-button>
    </div>
  </div>
</template>
