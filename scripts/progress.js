function fill()
{
    var bar = document.getElementsByClassName("progress");
    var width = 0;
    var id = setInterval(change, 20);

    function change()
    {
        if(width>=50)
            clearInterval(id);
        else
        {
            width++;
            bar[0].style.width = width+"%";
            bar[0].style.backgroundColor = "#f16524";
            if(width<=22)
            {
                bar[5].style.width = width+"%";
                bar[5].style.backgroundColor = "#0768ac";
                bar[6].style.width = width+"%";
                bar[6].style.backgroundColor = "#6082bb";
            }
            if(width <= 32)
            {
                bar[4].style.width = width+"%";
                bar[4].style.backgroundColor = "#32373c";
                bar[3].style.width = width+"%";
                bar[3].style.backgroundColor = "#cf649a";
                bar[2].style.width = width+"%";
                bar[2].style.backgroundColor = "#61408f";
                bar[1].style.width = width+"%";
                bar[1].style.backgroundColor = "#f7e018";
            }

        }
    }
}
