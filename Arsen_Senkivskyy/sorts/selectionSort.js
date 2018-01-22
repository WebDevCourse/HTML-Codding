/**
 * Created by arsen on 22.11.17.
 */

function selSort(lst){
    for (i=  0; i < lst.length; i++){
        min_el = Math.min.apply( Math, lst.slice(i) );
        index_of_min = lst.slice(i).indexOf(min_el);
        lst[index_of_min+i] = lst[i];
        lst[i] = min_el;

    }
    console.log(lst);
}

selSort(new Array(5,4,3,2,1));