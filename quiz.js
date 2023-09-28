// show first question after click on num of this
function one(params) {
    let quest = document.getElementById("quest")
    let ques = document.getElementById("ques")
    let que = document.getElementById("que")
    let qu = document.getElementById("qu")
    let q = document.getElementById("q")
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let previous = document.getElementById("previous")
    let next = document.getElementById("next")
    quest.style.opacity="1"
    ques.style.opacity="0"
    que.style.opacity="0"
    qu.style.opacity="0"
    q.style.opacity="0"
    one.style.backgroundColor="gray"
    two.style.backgroundColor="white"
    three.style.backgroundColor="white"
    four.style.backgroundColor="white"
    five.style.backgroundColor="white"
    previous.style.color="#64738D"
    previous.style.cursor="auto"
    next.style.color="#0096ff"
    next.style.cursor="pointer"
}
// show second question after click on num of this
function two(params) {
    let quest = document.getElementById("quest")
    let ques = document.getElementById("ques")
    let que = document.getElementById("que")
    let qu = document.getElementById("qu")
    let q = document.getElementById("q")
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let previous = document.getElementById("previous")
    let next = document.getElementById("next")
    quest.style.opacity="0"
    ques.style.opacity="1"
    ques.style.marginBottom="-36"
    que.style.opacity="0"
    qu.style.opacity="0"
    q.style.opacity="0"
    one.style.backgroundColor="white"
    two.style.backgroundColor="gray"
    three.style.backgroundColor="white"
    four.style.backgroundColor="white"
    five.style.backgroundColor="white"
    previous.style.color="#0096ff"
    previous.style.cursor="pointer"
    next.style.color="#0096ff"
    next.style.cursor="pointer"
}
// show third question after click on num of this
function three(params) {
    let quest = document.getElementById("quest")
    let ques = document.getElementById("ques")
    let que = document.getElementById("que")
    let qu = document.getElementById("qu")
    let q = document.getElementById("q")
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let previous = document.getElementById("previous")
    let next = document.getElementById("next")
    quest.style.opacity="0"
    ques.style.opacity="0"
    que.style.opacity="1"
    que.style.marginTop="16"
    qu.style.opacity="0"
    q.style.opacity="0"
    one.style.backgroundColor="white"
    two.style.backgroundColor="white"
    three.style.backgroundColor="gray"
    four.style.backgroundColor="white"
    five.style.backgroundColor="white"
    previous.style.color="#0096ff"
    previous.style.cursor="pointer"
    next.style.color="#0096ff"
    next.style.cursor="pointer"
}
// show four question after click on num of this
function four(params) {
    let quest = document.getElementById("quest")
    let ques = document.getElementById("ques")
    let que = document.getElementById("que")
    let qu = document.getElementById("qu")
    let q = document.getElementById("q")
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let previous = document.getElementById("previous")
    let next = document.getElementById("next")
    quest.style.opacity="0"
    ques.style.opacity="0"
    que.style.opacity="0"
    qu.style.opacity="1"
    qu.style.marginTop="16"
    q.style.opacity="0"
    one.style.backgroundColor="white"
    two.style.backgroundColor="white"
    three.style.backgroundColor="white"
    four.style.backgroundColor="gray"
    five.style.backgroundColor="white"
    previous.style.color="#0096ff"
    previous.style.cursor="pointer"
    next.style.color="#0096ff"
    next.style.cursor="pointer"
}
// show five question after click on num of this
function five(params) {
    let quest = document.getElementById("quest")
    let ques = document.getElementById("ques")
    let que = document.getElementById("que")
    let qu = document.getElementById("qu")
    let q = document.getElementById("q")
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let previous = document.getElementById("previous")
    let next = document.getElementById("next")
    quest.style.opacity="0"
    ques.style.opacity="0"
    que.style.opacity="0"
    qu.style.opacity="0"
    q.style.opacity="1"
    q.style.marginTop="16"
    one.style.backgroundColor="white"
    two.style.backgroundColor="white"
    three.style.backgroundColor="white"
    four.style.backgroundColor="white"
    five.style.backgroundColor="gray"
    previous.style.color="#0096ff"
    previous.style.cursor="pointer"
    next.style.color="#64738D"
    next.style.cursor="auto"
}
// mouse enter of num 1
function chan(params) {
    let one = document.getElementById("one")
   
    one.style.backgroundColor="gray"
}
// mouse out of num 1
function chang(params) {
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    if (two.style.backgroundColor=="gray"|three.style.backgroundColor=="gray"|four.style.backgroundColor=="gray"|five.style.backgroundColor=="gray") {
        one.style.backgroundColor="white"
    }  
}
// mouse enter of num 2
function ins(params) {
    let two = document.getElementById("two")
    two.style.backgroundColor="gray"
}
// mouse out of num 2
function inst(params) {
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    if (one.style.backgroundColor=="white"&three.style.backgroundColor=="white"&four.style.backgroundColor=="white"&five.style.backgroundColor=="white") {
        two.style.backgroundColor="gray"
    }  
    else{
        two.style.backgroundColor="white"
    }
}
// mouse enter of num 3
function inste(params) {
    let three = document.getElementById("three")
   
    three.style.backgroundColor="gray"
}
// mouse out of num 3
function instea(params) {
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    if (one.style.backgroundColor=="white"&two.style.backgroundColor=="white"&four.style.backgroundColor=="white"&five.style.backgroundColor=="white") {
        three.style.backgroundColor="gray"
    }  
    else{
        three.style.backgroundColor="white"
    }
}
// mouse enter of num 4
function conca(params) {
    let four = document.getElementById("four")
   
    four.style.backgroundColor="gray"
}
// mouse out of num 4
function concat(params) {
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    if (one.style.backgroundColor=="white"&two.style.backgroundColor=="white"&three.style.backgroundColor=="white"&five.style.backgroundColor=="white") {
        four.style.backgroundColor="gray"
    }  
    else{
        four.style.backgroundColor="white"
    }
}
// mouse enter of num 5
function concate(params) {
    let five = document.getElementById("five")
   
    five.style.backgroundColor="gray"
}
// mouse out of num 5
function concaten(params) {
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    if (one.style.backgroundColor=="white"&two.style.backgroundColor=="white"&three.style.backgroundColor=="white"&four.style.backgroundColor=="white") {
        five.style.backgroundColor="gray"
    }  
    else{
        five.style.backgroundColor="white"
    }
}
//previos question
function previous(params) {
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let quest = document.getElementById("quest")
let ques = document.getElementById("ques")
let que = document.getElementById("que")
let qu = document.getElementById("qu")
let q = document.getElementById("q")
let previous = document.getElementById("previous")
let next = document.getElementById("next")
if (two.style.backgroundColor=="gray") {
    quest.style.opacity="1"
    ques.style.opacity="0"
    que.style.opacity="0"
    qu.style.opacity="0"
    q.style.opacity="0"
    one.style.backgroundColor="gray"
    two.style.backgroundColor="white"
    three.style.backgroundColor="white"
    four.style.backgroundColor="white"
    five.style.backgroundColor="white"
    previous.style.color="#64738D"
    previous.style.cursor="auto"
}
else if (three.style.backgroundColor=="gray") {
    quest.style.opacity="0"
    ques.style.opacity="1"
    que.style.opacity="0"
    qu.style.opacity="0"
    q.style.opacity="0"
    one.style.backgroundColor="white"
    two.style.backgroundColor="gray"
    three.style.backgroundColor="white"
    four.style.backgroundColor="white"
    five.style.backgroundColor="white"
}
else if (four.style.backgroundColor=="gray") {
    quest.style.opacity="0"
    ques.style.opacity="0"
    que.style.opacity="1"
    qu.style.opacity="0"
    q.style.opacity="0"
    one.style.backgroundColor="white"
    two.style.backgroundColor="white"
    three.style.backgroundColor="gray"
    four.style.backgroundColor="white"
    five.style.backgroundColor="white"
}
else if (five.style.backgroundColor=="gray") {
    quest.style.opacity="0"
    ques.style.opacity="0"
    que.style.opacity="0"
    qu.style.opacity="1"
    q.style.opacity="0"
    one.style.backgroundColor="white"
    two.style.backgroundColor="white"
    three.style.backgroundColor="white"
    four.style.backgroundColor="gray"
    five.style.backgroundColor="white"
    next.style.color="#0096ff"
    next.style.cursor="pointer"
}
else{
    quest.style.opacity="1"
    ques.style.opacity="0"
    que.style.opacity="0"
    qu.style.opacity="0"
    q.style.opacity="0"
    one.style.backgroundColor="gray"
    two.style.backgroundColor="white"
    three.style.backgroundColor="white"
    four.style.backgroundColor="white"
    five.style.backgroundColor="white"
}
}
//next question
function next(params) {
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let quest = document.getElementById("quest")
    let ques = document.getElementById("ques")
    let que = document.getElementById("que")
    let qu = document.getElementById("qu")
    let q = document.getElementById("q")
    let previous = document.getElementById("previous")
    let next = document.getElementById("next")
    if (one.style.backgroundColor=="gray") {
        quest.style.opacity="0"
        ques.style.opacity="1"
        que.style.opacity="0"
        qu.style.opacity="0"
        q.style.opacity="0"
        one.style.backgroundColor="white"
        two.style.backgroundColor="gray"
        three.style.backgroundColor="white"
        four.style.backgroundColor="white"
        five.style.backgroundColor="white"
        previous.style.color="#0096ff"
        previous.style.cursor="pointer"
    }
    else if (two.style.backgroundColor=="gray") {
        quest.style.opacity="0"
        ques.style.opacity="0"
        que.style.opacity="1"
        qu.style.opacity="0"
        q.style.opacity="0"
        one.style.backgroundColor="white"
        two.style.backgroundColor="white"
        three.style.backgroundColor="gray"
        four.style.backgroundColor="white"
        five.style.backgroundColor="white"
    }
    else if (three.style.backgroundColor=="gray") {
        quest.style.opacity="0"
        ques.style.opacity="0"
        que.style.opacity="0"
        qu.style.opacity="1"
        q.style.opacity="0"
        one.style.backgroundColor="white"
        two.style.backgroundColor="white"
        three.style.backgroundColor="white"
        four.style.backgroundColor="gray"
        five.style.backgroundColor="white"
    }
    else if (four.style.backgroundColor=="gray") {
        quest.style.opacity="0"
        ques.style.opacity="0"
        que.style.opacity="0"
        qu.style.opacity="0"
        q.style.opacity="1"
        one.style.backgroundColor="white"
        two.style.backgroundColor="white"
        three.style.backgroundColor="white"
        four.style.backgroundColor="white"
        five.style.backgroundColor="gray"
        next.style.color="#64738D"
        next.style.cursor="auto"
    }
    else if (five.style.backgroundColor=="gray") {
        quest.style.opacity="0"
        ques.style.opacity="0"
        que.style.opacity="0"
        qu.style.opacity="0"
        q.style.opacity="1"
        one.style.backgroundColor="white"
        two.style.backgroundColor="white"
        three.style.backgroundColor="white"
        four.style.backgroundColor="white"
        five.style.backgroundColor="gray"
       
    }
    else{
        quest.style.opacity="0"
        ques.style.opacity="1"
        que.style.opacity="0"
        qu.style.opacity="0"
        q.style.opacity="0"
        one.style.backgroundColor="white"
        two.style.backgroundColor="gray"
        three.style.backgroundColor="white"
        four.style.backgroundColor="white"
        five.style.backgroundColor="white"
        previous.style.color="#0096ff"
        previous.style.cursor="pointer"
    }
    }

    //time
    let second = 7200  //num of seconds

    let locat = document.getElementById("span") //the div which have time
    
    secondPass; //func

    countdown = setInterval(function name(params) {
        "use strict";
        secondPass();
    },1000)
    //what happen in func
