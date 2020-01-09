// typing effect on header

$(document).ready(function(){
    let introTexts = ['Hello !', '你好 !', 'Bonjour !', 'こんにちは !', 'Guten Tag !', '안녕하세요 !'];
    let indexIntroTexts = 0;
    let countWords = 0;
    let text;

    function typing() {
        text = introTexts[indexIntroTexts].split("");

        if(countWords < text.length)
            $('#typing').append(text[countWords]);
        else{
            deleteTyping();
            return false;
        }
        setTimeout(function(){
            countWords++;
            typing();
        }, 250);
    }

    function deleteTyping(){
        if(countWords > 0){
            text.pop();
            $('#typing').html(text.join(""));
        }else{
            if(indexIntroTexts < introTexts.length - 1)
                indexIntroTexts++;
            else
                indexIntroTexts = 0;

            typing();
            return false;
        }
        setTimeout(function(){
            countWords--;
            deleteTyping();
        }, 150);
    }

    typing();
});