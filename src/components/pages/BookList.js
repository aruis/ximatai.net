import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';

const BookCard = ({ book }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative max-w-sm  shadow-lg m-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex">
                <div
                    className={`relative w-1/3 transition-transform duration-300 ${hovered ? 'transform rotate-45 -translate-x-8 -translate-y-8' : 'transform translate-x-0 translate-y-0'}`}>
                    <img className="w-full h-full object-cover" src={book.cover} alt={book.title} />
                </div>
                <div className="flex-1 p-4">
                    <div className={`transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="font-bold text-xl mb-2">{book.title}</div>
                        <p className="text-neutral-300 text-base">{book.author}</p>
                    </div>
                    {hovered && (
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-slate-50 rounded p-4  overflow-y-auto">
                            <p className="text-gray-700 text-base">{book.recommendation}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const BookList = () => {
    const books = {
        '要是我在学生时代能看过这些书就好了': [
            {
                cover: 'pic/ksnkx.png',
                title: '考试脑科学：脑科学中的高效记忆法',
                author: '[日]池谷裕二',
                recommendation: '一本薄书，讲述关于记忆的事情。如果你曾经因为背诵课文或者记忆知识而烦恼，那这本书一定可以给你不一样的启发。'
            },
            {
                cover: 'pic/sdbtk.png',
                title: '诗的八堂课',
                author: '江弱水',
                recommendation: '诗词是一种高度凝练的艺术，而艺术的美是相通的。透过本书，你不光能够以全新视角领略诗词之美，更能从此获得一双发现美的眼睛，从而拥抱更加美妙的世界。'
            },
            {
                cover: 'pic/hkyhj.jpeg',
                title: '黑客与画家',
                author: '保罗·格雷厄姆',
                recommendation: '每个人都会经历一段想象力和热情喷薄奔涌的时光，我希望你能在最有创造力的时候遇到这本书，不要给自己设限，也没有人能够给你设限。'
            },
            {
                cover: 'pic/sjnmd.jpg',
                title: '世界这么大，带你去看看',
                author: '林楚方',
                recommendation: '一本读起来上头的书，即使我高中时是个理科生，之前地理、历史都在及格线上挣扎，但是不妨碍我被这本书所吸引。这本书不光带我们看了这世界，更带我们看了这世界的过去，以及它此刻为何如此。恰如它的副标题所说——“人类文明地标45讲”，这本书真的做到了带我去看看人类这几千年的璀璨文明，当然也包括文明的代价。'
            },
            {
                cover: 'pic/nwebd.jpeg',
                title: '纳瓦尔宝典',
                author: '埃里克·乔根森',
                recommendation: '《纳瓦尔宝典》并不是一本传统意义上的自助书籍或商业指南，而是更像是一本思想集锦，汇集了Ravikant在不同场合、不同平台上的言论和写作。这些内容涉及投资策略、决策理论、生活哲学等多个方面，展现了作者对于现代生活和成功的独到见解。'
            },
        ],
        '软件工程': [
            {
                cover: 'link_to_cover_image3.jpg',
                title: 'Clean Code',
                author: 'Robert C. Martin',
                publisher: 'Prentice Hall',
                recommendation: '如何编写整洁且可维护的代码。'
            },
            // Add three more books for this category
        ],
        // Add two more categories with four books each
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
