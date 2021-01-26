const inserted = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;';
};

const unbind = () => {
    const body = document.body || document.documentElement;
    body.style.position = '';
    const top = body.style.top;
    document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top!, 10);
    body.style.top = '';
};

// 适用于弹窗滚动, 弹窗需v-if条件渲染
export const vScroll = {
    inserted,
    unbind
};
