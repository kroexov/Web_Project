let posts;
let template;

window.addEventListener('load', function () {
    posts = document.getElementById('posts');
    template = document.getElementById("template");
    loadPage();
});

const getPosts = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        });
}

const loadPage = async () => {

    posts.innerHTML = '<img src="https://a-mne.ru/image/catalog/themevolty/pageloader/ttv_loading.gif" alt="mask" class="preloader">';

    try {
        let bottom = Math.ceil(Math.random() * 100);
        if (bottom > 90)
            bottom = 90;
        const data = (await getPosts()).slice(bottom, bottom + 10);
        posts.innerHTML = '';
        for (const item of data) {
            const post = template.content.cloneNode(true);
            let p_user = post.querySelector(".post__user");
            p_user.textContent = "User " + item.id;
            let p_title = post.querySelector(".post__title");
            p_title.textContent = item.title;
            let p_body = post.querySelector(".post__body");
            p_body.textContent = item.body;
            posts.appendChild(post);
        }
    } catch (e) {
        while (posts.firstChild) {
            posts.removeChild(posts.firstChild);
        }
        let error_message = document.createElement('span');
        let nodeText = document.createTextNode("Error occurred:\n" + e.toString());
        error_message.appendChild(nodeText);
        posts.appendChild(error_message);
    }
}


