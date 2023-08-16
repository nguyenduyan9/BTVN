var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

getError = function(field){
    for (var key in errors[field]){
        return errors[field][key]
    }
}

console.log(getError("password"));

//  bài 2

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];

//   console.log(customers);

var Person = function (name,age,address) {
    this.name = name;
    this.age =age;
    this.address = address
}

var person = new Person ;

var user1 = new Person("Nguyễn Văn A",11,"Ha Noi")
var user2 = new Person("Nguyễn Văn B",2,"Hai Phong")
var user3 = new Person("Nguyễn Văn C",12,"TP.HCM")

 var getCustomers = function(customers) {
   var arr = customers.slice().sort(function(a, b){
        return a.age - b.age ;
    })
    var result = arr.map(function(customer){
        var arrName = customer.name.split(" ");
        var shortName = `${arrName[0]} ${arrName[arrName.length-1]}`
        return {...customer, shortName}
    }) 
    return result ;
 }

 console.log(getCustomers(customers));