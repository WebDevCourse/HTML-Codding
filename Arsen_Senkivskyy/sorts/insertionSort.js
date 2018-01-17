/**
 * Created by arsen on 22.11.17.
 */

function intSort(lst){
    i = 0;
    while(i < lst.length){
        j = i;
        while ( j> 0 &&  lst[j-1]> lst[j]){
            tmp = lst[j];
            lst[j] = lst[j-1];
            lst[j-1] = tmp;
            j = j-1;
        }
        i++;
    }
    console.log(lst);
}

intSort(new Array(5,4,3,2,1));