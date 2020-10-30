function newTodo() {

    var myTitle1 = document.getElementById('myTitle').value;
    var myDesc2 = document.getElementById('myDesc').value;


    var text1 = document.createTextNode(myTitle1); // add data
    var text2 = document.createTextNode(myDesc2); //add data


    var li = document.createElement('li'); // create empty <li> </li> tag

    var div_call_md_4 = document.createElement('div'); // create empty <div> </div> tag
    div_call_md_4.classList.add('col-md-8');

    var div_card = document.createElement('div'); // create empty <div> </div> tag
    div_card.classList.add('card');

    var div_card_block = document.createElement('div');
    div_card_block.classList.add('card-block');

    var h5 = document.createElement('h5');
    h5.classList.add('card-title');

    var p = document.createElement('p');
    p.classList.add('card-text');

    h5.appendChild(text1); //Display on output
    p.appendChild(text2); //Display on output

    div_card_block.appendChild(h5);
    div_card_block.appendChild(p);
    div_card.appendChild(div_card_block);
    div_call_md_4.appendChild(div_card);
    li.appendChild(div_call_md_4);

    if (myTitle1 === '' || myDesc2 === '') {
        alert('Both fields are required..');
    } else {
        document.getElementById('myList').appendChild(li);
        document.getElementById('myTitle').value = '';
        document.getElementById('myDesc').value = '';
    }


}