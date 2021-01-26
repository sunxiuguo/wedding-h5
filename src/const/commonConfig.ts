const avatarSuffix = 'imageView2/1/w/200/h/200/q/75|imageslim'; // 七牛云图片样式, 200*200居中裁剪

const days = Math.floor((Date.now() - new Date('2017/06/16').getTime()) / 1000 / 60 / 60 / 24);

export default {
    // Home
    year: '2020',
    month: '12',
    day: '03',
    time: '上午 10:00',
    location: '山东省青岛市即墨区',
    locationDesc: '详细地址待定', // 黄河一路68号

    // Couple
    maleFirstName: '修国',
    maleLastName: '孙',
    femaleFirstName: ' 佳',
    femaleLastName: '祝',
    famelaeAvatar: `https://cdn.zhusun.club/female_avatar.jpeg?${avatarSuffix}`,
    maleAvatar: `https://cdn.zhusun.club/male_avatar.jpeg?${avatarSuffix}`,
    maleDesc: `我是孙修国, 今生有幸遇到了👉这只, 我们已经在一起${days}天啦！`,
    femaleDesc: '我是祝佳儿, 我在工作第二年认识了👈这只, 我..我遇人不淑啊！',

    // QuotaFrase
    frase: '我们彼此会相互守候，相互支持，共度余生。',

    // Story
    storyList: [
        {
            year: '2016年',
            month: '12月',
            title: '我们的相遇',
            desc:
                '在公司里, 我们第一次在qq上沟通, 处理工作。\n 当时的我：这姑娘怎么蠢萌蠢萌的, 啥都不懂？？\n 当时的她：这哥们这头像, 怕是个30多岁的大叔吧？？',
            imgSrc: 'https://cdn.zhusun.club/d93cec1bb15b558fde0173ca0a47f38f.png'
        },
        {
            year: '2017年',
            month: '05月',
            day: '27日',
            title: '我们的第一次旅行 - 南京',
            desc: '渐渐的我们的话题越来越多, \n我觉得她是蠢比, \n她觉得我是丑比, \n便相约端午一起去南京旅行',
            imgSrc: 'https://cdn.zhusun.club/nanjing.jpeg'
        },
        {
            year: '2017年',
            month: '06月',
            day: '15日',
            title: '我们在一起了！',
            desc: '',
            imgSrc: 'https://cdn.zhusun.club/5ccd2c785bc1d2733ec1f826742cc41f.jpeg'
        },
        {
            year: '2017年',
            month: '07月',
            day: '21日',
            title: '吵架送花约定',
            desc:
                '我们约定：以后平时送花, 就想送就送。 \n如果两个人吵架了, 第二天就一定要互相送花, 花语就是答案, 送花之后就要和解。\n然而我第一次送你的居然是个花篮....',
            imgSrc: 'https://cdn.zhusun.club/flower_1.jpeg'
        },
        {
            year: '2018年',
            month: '02月',
            day: '15日',
            title: '情人节 + 生日',
            desc:
                '不知道该送给你什么礼物, 觉得送什么都不能表达我的心意。\n于是买了一大堆, 裙子鞋子小戒指! \n我最喜欢的其实还是这个照片墙',
            imgSrc: 'https://cdn.zhusun.club/picture_wall_new.jpeg'
        },
        {
            year: '2018年',
            month: '04月',
            day: '29日',
            title: '一起回我家见父母',
            desc: '爸爸妈妈特别开心, \n自己养的猪终于学会拱白菜了',
            imgSrc: 'https://cdn.zhusun.club/51.jpeg'
        },
        {
            year: '2018年',
            month: '06月',
            day: '15日',
            title: '在一起一周年！',
            desc: '',
            imgSrc: 'https://cdn.zhusun.club/1year.jpeg'
        },
        {
            year: '2018年',
            month: '06月',
            day: '18日',
            title: '佳佳一家来北京',
            desc: '叔叔阿姨姐姐他们一起来北京游玩\n圆满完成接待任务！！',
            imgSrc: 'https://cdn.zhusun.club/family.jpeg'
        },
        {
            year: '2018年',
            month: '06月',
            day: '23日',
            title: '家里多了个小生命',
            desc:
                '同事家里产了一窝猫崽！\n一直想养一只猫, 又怕养不好。\n转头一想, 以后还得养孩子呢, 权当先实习一波...\n取名：佩奇',
            imgSrc: 'https://cdn.zhusun.club/cat.jpeg'
        },
        {
            year: '2018年',
            month: '09月',
            day: '08日',
            title: '欢乐谷',
            desc: '来北京一年多了, 工作有点累\n但是身边有人陪伴, 一起来欢乐谷玩一下！\n美滋滋',
            imgSrc: 'https://cdn.zhusun.club/huanlegu.jpeg'
        },
        {
            year: '2018年',
            month: '10月',
            day: '20日',
            title: '佩奇',
            desc: '佩奇长残了',
            imgSrc: 'https://cdn.zhusun.club/pig.jpeg'
        },
        {
            year: '2019年',
            month: '05月',
            day: '02日',
            title: '上海旅行',
            desc:
                '今年的旅行来到了上海, 来到了迪士尼\n晚上放烟花前还碰到一个小妹妹找不到妈妈了, 我们一起帮忙打电话找\n最后小妹妹爷爷妈妈冲了过来把她抱走了',
            imgSrc: 'https://cdn.zhusun.club/dishini_new.jpeg'
        },
        {
            year: '2020年',
            month: '01月',
            day: '11日',
            title: '求婚',
            desc: '今天公司开年会, 毛奖都没抽到！\n年会后疯狂赶回家, 布置求婚现场！\n求婚成功~',
            imgSrc: 'https://cdn.zhusun.club/qiuhun_new.jpeg'
        }
    ],

    // gallary
    gallaryList: [
        {
            coverImageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            title: '初见',
            id: 0,
            content: [
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
            ]
        },
        {
            coverImageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            title: '相册2',
            id: 1,
            content: [
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
            ]
        },
        {
            coverImageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            title: '相册3',
            id: 2,
            content: [
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
            ]
        },
        {
            coverImageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            title: '相册4',
            id: 3,
            content: [
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
            ]
        },
        {
            coverImageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            title: '相册5',
            id: 4,
            content: [
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
            ]
        },
        {
            coverImageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            title: '相册6',
            id: 5,
            content: [
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
                'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
            ]
        }
    ],
    maskQuestions: [
        {
            question: '我们是哪一天在一起的',
            answer: '20170615'
        },
        {
            question: '我们什么时候领了结婚证',
            answer: '20201120'
        },
        {
            question: '我们的婚礼是什么日子',
            answer: '20201122'
        }
    ] as Array<{
        question: string;
        answer: string;
    }>
};
