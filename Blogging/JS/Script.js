function blogSubmit() {
    var blog_title = document.getElementById("title").value;
    var blog_article = document.getElementById("article").value;
    var blog_image = document.getElementById("image").value;



    var parentTag = document.getElementById("cont");

    var containerTag = document.createElement("div");
    var show_title = document.createElement("div");
    var show_article = document.createElement("a");
    var show_img = document.createElement("img");



    var displayContent = document.createTextNode(blog_title)
    show_title.appendChild(displayContent);
    show_article.append(blog_article);
    

    containerTag.appendChild(show_title);
    containerTag.appendChild(show_img);
    containerTag.appendChild(show_article);

    containerTag.setAttribute("class","main");
    show_title.setAttribute("class","title_styles");
    show_article.setAttribute("class","article_styles");
    show_img.setAttribute("class","img_styles");
    show_img.setAttribute("src",blog_image);
    show_article.href = blog_image;
    parentTag.appendChild(containerTag);
    
    // reset();
}
function reset() {
    document.getElementById("title").value="";
    document.getElementById("article").value="";
    document.getElementById("image").value="none";

}