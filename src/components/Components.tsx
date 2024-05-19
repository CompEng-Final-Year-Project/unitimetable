// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/tI53CENeuAE
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

// export default function Component() {
//   return (
//     <div key="1" className="flex flex-col">
//       <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
//         <Link className="lg:hidden" href="#">
//           <CalendarIcon className="h-6 w-6" />
//           <span className="sr-only">Home</span>
//         </Link>
//         <div className="w-full flex-1">
//           <form>
//             <div className="relative">
//               <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
//               <Input
//                 className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
//                 placeholder="Search timetable, programs, courses, classrooms, students, lecturers, or departments..."
//                 type="search"
//               />
//             </div>
//           </form>
//         </div>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
//               size="icon"
//               variant="ghost"
//             >
//               <img
//                 alt="Avatar"
//                 className="rounded-full"
//                 height="32"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "32/32",
//                   objectFit: "cover",
//                 }}
//                 width="32"
//               />
//               <span className="sr-only">Toggle user menu</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Admin</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Settings</DropdownMenuItem>
//             <DropdownMenuItem>Support</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Logout</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </header>
//       <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
//         <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
//           <Card>
//             <CardHeader>
//               <CardTitle>Programs</CardTitle>
//               <CardDescription>View all available academic programs.</CardDescription>
//               <Button className="ml-auto" size="sm">
//                 Manage
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Program</TableHead>
//                     <TableHead>Degree</TableHead>
//                     <TableHead>Duration</TableHead>
//                     <TableHead>Enrollment</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>Computer Science</TableCell>
//                     <TableCell>Bachelor of Science</TableCell>
//                     <TableCell>4 years</TableCell>
//                     <TableCell>350</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Business Administration</TableCell>
//                     <TableCell>Bachelor of Business Administration</TableCell>
//                     <TableCell>4 years</TableCell>
//                     <TableCell>280</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Mechanical Engineering</TableCell>
//                     <TableCell>Bachelor of Science</TableCell>
//                     <TableCell>4 years</TableCell>
//                     <TableCell>220</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Psychology</TableCell>
//                     <TableCell>Bachelor of Arts</TableCell>
//                     <TableCell>4 years</TableCell>
//                     <TableCell>180</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Courses</CardTitle>
//               <CardDescription>View all courses offered across the programs.</CardDescription>
//               <Button className="ml-auto" size="sm">
//                 Manage
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Course</TableHead>
//                     <TableHead>Program</TableHead>
//                     <TableHead>Department</TableHead>
//                     <TableHead>Credits</TableHead>
//                     <TableHead>Enrollment</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>Introduction to Computer Science</TableCell>
//                     <TableCell>Computer Science</TableCell>
//                     <TableCell>Computer Science</TableCell>
//                     <TableCell>3</TableCell>
//                     <TableCell>150</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Calculus I</TableCell>
//                     <TableCell>Computer Science, Mechanical Engineering</TableCell>
//                     <TableCell>Mathematics</TableCell>
//                     <TableCell>4</TableCell>
//                     <TableCell>120</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Principles of Marketing</TableCell>
//                     <TableCell>Business Administration</TableCell>
//                     <TableCell>Business</TableCell>
//                     <TableCell>3</TableCell>
//                     <TableCell>100</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Developmental Psychology</TableCell>
//                     <TableCell>Psychology</TableCell>
//                     <TableCell>Psychology</TableCell>
//                     <TableCell>3</TableCell>
//                     <TableCell>80</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
//           <Card>
//             <CardHeader>
//               <CardTitle>Classrooms</CardTitle>
//               <CardDescription>View all scheduled classes across the programs.</CardDescription>
//               <Button className="ml-auto" size="sm">
//                 Manage
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Course</TableHead>
//                     <TableHead>Instructor</TableHead>
//                     <TableHead>Time</TableHead>
//                     <TableHead>Classroom</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>Introduction to Computer Science</TableCell>
//                     <TableCell>Prof. Jane Doe</TableCell>
//                     <TableCell>9:00 AM - 10:30 AM</TableCell>
//                     <TableCell>Lecture Hall A</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Calculus I</TableCell>
//                     <TableCell>Prof. John Smith</TableCell>
//                     <TableCell>11:00 AM - 12:30 PM</TableCell>
//                     <TableCell>Seminar Room C</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Principles of Marketing</TableCell>
//                     <TableCell>Prof. Sarah Lee</TableCell>
//                     <TableCell>2:00 PM - 3:30 PM</TableCell>
//                     <TableCell>Lecture Hall B</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Developmental Psychology</TableCell>
//                     <TableCell>Prof. Michael Johnson</TableCell>
//                     <TableCell>4:00 PM - 5:30 PM</TableCell>
//                     <TableCell>Seminar Room D</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//           <div className="grid gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Students</CardTitle>
//                 <CardDescription>View all enrolled students across the programs.</CardDescription>
//                 <Button className="ml-auto" size="sm">
//                   Manage
//                 </Button>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Program</TableHead>
//                       <TableHead>Year</TableHead>
//                       <TableHead>GPA</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>John Doe</TableCell>
//                       <TableCell>Computer Science</TableCell>
//                       <TableCell>Junior</TableCell>
//                       <TableCell>3.8</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Jane Smith</TableCell>
//                       <TableCell>Business Administration</TableCell>
//                       <TableCell>Sophomore</TableCell>
//                       <TableCell>3.5</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Michael Johnson</TableCell>
//                       <TableCell>Mechanical Engineering</TableCell>
//                       <TableCell>Senior</TableCell>
//                       <TableCell>4.0</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Sarah Lee</TableCell>
//                       <TableCell>Psychology</TableCell>
//                       <TableCell>Freshman</TableCell>
//                       <TableCell>3.2</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Lecturers</CardTitle>
//                 <CardDescription>View all lecturers across the programs.</CardDescription>
//                 <Button className="ml-auto" size="sm">
//                   Manage
//                 </Button>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Department</TableHead>
//                       <TableHead>Courses Taught</TableHead>
//                       <TableHead>Years of Experience</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>Prof. Jane Doe</TableCell>
//                       <TableCell>Computer Science</TableCell>
//                       <TableCell>Introduction to Computer Science</TableCell>
//                       <TableCell>10</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Prof. John Smith</TableCell>
//                       <TableCell>Mathematics</TableCell>
//                       <TableCell>Calculus I</TableCell>
//                       <TableCell>8</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Prof. Sarah Lee</TableCell>
//                       <TableCell>Business</TableCell>
//                       <TableCell>Principles of Marketing</TableCell>
//                       <TableCell>12</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Prof. Michael Johnson</TableCell>
//                       <TableCell>Psychology</TableCell>
//                       <TableCell>Developmental Psychology</TableCell>
//                       <TableCell>6</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//         <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
//           <Card>
//             <CardHeader>
//               <CardTitle>Departments</CardTitle>
//               <CardDescription>View all academic departments.</CardDescription>
//               <Button className="ml-auto" size="sm">
//                 Manage
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Department</TableHead>
//                     <TableHead>Programs</TableHead>
//                     <TableHead>Faculty</TableHead>
//                     <TableHead>Students</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>Computer Science</TableCell>
//                     <TableCell>Computer Science</TableCell>
//                     <TableCell>15</TableCell>
//                     <TableCell>350</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Mathematics</TableCell>
//                     <TableCell>Computer Science, Mechanical Engineering</TableCell>
//                     <TableCell>20</TableCell>
//                     <TableCell>220</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Business</TableCell>
//                     <TableCell>Business Administration</TableCell>
//                     <TableCell>18</TableCell>
//                     <TableCell>280</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Psychology</TableCell>
//                     <TableCell>Psychology</TableCell>
//                     <TableCell>12</TableCell>
//                     <TableCell>180</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   )
// }

// function CalendarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }