// hamburger is here
const hamburger = document.getElementById("menu-toggle");
hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`; // default icon
hamburger.addEventListener("click", () => {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle('show');
    hamburger.classList.toggle("active");
    // change the hamburger icon to x mark and vice versa
    if(hamburger.classList.contains("active")){
        hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }else{
        hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
    
    
    
})

// blog post is here
import data from '../data.js';

const blogContainer = document.getElementById("blog-posts-container");
// blog posts are here 
data.forEach((blog) => {
    if(blog.id > 3) return; // Limit to 6 blogs
    blogContainer.innerHTML += 
    `
        <div class="blog-card">
            <img src="${blog.image}" alt="Blog Image" class="blog-image">
            <div class="blog-content">
                <p class="blog-date">${blog.date}</p>
                <h2 class="blog-title">${blog.title}</h2>   
                <p class="blog-body">${blog.body}</p>
            </div>
        </div>
    `
})

// copyright is here
const copyRightEl = document.getElementById("copyright");
const year = new Date().getFullYear();
copyRightEl.innerHTML = `Copyright &copy; ${year}`;