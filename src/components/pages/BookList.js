import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';

const BookCard = ({book}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative shadow-lg m-4 h-44 w-96"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex">
                <div
                    className={`relative max-w-40 h-44 transition-transform duration-300 ${hovered ? 'transform  -translate-x-4 -translate-y-4' : 'transform translate-x-0 translate-y-0 z-0'}`}>
                    <img className="h-full object-contain" src={'pic/' + book.cover} alt={book.title}/>
                </div>
                <div className="flex-1 p-4">
                    <div className={`transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="font-bold text-xl mb-2">{book.title}</div>
                        <p className="text-neutral-300 text-base">{book.author}</p>
                    </div>
                    <div
                        className={`absolute z-10 top-0 left-0 w-full bg-slate-50 shadow-xl rounded p-4 overflow-y-auto transition-all duration-300 transform ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <p className="text-gray-700 text-base  min-h-44 border-2 border-dashed border-gray-400 p-4">{book.recommendation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BookList = () => {
    const books = {
        '要是我在学生时代能看过这些书就好了': [
            {
                cover: 'ksnkx.jpg',
                title: '考试脑科学：脑科学中的高效记忆法',
                author: '池谷裕二',
                recommendation: '一本薄书，讲述关于记忆的事情。如果你曾经因为背诵课文或者记忆知识而烦恼，那这本书一定能给你带来一些启发。'
            },
            {
                cover: 'sdbtk.jpg',
                title: '诗的八堂课',
                author: '江弱水',
                recommendation: '诗词是一种高度凝练的艺术，而艺术的美是相通的。透过本书，你不光能够以全新视角领略诗词之美，更能从此获得一双发现美的眼睛，从而拥抱更加美妙的世界。'
            },
            {
                cover: 'hkyhj.jpg',
                title: '黑客与画家',
                author: '保罗·格雷厄姆',
                recommendation: '每个人都会经历一段想象力和热情喷薄奔涌的时光，我希望你能在最有创造力的时候遇到这本书，不要给自己设限，也没有人能够给你设限。'
            },
            {
                cover: 'sjnmd.jpg',
                title: '世界这么大，带你去看看',
                author: '林楚方',
                recommendation: '一本读起来上头的书，即使是我这个地理、历史都在及格线上挣扎的理科生，也不妨碍我被这本书所吸引。这本书不光带我们看了这世界，更带我们了解了这世界的过去，以及它此刻为何如此。恰如它的副标题所说——“人类文明地标45讲”，这本书真的做到了带我去看看人类这几千年的璀璨文明，当然也包括文明的代价。'
            },
            {
                cover: 'nwebd.jpg',
                title: '纳瓦尔宝典',
                author: '埃里克·乔根森',
                recommendation: '这并不是一本传统意义上的成功励志书或商业指南，而是更像是一本思想集锦，汇集了纳瓦尔在不同场合、不同平台上的言论和思想。这些内容涉及投资策略、决策理论、生活哲学等多个方面，展现了作者对于现代生活和成功意义的独到见解。'
            },
        ],
        '复杂的成年人世界': [
            {
                cover: 'xlnkx.jpg',
                title: '效率脑科学：卓有成效地完成每一项工作',
                author: '戴维·罗克',
                recommendation: '成年人总要面对接二连三的人和接二连三的事，并且他们往往都在计划外。没有人能够面面俱到，所以如何在有限的资源下把事情向你期望的方向推进才是重中之重。这书就是教你这个的，并且全书没有任何说教，只有鲜活的场景案例。'
            },
            {
                cover: 'ysjt.jpg',
                title: '原生家庭：如何修补自己的性格缺陷',
                author: '苏珊·福沃德，克雷格·巴克',
                recommendation: '不管你承不承认，我们的性格品行受儿时原生家庭的影响是极为深刻的。是我们儿时的成长环境造就了今日的我们。如果有那么一刻，你觉得自己的性格不对劲的话，相信我，那不是你的错。这本书还有一个译名：《有毒的父母》，按书中所说，如果我们意识不到的话，这个“毒”是会继续传染的，所以我们需要读这本书。正视过去，不惧未来。'
            },
            {
                cover: 'hhxc.jpg',
                title: '好好相处：这样的关系最舒服',
                author: '埃里克‧巴克',
                recommendation: '这是一本讲人与人之间关系的书。作者用不长的篇幅分别对朋友关系、夫妻关系以及人与社会其他个体的关系做了精确解读，并且给出了疗愈友情、爱情的良方。我想对任何有想呵护的友情或者爱情的人来说，这本书都是实用的。最重要的，作者一针见血地点出了这个时代在社会层面，导致人与人之间关系逐渐走样，社会道德观发生变化的本质原因——个人主义的盛行。大量孤独、抑郁的心态产生都与此脱不了干系，曾经，我们是背靠集体的一份子，如今，我们享有空前的自由，但能为自己兜底的也仅有自己。认识到这一点，或许我们可以拥有超越时代的视角，重新审视一下自己的所求所愿。'
            },
            {
                cover: 'tbzy.jpg',
                title: '逃避自由',
                author: '艾里希·弗洛姆',
                recommendation: '这本书对理解人类行为、社会动态以及自由的多重含义具有重要意义。它不仅在心理学和社会学领域产生了深远影响，也对广大读者在理解个人与社会的关系方面提供了深刻的洞见。'
            },
        ],
        '循大师之路，感悟人生': [
            {
                cover: 'wydt.jpg',
                title: '我与地坛',
                author: '史铁生',
                recommendation: '这是一个苦命而深刻的人，他用平实的文字把自己细腻的心展示了出来。这文字充满了温度与力量，洞穿了我一个凡夫俗子的心。'
            },
            {
                cover: 'btydyq.jpg',
                title: '被讨厌的勇气',
                author: '岸見一郎，古賀史健',
                recommendation: '2022年带给我惊喜的一本书，我身边几位朋友读过这本书后都表示很受启发。这个“阿德勒哲学”有点厉害。2024年4月，我刚读完了它的姊妹篇《幸福的勇气》，依旧收获颇多，在此一并推荐。'
            },
            {
                cover: 'csl.jpg',
                title: '沉思录',
                author: '玛克思·奥勒留',
                recommendation: '一位手握巅峰权利的皇帝，却过着苦修生活；一本写给自己的修行笔记，却意外流落民间。这薄薄的一本书，即使过了快两千年，仍有壁立千仞之姿。每每读之，震撼莫名。'
            },
            {
                cover: 'rsdzh.jpg',
                title: '人生的智慧',
                author: '叔本华',
                recommendation: '这个犀利的老头基本上从任何你可能关注的角度阐述了他对人生的看法，哪些是他推崇备至的，哪些是他嗤之以鼻的，都尽在这本书里。如果哲学家有“武力值”的话，相信叔本华肯定是遥遥领先的那位，他的文笔如刀，但不是传统意义上入木三分的刻刀，而是见血封喉的匕首。'
            },
        ],
        '程序员加油站·入门篇': [
            {
                cover: 'plsd.jpg',
                title: '普林斯顿计算机公开课',
                author: ' 布莱恩·W.柯尼汉',
                recommendation: '这书的作者可不是一般人，他老人家可以是参与过Unix操作系统和C语言开发的。这本书的内容涵盖面很广，但是作者以大师的经验及视角把这些并不深奥的知识讲述给现在社会的每一个人，作为读者一不小心就会沉浸其中。堪称最好读的计算机通识书。'
            },
            {
                cover: 'bm.jpg',
                title: '编码：隐匿在计算机软硬件背后的语言',
                author: 'Charles Petzold',
                recommendation: '写给计算机小白的科普书，但却也是是否登堂入室的分水岭。封面所说：“永不退缩的计算机科学经典著作”实至名归。读罢之后能对计算机底层硬件及原理有个非常深刻的认识。'
            },
            {
                cover: 'jssw.jpg',
                title: '计算思维史话',
                author: '托尼·海依，奎利·帕佩',
                recommendation: '这是一本计算机历史书，不同于其他类似的书籍，这本书的作者是真正的编程大佬，曾任微软的副总裁。所以无论从史料的丰富性，细节的严谨性，技术的自洽性来说，这本书都是殿堂级的。堪称计算机学子必读的一本书。'
            },
            {
                cover: 'sftj.jpg',
                title: '算法图解',
                author: '巴尔加瓦',
                recommendation: '迄今为止读过的最有趣的算法书，也算是激发我阅读兴趣的一本书。我于2017年第一次读到它之后，才在工作多年之后又一次打开了阅读世界的大门，所以它在我心中的份量是别的书无法比拟的。'
            },
        ],
        '程序员加油站·提升篇': [
            {
                cover: 'yushu.jpg',
                title: '深度学习入门：基于Python的理论与实现',
                author: '斋藤康毅',
                recommendation: '这么具体地讲一个技术的书籍放在这个书单里可能有点突兀。但是机器学习尤其是深度学习，其算法背后的支撑思想真的是太重要了，重要到每个搞计算机的都应该学习一下，甚至我觉得各行各业的人都应该了解一下。而这本书，就是众多机器学习入门书中学习曲线最平缓的一本。'
            },
            {
                cover: 'fhjg.jpg',
                title: '凤凰架构：构建可靠的大型分布式系统',
                author: '周志明',
                recommendation: '架构师之书，复杂应用系统架构设计的集大成者。不好说书中讲的都对，但如果读者能把握具体技术背后透露的哲思，绝对有拨云见日之感，往后再谈架构设计，一定会更加游刃有余。'
            },
            {
                cover: 'devops.jpg',
                title: 'DevOps实践指南（第2版）',
                author: '吉恩·金，耶斯·亨布尔，帕特里克·德布瓦，约翰·威利斯',
                recommendation: '长达十多年的编程工作中，偶尔也会遇到折戟沉沙的项目，我常常想，难道需求多变或者客户也没想透需求就是项目出问题的根因么？如果仅是这样？那这样的工作还有盼头可言么？直到遇到了这本书，我想似乎我找到答案了。'
            },
        ],

    };

    return (
        <div className="bg-slate-900  text-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-slate-100 mb-8">老刘推荐书单</h1>
                {Object.keys(books).map(category => (
                    <div key={category} className="mb-12">
                        <h2 className="text-lg font-light text-center mb-4 text-slate-200 py-2 px-4 border-b-2 border-gray-600 shadow-lg">
                            {category}
                        </h2>


                        <div className="flex flex-wrap justify-center">
                            {books[category].map((book, index) => (
                                <BookCard key={index} book={book}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
