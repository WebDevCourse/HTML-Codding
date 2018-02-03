let arr = [29,21,2,1,9,0,3];
let n = arr.length;

function BubleSort(){
for(let i=0; i<n-1; i++) {
	for(let j=0; j<n-i-1;j++){
		if (arr[j+1]<arr[j]){
			let t=arr[j+1];
			arr[j+1]=arr[j];
			arr[j]=t;
		}
	}
}
return(arr);
}

function SelectionSort(){
	for(let i=0; i<n-1;i++){
		let min=i;
		for(let j=i+1;j<n;j++){
			if(arr[j]<arr[min])
				min=j;
			let t= arr[min];
			arr[min]=arr[i];
			arr[i]=t;
		}
	}
	return(arr);
}

function InsertionSort(){
	for(let i=0; i<n-1;i++){
		let v=arr[i];
		let j=i-1;
		while(j>=0 && arr[j]>v){
			arr[j+1]=arr[j];
			j--;
		}
		arr[j+1]=v;
	}
	return(arr);
}


function CountSort(){
	let count=[];
	let B=[];
	for(let i=0; i<n;i++)
		count[i]=0;
	for(let i=0; i<n-1; i++){
		for(let j=i+1;j<n;j++){
			if(arr[i]<arr[j])
				count[j]++;
			else count[i]++;
		}


	}
	for (let i=0; i<n; i++){
		B[count[i]]=arr[i];
	}
	return B;
}
alert( arr +
"\nБульбашка: " + BubleSort()+
"\nВибірка: "+ SelectionSort()+
"\nВставка: "+ InsertionSort()+
"\nЛічильник: "+ CountSort());
