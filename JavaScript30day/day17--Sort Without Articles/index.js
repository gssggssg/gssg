const myUl = document.getElementsByClassName("content")[0].getElementsByTagName("ul")[0];

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];


// 先按照从
let data = bands.sort(
  (a, b) => {
    return a.replace(/^(a |an |the)/i, '').trim() > b.replace(/^(a |an |the)/i, '').trim() ? 1 : -1;
  }
);

// 处理好的结果最后渲染出来
data.map(
  (item) => {
    let newLi = document.createElement("li");
    newLi.innerText = item;
    myUl.appendChild(newLi);
  }
)