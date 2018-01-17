/**
 * Created by arsen on 22.11.17.
 */
function sortB(lst){
    list_len = lst.length;
    swapped = true;
    while(swapped){
        swapped = false;
        for (i = 1; i <list_len  ; i++) {
            if (lst[i-1] > lst[i]){
                tmp = lst[i-1];
                tmp_1 = lst[i];
                lst[i-1] = tmp_1;
                lst[i] = tmp;
                swapped = true;
            }
        }
    }
    console.log(lst)
}

sortB(new Array(5,4,3,2,1))