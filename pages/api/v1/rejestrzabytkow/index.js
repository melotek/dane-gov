// import _ from "lodash";

// export default async (req, res) => {
//   try {
//     const globalRes = await axios.get("http://localhost:3000/public/kurwa.json", {
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }

//     });
    
//     const data = globalRes.data;
// console.log(data[0])
//     res.status(200).json(data)
//   } catch (error) {
//     console.log(e)
//     res.status(e.status || 400).json({message: "api error"})
//   }
// };