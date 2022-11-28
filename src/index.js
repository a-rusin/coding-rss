import { Article } from './js/Article'
import { ArticleModal } from './js/AricleModal'
import { Modal } from './js/Modal'

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    }, 
    {
        id: 4,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/3.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 5,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/4_1.png',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 6,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/1.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 7,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/2.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 8,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/1.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 9,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 9,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/4_1.png',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    }
];

window.onload = function () { 

    /// Render Articles
    if (data) {
        generateArticlesToDom();
    }


    /// Tags
    addTagsClickHandler(); 

    /// Generate Base Modal from Modal Class
    addToolsClickHandler();

    window.addEventListener('scroll', changeScrollValue)

}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            removeSelectedTags();
            selectClickedTag(e.target);
            if (e.target.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategiesBySelectedTag(e.target.innerText);  
            }
        }
    })
}

const removeSelectedTags = () => {
    document.querySelectorAll('.strategies__tags .tag').forEach(element => {
        element.classList.remove('tag_selected');
        element.classList.add('tag_bordered');
    })
}

const selectClickedTag = (tag) => {
    tag.classList.remove('tag_bordered');
    tag.classList.add('tag_selected');
}

const showAllStrategies = () => {
    document.querySelectorAll('.strategy-wrapper .strategy').forEach(elem => {
        elem.classList.remove('strategy_hidden');
    })
}

const filterStrategiesBySelectedTag = (selectedTag) => {
    document.querySelectorAll('.strategy-wrapper .strategy').forEach(elem => {
        elem.classList.add('strategy_hidden');
        elem.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerHTML === selectedTag) {
                elem.classList.remove('strategy_hidden');
            }
        })
    })

}

const generateArticlesToDom = () => {
    let strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(elem => {
        strategiesWrapper.append(elem.generateArticle());
    })

    addStrategyClickHandler();

}

const getStrategiesWrapper = () => {
    const strategiesWrapper = document.querySelector('.strategy-wrapper');
    strategiesWrapper.innerHTML = '';
    return strategiesWrapper;
}

const generateArticles = (data) => {
    let articles = [];
    data.forEach (article => {
        articles.push(new Article(article))
    });
    console.log(articles);
    return articles;
}

const addToolsClickHandler = () => {
    document.querySelector('.tools__button .button').addEventListener('click', () => {
        generateToolsModal();
    })
}

const generateToolsModal = () => {
    renderModalWindow('testing modal!')
}

const renderModalWindow = (content) => {
    let modal = new Modal('tools-modal');
    modal.buildModal(content);
}

const addStrategyClickHandler = () => {
    document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
        if (e.target.closest('.strategy')) {
            let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
            let clickedStrategyData = getClickedData(clickedStrategyId);

            renderArticleModalWindow(clickedStrategyData);
        }
    })
}

const getClickedData = (id) => {
    return data.find(article => article.id == id);
}

const renderArticleModalWindow = (article) => {
    let modal = new ArticleModal('article-modal', article);
    console.log(modal.title);
    modal.renderModal();
}

const changeScrollValue = () => {
    document.querySelector('.progressbar-line').style.width = window.scrollY * 100 / (document.body.scrollHeight - window.innerHeight) + '%';
}
