import { GET_BMX, GET_MOUNTAINS, GET_ROADS, GET_TRACKS } from "./ActionConstant";

const initialState = {
  record: [
    {
      title: "Day 1 of BMX",
      category: "BMX",
       image:"https://media.istockphoto.com/photos/young-woman-bikes-down-country-road-at-sunrise-picture-id1322928386?b=1&k=20&m=1322928386&s=170667a&w=0&h=ZSL-vizRxwe4vGBK7up4Hws81EGnPzadkn4G6Kf1B08="
  
    },
    {
      title: "Day 2 of BMX",
      category: "BMX",
      image:"https://media.istockphoto.com/photos/young-woman-bikes-down-country-road-at-sunrise-picture-id1322928386?b=1&k=20&m=1322928386&s=170667a&w=0&h=ZSL-vizRxwe4vGBK7up4Hws81EGnPzadkn4G6Kf1B08="
    },
    {
      title: "Day 3 of BMX",
      category: "BMX",
      image:"https://media.istockphoto.com/photos/young-woman-bikes-down-country-road-at-sunrise-picture-id1322928386?b=1&k=20&m=1322928386&s=170667a&w=0&h=ZSL-vizRxwe4vGBK7up4Hws81EGnPzadkn4G6Kf1B08="
  
    },
    {
      title: "Day 1 of Mountains",
      category: "Mountains",
     image:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg"
    },
    {
      title: "Day 2 of Mountains",
      category: "Mountains",
      image:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg"

    },
    {
      title: "Day 3 of Mountains",
      category: "Mountains",
      image:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg"

    },
    {
      title: "Day 1 of Roads",
      category: "Roads",
      image:"https://media.istockphoto.com/photos/desert-highway-death-valley-picture-id1254721353?b=1&k=20&m=1254721353&s=170667a&w=0&h=J6Uvv9N7XyIesDJpI2V4UYjIgEZP4aB0GCsGroRoUfA="

    },
    {
      title: "Day 2 of Roads",
      category: "Roads",
      image:"https://media.istockphoto.com/photos/desert-highway-death-valley-picture-id1254721353?b=1&k=20&m=1254721353&s=170667a&w=0&h=J6Uvv9N7XyIesDJpI2V4UYjIgEZP4aB0GCsGroRoUfA="

    },
    {
      title: "Day 3 of Roads",
      category: "Roads",
      image:"https://media.istockphoto.com/photos/desert-highway-death-valley-picture-id1254721353?b=1&k=20&m=1254721353&s=170667a&w=0&h=J6Uvv9N7XyIesDJpI2V4UYjIgEZP4aB0GCsGroRoUfA="

    },
    {
      title: "Day 1 of Tracks",
      category: "Tracks",
      image:"https://images.unsplash.com/photo-1559164317-11e4b62b5a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW4lMjB0cmFja3xlbnwwfHwwfHw%3D&w=1000&q=80"

    },
    {
      title: "Day 2 of Tracks",
      category: "Tracks",
      image:"https://images.unsplash.com/photo-1559164317-11e4b62b5a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW4lMjB0cmFja3xlbnwwfHwwfHw%3D&w=1000&q=80"

    },
    {
      title: "Day 3 of Tracks",
      category: "Tracks",
      image:"https://images.unsplash.com/photo-1559164317-11e4b62b5a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW4lMjB0cmFja3xlbnwwfHwwfHw%3D&w=1000&q=80"

    },
  ],
  filterData: [],
};


export const Reducers=(store=initialState,{type,payload})=>{
     switch(type){
        case GET_BMX : return {...store,filterData:store.record.filter((e)=>e.category=="BMX") }
        case GET_MOUNTAINS : return {...store,filterData:store.record.filter((e)=>e.category=="Mountains")}
        case GET_ROADS : return {...store,filterData:store.record.filter((e)=>e.category=="Roads")}
        case GET_TRACKS : return {...store,filterData:store.record.filter((e)=>e.category=="Tracks")}
       default: return store
     }

}