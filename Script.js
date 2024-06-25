const endpoint = 'https://www.gov.uk/bank-holidays.json';

  
    
    async function handleData(){
        try{
            const fetch_data= await fetch(endpoint);
            const data = await fetch_data.json();
            console.log(data)

            let bankHolidays = data;
            let england = bankHolidays["england-and-wales"].events;
          
            const html = england.map((item) => {
              let dateParts = item.date.split('-');
              let year = dateParts[0];
              let month = dateParts[1];
              let date = dateParts[2];
              return`
               <div class="list">
               <h2>${date} / ${month} / ${year}</h2>
               <p>${item.title}</p>
               </div>
              `;
            }).join('');
          
            const ul = document.getElementById('main');
            ul.innerHTML = html;
            }catch (error){
                console.log("Error 404", Error);
            }
    }

   
    async function handleData2(){
        try{
            const fetch_data= await fetch(endpoint);
            const data = await fetch_data.json();
            console.log(data)

            let bankHolidays = data;
            let scotland = bankHolidays["scotland"].events;
          
            const html = scotland.map((item) => {
              let dateParts = item.date.split('-');
              let year = dateParts[0];
              let month = dateParts[1];
              let date = dateParts[2];
              return`
               <div class="list">
               <h2>${date} / ${month} / ${year}</h2>
               <p>${item.title}</p>
               </div>
              `;
            }).join('');
          
            const ul = document.getElementById('main');
            ul.innerHTML = html;
            }catch (error){
                console.log("Error 404", Error);
            }
    }



    async function handleData3(){
        try{
            const fetch_data= await fetch(endpoint);
            const data = await fetch_data.json();
            console.log(data)

            let bankHolidays = data;
            let ireland = bankHolidays["northern-ireland"].events;
          
            const html = ireland.map((item) => {
              let dateParts = item.date.split('-');
              let year = dateParts[0];
              let month = dateParts[1];
              let date = dateParts[2];
              return`
               <div class="list">
               <h2>${date} / ${month} / ${year}</h2>
               <p>${item.title}</p>
               </div>
              `;
            }).join('');
          
            const ul = document.getElementById('main');
            ul.innerHTML = html;
            }catch (error){
                console.log("Error 404", Error);
            }
    }

    
function removeimg() {
    var div = document.getElementById('remove_content');
    if (div) {
        div.parentNode.removeChild(div)
    }
}