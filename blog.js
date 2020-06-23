let author_id = 0;
const comments = [];
function getComment() {
    var c = document.getElementsByName('comment')[0].value;
    if(c.length === 0 ){
        alert('value required');
    } else {
      author_id++;
      comments.push({comment:c, author:author_id, child:[]});
      console.log(comments);  
      let div = document.createElement('div');
      div.classList.add('comment');
      div.id = 'comment_'+author_id;
      div.style.border = '1px solid';
      div.style.padding = '15px';
      div.style.marginBottom = '15px';
      let h2 = document.createElement('h2');
      h2.innerHTML = c;
      var p = document.createElement("P");
      p.innerHTML = author_id;
      let input = document.createElement('INPUT');
      input.setAttribute('type', 'text');
      input.setAttribute('name', 'reply');
      input.value = '';
      input.setAttribute('placeholder', 'Enter reply');
      let btn = document.createElement('BUTTON');
      btn.innerHTML = 'Reply';
      btn.classList.add('btn');
      btn.classList.add('btn-primary');
      btn.id = author_id;
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(input);
      div.appendChild(btn);
      document.getElementById('parent_comment').appendChild(div);    
     }
  }

let child = 0;
  document.getElementById('parent_comment').addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){
      let parent = e.target.parentNode;
      let id = e.target.id;

      var c = document.getElementsByName('reply')[0].value;
      if(c.length === 0 ){
          alert('value required');
      } else {
        child++;
      comments.forEach(item=>{
        if(item.author === parseInt(id)){
          item.child.push({comment:c, author:child+''+id, child:[]});
        }
      })  
      let div = document.createElement('div');
      div.classList.add('comment');
      div.id = 'comment_'+author_id;
      div.style.border = '1px solid';
      div.style.padding = '15px';
      div.style.marginBottom = '15px';
      let h2 = document.createElement('h2');
      h2.innerHTML = c;
      var p = document.createElement("P");
      p.innerHTML = author_id;
      let btn = document.createElement('BUTTON');
      btn.innerHTML = 'Reply';
      let input = document.createElement('INPUT');
      input.setAttribute('type', 'text');
      input.setAttribute('name', 'reply');
      input.value = '';
      input.setAttribute('placeholder', 'Enter reply');
      btn.classList.add('btn');
      btn.classList.add('btn-primary');
      btn.id = author_id;
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(input);
      div.appendChild(btn);
      parent.appendChild(div);
      console.log(comments);
      }
    }
    })





let counter = 0;
function getValues() {
    var title = document.getElementsByName('title')[0].value;
    var desc = document.getElementsByName('desc')[0].value;
    console.log(title, desc);
    if(title.length === 0 || desc.length === 0){
        alert('value required');
    } else {
    counter++;    
    let div = document.createElement('div');
    div.classList.add('blog');
    div.id = 'blog_'+counter;
    div.style.border = '1px solid';
    div.style.padding = '15px';
    div.style.marginBottom = '15px';
    let h2 = document.createElement('h2');
    h2.innerHTML = title;
     var p = document.createElement("P");
     p.innerHTML = desc;
     let btn = document.createElement('BUTTON');
     btn.innerHTML = 'Delete';
     btn.classList.add('btn');
     btn.classList.add('btn-danger');
     btn.id = 'blog_btn'+counter;
     div.appendChild(h2);
     div.appendChild(p);
     div.appendChild(btn);
    document.getElementById('parent_blog').appendChild(div);    
     }
  }


document.getElementById('parent_blog').addEventListener('click', (e)=>{
if(e.target.tagName === 'BUTTON'){
  let parent = e.target.parentNode;
  parent.remove();
}
})  

let count = 3;
window.addEventListener('scroll', (e)=>{
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        count++;
        let parent = document.getElementById('parent');
        let blog = document.createElement('div');
        blog.classList.add('row');
        blog.id = 'blog_'+count;
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Blog '+count;
        let img = document.createElement('img');
        img.setAttribute('src', '1.png');
        img.classList.add('col-md-5');
         var p = document.createElement("P");
         p.classList.add('col-md-7');
         p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  sheets containing Lorem Ipsum passages, and more recently with desktop  ublishing software like Aldus PageMaker including versions of Lorem Ipsum.';
         blog.appendChild(h1);
         blog.appendChild(img);
         blog.appendChild(p);
         parent.append(blog);   
    }
    let el = document.getElementById('top');
    if(window.scrollY > 200) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
    });
 
    