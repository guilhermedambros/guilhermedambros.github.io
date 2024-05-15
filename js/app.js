
window.addEventListener('load', (event) => {
    var userLang = navigator.language || navigator.userLanguage; 
    var url_string = window.location.href;
    var url = new URL(url_string);
    var lang = url.searchParams.get("lang");
    if(lang == null){
        lang = userLang;
    }
    if(languages[lang] == null){
        alert("Linguagem não encontrada. Utilizando 'ptbr'... ");
        window.location.href = "https://guilhermedambros.github.io/?lang=ptbr";
    }else{
        setResume(lang.replace('-', '').toLowerCase())
    }
    
    
});


function setResume(lang){
    clear();     
    if(lang == 'en'){
        let link = document.getElementById("linkedin");
        link.setAttribute('href', "https://www.linkedin.com/in/guilherme-dambros/?locale=en_US");
    }    
    document.getElementById('current_position').innerHTML = languages[lang].resume.current_position;
    document.getElementById('cover_letter_title').innerHTML = languages[lang].resume.cover_letter.title;
    document.getElementById('education_title').innerHTML = languages[lang].resume.education.title;
    document.getElementById('career_title').innerHTML = languages[lang].resume.career.title;
    languages[lang].resume.cover_letter.description.paragraphs.forEach(newParagraph);
    languages[lang].resume.education.items.forEach(newEducationRow);
    languages[lang].resume.career.items.forEach(newCareerRow);
}

function clear(){
    document.querySelectorAll('.career-row').forEach(function(a){
        a.remove()
    })
    document.querySelectorAll('.education-row').forEach(function(a){
        a.remove()
    })
    document.querySelectorAll('.cover-letter').forEach(function(a){
        a.remove()
    })
}

function newParagraph(element, index, array) {
    let p = document.createElement("p");
    p.classList.add("cover-letter");
    let conteudo = document.createTextNode(element);
    p.appendChild(conteudo);    
    let el = document.getElementById("cover_letter_description");
    el.appendChild(p);
}

function newEducationRow(element, index, array) {
    let after_div = document.getElementById("after_education_row");
    let div_parent = document.createElement("div");
    let div_child = document.createElement("div");
    let short_div = document.createElement("div");
    let i = document.createElement("i");    
    let h4 = document.createElement("h4");
    div_parent.classList.add("row");
    div_parent.classList.add("education-row");
    div_parent.classList.add("border-bottom");
    div_parent.classList.add("border-light");
    div_child.classList.add("col-md-4");
    div_child.classList.add("col-sm-12");
    div_child.classList.add("col-xs-12");
    div_child.classList.add("col-lg-4");
    short_div.classList.add("short-div");
    if((document.querySelectorAll('.education-row').length % 2) == 0){
        div_parent.classList.add("bg-light");
    }
    i.innerHTML =element.institution_name +'</br>'+element.city+'</br>'+element.year; 
    short_div.appendChild(i);
    div_child.appendChild(short_div);
    div_parent.appendChild(div_child);

    div_child = document.createElement("div");
    short_div = document.createElement("div");
    div_child.classList.add("col-lg-8");
    div_child.classList.add("col-md-8");
    div_child.classList.add("text-start");
    div_child.classList.add("col-xs-12");
    short_div.classList.add("short-div");
    let conteudo = document.createTextNode(element.course_name);
    h4.appendChild(conteudo); 
    short_div.appendChild(h4);
    div_child.appendChild(short_div);
    div_parent.appendChild(div_child);

    document.body.insertBefore(div_parent, after_div);
}

function newCareerRow(element, index, array) {
    let after_div = document.getElementById("after_career_row");
    let div_parent = document.createElement("div");
    let div_child = document.createElement("div");
    let short_div = document.createElement("div");
    let i = document.createElement("i");    
    let h4 = document.createElement("h4");
    div_parent.classList.add("row");
    div_parent.classList.add("career-row");
    div_parent.classList.add("border-bottom");
    div_parent.classList.add("border-light");
    div_child.classList.add("col-md-3");
    div_child.classList.add("col-sm-12");
    div_child.classList.add("col-xs-12");
    div_child.classList.add("col-lg-4");
    short_div.classList.add("short-div");
    if((document.querySelectorAll('.career-row').length % 2) == 0){
        div_parent.classList.add("bg-light");
    }
    i.innerHTML =element.institution_name +'</br>'+element.local+'</br>'+element.between; 
    short_div.appendChild(i);
    div_child.appendChild(short_div);
    div_parent.appendChild(div_child);

    div_child = document.createElement("div");
    short_div = document.createElement("div");
    div_child.classList.add("col-lg-8");
    div_child.classList.add("col-md-9");
    div_child.classList.add("text-start");
    div_child.classList.add("col-xs-12");
    short_div.classList.add("short-div");
    let conteudo = document.createTextNode(element.position);
    h4.appendChild(conteudo); 
    short_div.innerHTML = getHtmlCareer(element);
    div_child.appendChild(short_div);
    div_parent.appendChild(div_child);

    document.body.insertBefore(div_parent, after_div);
}

function getHtmlCareer(element){
    let html = "<h4>"+element.position_name+"</h4>";
    html += "<ul>";
    for(let i=0; i < element.tasks.length; i++){
        html += "<li>"+element.tasks[i]+"</li>";
    }
    html += "</ul>";
    return html;
}
