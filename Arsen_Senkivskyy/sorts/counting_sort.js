/**
 * Created by arsen on 27.11.17.
 */

function counting_sort(lst, min, max)
{
    if (lst.length === 0 || min > max)
    {
        return true;
    }

    x = new Array(max - min + 1);
    for (i = 0; i < x.length;i++)
    {
        x[x[i] - min]++;
    }

    elemsIt = new Array(max - min + 1); //current position to write result
    for (i = min; i <= max; ++i)
    {
        // write counts[i - min] copies of i into elems
        elemsIt[i]= x[i - min];
    }
    console.log(elemsIt);
}

A = new Array(5,4,3,2,1);
counting_sort(A, 0, 5);
console.log(new Array(5,4,3,2,1));