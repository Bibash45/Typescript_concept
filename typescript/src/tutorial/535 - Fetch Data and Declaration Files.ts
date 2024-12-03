import { bcrypt } from 'bcryptjs';
// fetch data
import { z } from "zod";
import { Random } from "./types";
import bcryptjs from "bcryptjs"

const url = "https://www.course-api.com/react-tours-project";

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
//   //   someThing: z.number(),
// });

// type Tour = z.infer<typeof tourSchema>;

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const rowData: Tour[] = await response.json();
//     const result = tourSchema.array().safeParse(rowData);
//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }
//     console.log(result);

//     return result.data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "there was an error..";
//     console.error(errMsg);
//     return [];
//   }
// }
// const tours = await fetchData(url);

// tours.map((tour) => {
//   console.log(tour.name);
// });



 




