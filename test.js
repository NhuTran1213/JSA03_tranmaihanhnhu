setInterval(() => {
    var curDate = new Date();
    var curDay = curDate.getDate();
    
    var curMonth = curDate.getMonth() + 1;
    var curYear = curDate.getFullYear();

    var hours = curDate.getHours();

    var minus = curDate.getMinutes();

    var second = curDate.getSeconds();

    
    // Gán vào thẻ HTML
    if(document.getElementById('day')){
        document.getElementById('day').innerHTML = curDay;
    }
    if(document.getElementById('month')){
        document.getElementById('month').innerHTML = curMonth;
    }
    if(document.getElementById('year')){
        document.getElementById('year').innerHTML = curYear;
    }
    if(document.getElementById('hours')){
        document.getElementById('hours').innerHTML = hours;
    }
    if(document.getElementById('minus')){
        document.getElementById('minus').innerHTML = minus;
    }
    if(document.getElementById('second')){
        document.getElementById('second').innerHTML = second;
    }
    
}, 1000)

function myFunction(){
    localStorage.setItem('name', document.getElementById('name').value)
    localStorage.setItem('age', document.getElementById('age').value)
    const isSuccess = confirm('Lưu thông tin thành công!, Quay về trang Home Page')
    if(isSuccess){
        window.location.href =  '/JSA03_tranmaihanhnhu'
    }
}

function checkInfo(){
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')
    if(age && name){
        alert('Name: ' + name + ' Age: ' + age)
    }else{
        alert('Không có thông tin')

    }
}

function delInfo(){
    localStorage.removeItem('name')
    localStorage.removeItem('age')
    alert('Xóa thông tin thành công!')
}