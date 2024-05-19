import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export default function DashBoard() {
  return (
    <div className=" max-h-screen pb-48 overflow-y-auto w-full ">
      <div className="flex flex-col">
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>
                  Overview of the current semester's timetable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                      <h3 className="text-lg font-semibold">
                        Upcoming Classes
                      </h3>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">
                              Introduction to Computer Science
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              9:00 AM - 10:30 AM
                            </p>
                          </div>
                          <Badge className="shrink-0" variant="outline">
                            Today
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Calculus I</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              11:00 AM - 12:30 PM
                            </p>
                          </div>
                          <Badge className="shrink-0" variant="outline">
                            Tomorrow
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                      <h3 className="text-lg font-semibold">
                        Teacher Schedules
                      </h3>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">
                              Prof. Jane Doe
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              9:00 AM - 11:00 AM
                            </p>
                          </div>
                          <Badge className="shrink-0" variant="outline">
                            Today
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">
                              Prof. John Smith
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              1:00 PM - 3:00 PM
                            </p>
                          </div>
                          <Badge className="shrink-0" variant="outline">
                            Tomorrow
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <h3 className="text-lg font-semibold">Room Availability</h3>
                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Lecture Hall A</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Available
                          </p>
                        </div>
                        <Badge className="shrink-0" variant="outline">
                          Today
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Computer Lab B</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Booked
                          </p>
                        </div>
                        <Badge className="shrink-0" variant="outline">
                          Tomorrow
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Timetable Generator</CardTitle>
                <CardDescription>
                  Automatically generate a timetable for the semester.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="semester">Semester</Label>
                    <Select defaultValue="fall-2023">
                      <option value="fall-2023">Fall 2023</option>
                      <option value="spring-2024">Spring 2024</option>
                      <option value="summer-2024">Summer 2024</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="courses">Courses</Label>
                    <Textarea
                      id="courses"
                      placeholder="Enter course details separated by newlines"
                      rows={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="instructors">Instructors</Label>
                    <Textarea
                      id="instructors"
                      placeholder="Enter instructor details separated by newlines"
                      rows={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rooms">Rooms</Label>
                    <Textarea
                      id="rooms"
                      placeholder="Enter room details separated by newlines"
                      rows={5}
                    />
                  </div>
                  <Button className="w-full">Generate Timetable</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
                <CardDescription>
                  Track and manage available classrooms, equipment, and other
                  resources.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="rooms">Classrooms</Label>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Room</TableHead>
                          <TableHead>Capacity</TableHead>
                          <TableHead>Equipment</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Lecture Hall A</TableCell>
                          <TableCell>150</TableCell>
                          <TableCell>Projector, Whiteboard</TableCell>
                          <TableCell>
                            <Badge
                              className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                              variant="outline"
                            >
                              Available
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              className="ml-2"
                              size="sm"
                              variant="outline"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Computer Lab B</TableCell>
                          <TableCell>40</TableCell>
                          <TableCell>Computers, Projector</TableCell>
                          <TableCell>
                            <Badge
                              className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                              variant="outline"
                            >
                              Booked
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              className="ml-2"
                              size="sm"
                              variant="outline"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Seminar Room C</TableCell>
                          <TableCell>80</TableCell>
                          <TableCell>Projector, Whiteboard</TableCell>
                          <TableCell>
                            <Badge
                              className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                              variant="outline"
                            >
                              Partially Available
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              className="ml-2"
                              size="sm"
                              variant="outline"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div>
                    <Label htmlFor="equipment">Equipment</Label>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Projectors</TableCell>
                          <TableCell>15</TableCell>
                          <TableCell>
                            <Badge
                              className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                              variant="outline"
                            >
                              Available
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              className="ml-2"
                              size="sm"
                              variant="outline"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Laptops</TableCell>
                          <TableCell>30</TableCell>
                          <TableCell />
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

// function BellIcon(props) {
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
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   );
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
//   );
// }

// function HomeIcon(props) {
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
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }

// function LineChartIcon(props) {
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
//       <path d="M3 3v18h18" />
//       <path d="m19 9-5 5-4-4-3 3" />
//     </svg>
//   );
// }

// function PackageIcon(props) {
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
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   );
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
//   );
// }
