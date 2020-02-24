class Node {
  constructor(data,data1,data2,data3, next = null) {
    this.data = data;
    this.data1 = data1;
    this.data2 = data2;
    this.data3 = data3;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  insertFirst(data,data1,data2,data3) {
    this.head = new Node(data,data1,data2,data3, this.head);
    this.size++;
  }


  printListData() {
    let current = this.head;
    while(current){
      return '<div class="pod2 podall" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(68, 69, 28, 0.73)),url(img/'+this.head.data2+');"><div class="gradient"><div class="text"><h3>'+this.head.data+'</h3><p>Category : '+this.head.data3+'</p><p>'+this.head.data1+'</p></div></div></div>';
    }
  }
}


let ll = new LinkedList();

//'<div class="pod2 podall" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(68, 69, 28, 0.73)),url(img/'+document.getElementById("link").value+');><div class="gradient"><div class="text"><h3>'+document.getElementById("name").value+'</h3><p>'+document.getElementById("owner").value+'</p></div></div></div>'


function display(){
  ll.insertFirst(document.getElementById("name").value,document.getElementById('owner').value,document.getElementById('link').value,document.getElementById('category').value);
  document.getElementById('data').innerHTML += ll.printListData();
}