function secondPass(params) {
    "use strict";
    let hours =  Math.floor(second/3600)
    let x = hours*60
    let minutes = Math.floor(second/60-x)
    let stsecond = second % 60
    locat.innerHTML= hours +"h"+" "+minutes+"m"+" "+stsecond+"s"
    if (second>0) {
        second -= 1
    }
    }
 

//progress par
let con = document.getElementById("con")
let precent = document.getElementById("precent")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
localStorage.setItem("one",0)
localStorage.setItem("two",0)
localStorage.setItem("three",0)
localStorage.setItem("four",0)
localStorage.setItem("five",0)
//20%
   function an(params) {
     if (a.style.backgroundColor=="green") {
        a.style.backgroundColor="white"
        b.style.backgroundColor="white"
        c.style.backgroundColor="white"
        d.style.backgroundColor="white"
        localStorage.setItem("one",0)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
         precent.innerHTML= x
        
     }
     else{
        a.style.backgroundColor="green"
        b.style.backgroundColor="white"
        c.style.backgroundColor="white"
        d.style.backgroundColor="white"
        localStorage.setItem("one",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
     }
    
    }
   //40%
    function aa(params) {
        let aa = document.getElementById("aa")
        let bb = document.getElementById("bb")
        let cc = document.getElementById("cc")
        let dd = document.getElementById("dd")
        if (aa.style.backgroundColor=="green") {
        aa.style.backgroundColor="white"
        bb.style.backgroundColor="white"
        cc.style.backgroundColor="white"
        dd.style.backgroundColor="white"
        localStorage.setItem("two",0)
     let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
     con.style.width= x+"%"
     precent.innerHTML= x
        }
        else
        {
        aa.style.backgroundColor="green"
        bb.style.backgroundColor="white"
        cc.style.backgroundColor="white"
        dd.style.backgroundColor="white"
        localStorage.setItem("two",20)
     let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
     con.style.width= x+"%"
     precent.innerHTML= x
     }
    }
    //60%
    function aaa(params) {
        let aaa = document.getElementById("aaa")
        let bbb = document.getElementById("bbb")
        let ccc = document.getElementById("ccc")
        let ddd = document.getElementById("ddd")
        if (aaa.style.backgroundColor=="green") {
            aaa.style.backgroundColor="white"
            bbb.style.backgroundColor="white"
            ccc.style.backgroundColor="white"
            ddd.style.backgroundColor="white"
            localStorage.setItem("three",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else{   
        aaa.style.backgroundColor="green"
        bbb.style.backgroundColor="white"
        ccc.style.backgroundColor="white"
        ddd.style.backgroundColor="white"
        localStorage.setItem("three",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
    }
      }
      //80%
    function aaaa(params) {
        let aaaa = document.getElementById("aaaa")
        let bbbb = document.getElementById("bbbb")
        let cccc = document.getElementById("cccc")
        let dddd = document.getElementById("dddd")
        if (aaaa.style.backgroundColor=="green") {
            aaaa.style.backgroundColor="white"
        bbbb.style.backgroundColor="white"
        cccc.style.backgroundColor="white"
        dddd.style.backgroundColor="white"
        localStorage.setItem("four",0)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
        else{
        aaaa.style.backgroundColor="green"
        bbbb.style.backgroundColor="white"
        cccc.style.backgroundColor="white"
        dddd.style.backgroundColor="white"
        localStorage.setItem("four",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
    }
    }
    //100%
    function aaaaa(params) {
        let aaaaa = document.getElementById("aaaaa")
        let bbbbb = document.getElementById("bbbbb")
        let ccccc = document.getElementById("ccccc")
        let ddddd = document.getElementById("ddddd")
        if (aaaaa.style.backgroundColor=="green") {
            aaaaa.style.backgroundColor="white"
            bbbbb.style.backgroundColor="white"
            ccccc.style.backgroundColor="white"
            ddddd.style.backgroundColor="white"
            localStorage.setItem("five",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else{
        aaaaa.style.backgroundColor="green"
        bbbbb.style.backgroundColor="white"
        ccccc.style.backgroundColor="white"
        ddddd.style.backgroundColor="white"
        localStorage.setItem("five",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
    }
    }

    //20
    function bn() {
      if (b.style.backgroundColor=="green") {
            a.style.backgroundColor="white"
        b.style.backgroundColor="white"
        c.style.backgroundColor="white"
        d.style.backgroundColor="white"
        localStorage.setItem("one",0)
     let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
     con.style.width= x+"%"
     precent.innerHTML= x
        }
        else{
        a.style.backgroundColor="white"
        b.style.backgroundColor="green"
        c.style.backgroundColor="white"
        d.style.backgroundColor="white"
        localStorage.setItem("one",20)
     let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
     con.style.width= x+"%"
     precent.innerHTML= x
    }
       }
       //40
       function bb() {
        let aa = document.getElementById("aa")
        let bb = document.getElementById("bb")
        let cc = document.getElementById("cc")
        let dd = document.getElementById("dd")
        if (bb.style.backgroundColor=="green") {
            aa.style.backgroundColor="white"
        bb.style.backgroundColor="white"
        cc.style.backgroundColor="white"
        dd.style.backgroundColor="white"
        localStorage.setItem("two",0)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
        else{
        aa.style.backgroundColor="white"
        bb.style.backgroundColor="green"
        cc.style.backgroundColor="white"
        dd.style.backgroundColor="white"
        localStorage.setItem("two",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
    }
       }
       //60
       function bbb() {
        let aaa = document.getElementById("aaa")
        let bbb = document.getElementById("bbb")
        let ccc = document.getElementById("ccc")
        let ddd = document.getElementById("ddd")
        if (bbb.style.backgroundColor=="green") {
            aaa.style.backgroundColor="white"
            bbb.style.backgroundColor="white"
            ccc.style.backgroundColor="white"
            ddd.style.backgroundColor="white"
            localStorage.setItem("three",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else
        {
        aaa.style.backgroundColor="white"
        bbb.style.backgroundColor="green"
        ccc.style.backgroundColor="white"
        ddd.style.backgroundColor="white"
        localStorage.setItem("three",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
    }
       }
       //80
       function bbbb() {
        let aaaa = document.getElementById("aaaa")
        let bbbb = document.getElementById("bbbb")
        let cccc = document.getElementById("cccc")
        let dddd = document.getElementById("dddd")
        if (bbbb.style.backgroundColor=="green") {
            aaaa.style.backgroundColor="white"
            bbbb.style.backgroundColor="white"
            cccc.style.backgroundColor="white"
            dddd.style.backgroundColor="white"
            localStorage.setItem("four",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else
        {
        aaaa.style.backgroundColor="white"
        bbbb.style.backgroundColor="green"
        cccc.style.backgroundColor="white"
        dddd.style.backgroundColor="white"
        localStorage.setItem("four",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
       }
       //100
       function bbbbb() {
        let aaaaa = document.getElementById("aaaaa")
        let bbbbb = document.getElementById("bbbbb")
        let ccccc = document.getElementById("ccccc")
        let ddddd = document.getElementById("ddddd")
        if (bbbbb.style.backgroundColor=="green") {
            aaaaa.style.backgroundColor="white"
            bbbbb.style.backgroundColor="white"
            ccccc.style.backgroundColor="white"
            ddddd.style.backgroundColor="white"
            localStorage.setItem("five",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else{
            aaaaa.style.backgroundColor="white"
            bbbbb.style.backgroundColor="green"
            ccccc.style.backgroundColor="white"
            ddddd.style.backgroundColor="white"
            localStorage.setItem("five",20)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
       
       }
   
       //20
       function cn() {
        if (c.style.backgroundColor=="green") {
            a.style.backgroundColor="white"
            b.style.backgroundColor="white"
            c.style.backgroundColor="white"
            d.style.backgroundColor="white"
            localStorage.setItem("one",0)
         let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
         con.style.width= x+"%"
         precent.innerHTML= x
        }
        else
        {
        a.style.backgroundColor="white"
        b.style.backgroundColor="white"
        c.style.backgroundColor="green"
        d.style.backgroundColor="white"
        localStorage.setItem("one",20)
     let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
     con.style.width= x+"%"
     precent.innerHTML= x
        }
       }
       //40
       function cc() {
        let aa = document.getElementById("aa")
        let bb = document.getElementById("bb")
        let cc = document.getElementById("cc")
        let dd = document.getElementById("dd")
        if (cc.style.backgroundColor=="green") {
            aa.style.backgroundColor="white"
            bb.style.backgroundColor="white"
            cc.style.backgroundColor="white"
            dd.style.backgroundColor="white"
            localStorage.setItem("two",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else
        {
        aa.style.backgroundColor="white"
        bb.style.backgroundColor="white"
        cc.style.backgroundColor="green"
        dd.style.backgroundColor="white"
        localStorage.setItem("two",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
       }
       //60
       function ccc() {
        let aaa = document.getElementById("aaa")
        let bbb = document.getElementById("bbb")
        let ccc = document.getElementById("ccc")
        let ddd = document.getElementById("ddd")
        if (ccc.style.backgroundColor=="green") {
            aaa.style.backgroundColor="white"
            bbb.style.backgroundColor="white"
            ccc.style.backgroundColor="white"
            ddd.style.backgroundColor="white"
            localStorage.setItem("three",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else
        {
        aaa.style.backgroundColor="white"
        bbb.style.backgroundColor="white"
        ccc.style.backgroundColor="green"
        ddd.style.backgroundColor="white"
        localStorage.setItem("three",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
       }
       //80
       function cccc() {
        let aaaa = document.getElementById("aaaa")
        let bbbb = document.getElementById("bbbb")
        let cccc = document.getElementById("cccc")
        let dddd = document.getElementById("dddd")
        if (cccc.style.backgroundColor=="green") {
        aaaa.style.backgroundColor="white"
        bbbb.style.backgroundColor="white"
        cccc.style.backgroundColor="white"
        dddd.style.backgroundColor="white"
        localStorage.setItem("four",0)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
        else
        {
        aaaa.style.backgroundColor="white"
        bbbb.style.backgroundColor="white"
        cccc.style.backgroundColor="green"
        dddd.style.backgroundColor="white"
        localStorage.setItem("four",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
       }
       }
       //100
       function ccccc() {
        let aaaaa = document.getElementById("aaaaa")
        let bbbbb = document.getElementById("bbbbb")
        let ccccc = document.getElementById("ccccc")
        let ddddd = document.getElementById("ddddd")
        if (ccccc.style.backgroundColor=="green") {
            aaaaa.style.backgroundColor="white"
        bbbbb.style.backgroundColor="white"
        ccccc.style.backgroundColor="white"
        ddddd.style.backgroundColor="white"
        localStorage.setItem("five",0)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
        else{
        aaaaa.style.backgroundColor="white"
        bbbbb.style.backgroundColor="white"
        ccccc.style.backgroundColor="green"
        ddddd.style.backgroundColor="white"
        localStorage.setItem("five",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
    }
       }
       //20
       function dn() {
        if (d.style.backgroundColor=="green") {
            a.style.backgroundColor="white"
            b.style.backgroundColor="white"
            c.style.backgroundColor="white"
            d.style.backgroundColor="white"
            localStorage.setItem("one",0)
         let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
         con.style.width= x+"%"
         precent.innerHTML= x
        }
        else
        {
        a.style.backgroundColor="white"
        b.style.backgroundColor="white"
        c.style.backgroundColor="white"
        d.style.backgroundColor="green"
        localStorage.setItem("one",20)
     let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
     con.style.width= x+"%"
     precent.innerHTML= x
        }
       }
       //40
       function dd() {
        let aa = document.getElementById("aa")
        let bb = document.getElementById("bb")
        let cc = document.getElementById("cc")
        let dd = document.getElementById("dd")
        if (dd.style.backgroundColor=="green") {
            aa.style.backgroundColor="white"
            bb.style.backgroundColor="white"
            cc.style.backgroundColor="white"
            dd.style.backgroundColor="white"
            localStorage.setItem("two",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else{
            aa.style.backgroundColor="white"
            bb.style.backgroundColor="white"
            cc.style.backgroundColor="white"
            dd.style.backgroundColor="green"
            localStorage.setItem("two",20)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
       }
       //60
       function ddd() {
        let aaa = document.getElementById("aaa")
        let bbb = document.getElementById("bbb")
        let ccc = document.getElementById("ccc")
        let ddd = document.getElementById("ddd")
        if (ddd.style.backgroundColor=="green") {
            aaa.style.backgroundColor="white"
            bbb.style.backgroundColor="white"
            ccc.style.backgroundColor="white"
            ddd.style.backgroundColor="white"
            localStorage.setItem("three",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else
        {
        aaa.style.backgroundColor="white"
        bbb.style.backgroundColor="white"
        ccc.style.backgroundColor="white"
        ddd.style.backgroundColor="green"
        localStorage.setItem("three",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
       

        }
       }
       //80
       function dddd() {
        let aaaa = document.getElementById("aaaa")
        let bbbb = document.getElementById("bbbb")
        let cccc = document.getElementById("cccc")
        let dddd = document.getElementById("dddd")
        if (dddd.style.backgroundColor=="green") {
            aaaa.style.backgroundColor="white"
            bbbb.style.backgroundColor="white"
            cccc.style.backgroundColor="white"
            dddd.style.backgroundColor="white"
            localStorage.setItem("four",0)
            let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
            con.style.width= x+"%"
            precent.innerHTML= x
        }
        else
        {
        aaaa.style.backgroundColor="white"
        bbbb.style.backgroundColor="white"
        cccc.style.backgroundColor="white"
        dddd.style.backgroundColor="green"
        localStorage.setItem("four",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
       }
       //100
       function ddddd() {
        let aaaaa = document.getElementById("aaaaa")
        let bbbbb = document.getElementById("bbbbb")
        let ccccc = document.getElementById("ccccc")
        let ddddd = document.getElementById("ddddd")
        if (ddddd.style.backgroundColor=="green") {
            aaaaa.style.backgroundColor="white"
        bbbbb.style.backgroundColor="white"
        ccccc.style.backgroundColor="white"
        ddddd.style.backgroundColor="white"
        localStorage.setItem("five",0)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
        else
        {
        aaaaa.style.backgroundColor="white"
        bbbbb.style.backgroundColor="white"
        ccccc.style.backgroundColor="white"
        ddddd.style.backgroundColor="green"
        localStorage.setItem("five",20)
        let x = Number(localStorage.getItem('one'))+Number(localStorage.getItem('two'))+Number(localStorage.getItem('three'))+Number(localStorage.getItem('four'))+Number(localStorage.getItem('five'))
        con.style.width= x+"%"
        precent.innerHTML= x
        }
       }




      //result
function result(params) {
    let result = document.getElementById("result")
    let very = document.getElementById("very")
    let b = document.getElementById("b")
    let aa = document.getElementById("aa")
    let ccc = document.getElementById("ccc")
    let dddd = document.getElementById("dddd")
    let ddddd = document.getElementById("ddddd")
    let grade = document.getElementById("grade")
    let grad = document.getElementById("grad")
    result.style.display="block"
    result.style.filter="opacity(1)"
    very.style.filter="opacity(0)"
   if (b.style.backgroundColor=="green") {
    localStorage.setItem("oneanswer","1")
   }
   else
   {
    localStorage.setItem("oneanswer","0")
   }
   if (aa.style.backgroundColor=="green") {
    localStorage.setItem("twoanswer","1")
   }
   else
   {
    localStorage.setItem("twoanswer","0")
   }
   if (ccc.style.backgroundColor=="green") {
    localStorage.setItem("threeanswer","1")
   }
   else
   {
    localStorage.setItem("threeanswer","0")
   }
   if (dddd.style.backgroundColor=="green") {
    localStorage.setItem("fouranswer","1")
   }
   else
   {
    localStorage.setItem("fouranswer","0")
   }
   if (ddddd.style.backgroundColor=="green") {
    localStorage.setItem("fiveanswer","1")
   }
   else
   {
    localStorage.setItem("fiveanswer","0")
   }
   let x = Number(localStorage.getItem("oneanswer")) + Number(localStorage.getItem("twoanswer"))+Number(localStorage.getItem("threeanswer"))+Number(localStorage.getItem("fouranswer"))+Number(localStorage.getItem("fiveanswer"))
   console.log(x);
   grade.innerHTML= x +"/5"
   if (x>5-2) {
    grad.innerHTML="ممتاز"
   }
   else if (x>5-4 & x<=5-2) {
    grad.innerHTML="جيد جدا"
   }
   else{
    grad.innerHTML="جيد"
   }
}


     
       
