var contents = [
  {
    title: "Tiêu đề bài viết 1",
    thumbnail:
      "https://fastly.picsum.photos/id/668/300/300.jpg?hmac=HLROXo5TChrai69D04nx0w8LRY2wNmqKlHB7cNkKpFw",
    excerpt: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
    nostrum aliquid quod ratione consequuntur ipsam ab porro
    explicabo, nobis et eveniet repellat inventore cumque obcaecati
    quam quo dolor enim odio?`,
  },
  {
    title: "Tiêu đề bài viết 2",
    thumbnail:
      "https://fastly.picsum.photos/id/668/300/300.jpg?hmac=HLROXo5TChrai69D04nx0w8LRY2wNmqKlHB7cNkKpFw",
    excerpt: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
    nostrum aliquid quod ratione consequuntur ipsam ab porro
    explicabo, nobis et eveniet repellat inventore cumque obcaecati
    quam quo dolor enim odio?`,
  },
  {
    title: "Tiêu đề bài viết 3",
    thumbnail:
      "https://fastly.picsum.photos/id/668/300/300.jpg?hmac=HLROXo5TChrai69D04nx0w8LRY2wNmqKlHB7cNkKpFw",
    excerpt: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
    nostrum aliquid quod ratione consequuntur ipsam ab porro
    explicabo, nobis et eveniet repellat inventore cumque obcaecati
    quam quo dolor enim odio?`,
  },
];

var html = `<div class="content">

${contents.map(function (content, index) {
  return `<div class="item">
        <div class="${index % 2 !== 0 ? "right" : "img-item"}">
          <img
            src= ${content.thumbnail}
            alt=""
            class="${index % 2 !== 0 ? "right" : ""}"
          />
        </div>
        <div class="text-content">
          <div class="title">
            <h2>${content.title}</h2>
          </div>
          <div class="text">
            <p>
              ${content.excerpt}
            </p>
          </div>
        </div>
      </div>`;
})}

</div>`;

document.write(html);
