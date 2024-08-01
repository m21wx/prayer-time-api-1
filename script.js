	
	
	 
	let contrey =[
	{
		nameContry:"السعوديه",
		nuberTitle:'sa',
	},
	{
		nameContry:"سوريا",
		nuberTitle:'sy',
	},
	{
		nameContry:"لبنان",
		nuberTitle:'lb',
	},
	{
		nameContry:"ليبيا",
		nuberTitle:'ly',
	},
	{
		nameContry:"العراق",
		nuberTitle:'iq',
	},
	
	
	{
		nameContry:"المغرب",
		nuberTitle:'ma',
	},{
		nameContry:"قطر",
		nuberTitle:'qa',
	}
	];
	
	let arrCity ={
		sa:[
			{city:'Ar Riyāḑ', name:'الرياض'},
			{city:'Jāzān', name:'جيزان'},
			{city:'Makkah al Mukarramah', name:'مكة المكرمه'},
			{city:'Tabūk', name:'تبوك'},
			{city:'Najrān', name:'نجران'},
			{city:'Al Kharj', name:'الخرج'},
			{city:'Al Khobar', name:'الخبر'},
		],
		sy:[
			{city:'Damascus', name:'دمشق'},
			{city:'Aleppo', name:'حلب'},
			{city:'Idlib', name:'ادلب'},
			{city:'hummus', name:'حمص'},

		],
		lb:[
			{city:'Beirut', name:'بيروت'},
		   ],
		ly:[
			{city:'Tripoli', name:'طرابلس'},
		   ],
		   
	    iq:[
			{city:'Baghdad', name:'بغداد'},
		   ],
	   ma:[
			{city:'Dar Al-Baydaa', name:'دار البيضاء'},
		   ],
	   qa:[
			{city:'Doha', name:'الدوحة'},
		 ],
	}


	
	let contrey_c = document.querySelector('.contrey_c');
	let city_c = document.querySelector('.city');
	contrey_c.innerHTML=`<option>--أختر الدولة-- </option>`;
	contrey.forEach(e=>{
		
		let optionContrey =`
			<option value='${e.nuberTitle}'>${e.nameContry}</option>
		`
		contrey_c.innerHTML+=optionContrey;
	})
	contrey_c.addEventListener('change',(e)=>{
		let c = e.target.value;
		city_c.innerHTML= '';
		arrCity[c].forEach(e=>{
			let optionCity=`
				<option value ='${e.city}'>${e.name}</option>
			`;
			city_c.innerHTML += optionCity;
		});
		//options selectedIndex
		let cityValue = city_c.options[city_c.selectedIndex];
			myFunction(c , cityValue.value)
		

	});
	city_c.addEventListener('change',(e)=>{
		let contreyValue = contrey_c.options[contrey_c.selectedIndex];
		myFunction(contreyValue.value , e.target.value)
	})
	
	async function myFunction(contary , city){
		let https = await fetch(`http://api.aladhan.com/v1/timingsByCity?country=${contary}&city=${city}`)
		let arr =await https.json();
		console.log(arr.data)
		console.log(arr.data.date.hijri.date)
		let li =`
			<li><span>${arr.data.timings.Fajr} </span><span>الفجر </span> </li>
			<li><span>${arr.data.timings.Dhuhr} </span><span>الضهر </span> </li>
			<li><span>${arr.data.timings.Asr} </span><span>العصر </span> </li>
			<li><span>${arr.data.timings.Maghrib} </span><span>المغرب </span> </li>
			<li><span>${arr.data.timings.Isha} </span><span>العشاء </span> </li>
		
		`;
 document.querySelector('ul').innerHTML= li;
 let dateTime = `<span> ${arr.data.date.hijri.date}</span> <span> ${arr.data.date.hijri.weekday.ar}</span> `
	document.querySelector('.date').innerHTML = dateTime;
	}

	
	
	
	myFunction('sy','Damascus')
	
	
	
	
	
	console.log(arrCity.sy)
	
	

/* 
	myObj = {

			sa: [{city:"الرياض",cityEr:'Ar Riyāḑ'},
					{city:"الدمام",cityEr:'Ar Riyāḑ'}],
		   sy:[
		   {city:"دمشق",cityEr:'Ar Riyāḑ'},
		   {city:"الرقه",cityEr:'Ar Riyāḑ'},
		   ],
			
		
}
	
	
	//console.log(arr)
	console.log(myObj)

	
	for(let i = 0 ; i < myObj.sy.length; i++){
		console.log(myObj.sy[i].city)
		console.log(myObj.sy[i].cityEr)

	}
 */
	