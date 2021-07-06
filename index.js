let getdata = (url, targetId, newsnumber) => {
    fetch(url)
    .then(response => {
    return response.json();
    })
    .then(data => {
        let corrElement = document.getElementById(targetId);
        // console.log(data.articles[newsnumber]);
        let title = document.createElement('h4');
        title.innerText = data.articles[newsnumber].title;
        corrElement.appendChild(title);
        let date = document.createElement('div');
        date.className = 'date';
        let articleData = new Date(data.articles[newsnumber].publishedAt);
        date.innerText = articleData.toUTCString();
        corrElement.appendChild(date);
        let author = document.createElement('div');
        author.className = 'author';
        author.innerText = 'Author: ' + (data.articles[newsnumber].author ? data.articles[newsnumber].author : "Anonymous");
        corrElement.appendChild(author);
        let div = document.createElement('div');
        div.className = 'imageText';
        let image = document.createElement('img');
        image.src = (data.articles[newsnumber].urlToImage ? data.articles[newsnumber].urlToImage : "https://adipropcare.com/assets/img/noimg.png");
        div.appendChild(image);
        let comtent = document.createElement('p');
        comtent.innerText = (data.articles[newsnumber].content ? data.articles[newsnumber].content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim harum, modi quis nesciunt corrupti dolor, explicabo ullam quam veniam porro sunt voluptatem? Fuga et asperiores, fugit repellendus quod cupiditate veniam!");
        div.appendChild(comtent);
        corrElement.appendChild(div);
        let link = document.createElement('a');
        link.className = 'link';
        link.href = data.articles[newsnumber].url;
        link.innerText = 'visit the original site';
        corrElement.appendChild(link);
        
    })
    .catch(e => console.error(e));
  
}

getdata("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f5877686677a4b18863d26fcf57c0e65", "business", 6);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f5877686677a4b18863d26fcf57c0e65", "business", 9);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f5877686677a4b18863d26fcf57c0e65", "business", 4);

getdata("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f5877686677a4b18863d26fcf57c0e65", "general", 2);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f5877686677a4b18863d26fcf57c0e65", "general", 3);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f5877686677a4b18863d26fcf57c0e65", "general", 4);

getdata("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f5877686677a4b18863d26fcf57c0e65", "health", 1);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f5877686677a4b18863d26fcf57c0e65", "health", 3);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f5877686677a4b18863d26fcf57c0e65", "health", 4);

getdata("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f5877686677a4b18863d26fcf57c0e65", "sports", 2);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f5877686677a4b18863d26fcf57c0e65", "sports", 3);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f5877686677a4b18863d26fcf57c0e65", "sports", 4);

getdata("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f5877686677a4b18863d26fcf57c0e65", "technology", 2);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f5877686677a4b18863d26fcf57c0e65", "technology", 3);
getdata("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f5877686677a4b18863d26fcf57c0e65", "technology", 4);