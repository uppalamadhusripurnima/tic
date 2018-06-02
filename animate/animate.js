var element=document.getElementById('wrapper');
        var current_margin=1;
        setInterval(function(){
            if(window.innerWidth<=current_margin+300){
                current_margin=1;
            }
            new_margin=parseInt(current_margin)+1;
            current_margin= new_margin;
            element.style.marginLeft= new_margin;
        },24);