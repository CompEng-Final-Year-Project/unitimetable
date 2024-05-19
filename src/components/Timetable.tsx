import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";

const Timetable = () => {
  return (
    <div className="max-h-screen p-[20px] pb-48 overflow-y-auto w-full grid gap-6">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Computer Science Timetable</CardTitle>
            <CardDescription>
              View and manage the timetable for the Computer Science program.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Monday</TableHead>
                  <TableHead>Tuesday</TableHead>
                  <TableHead>Wednesday</TableHead>
                  <TableHead>Thursday</TableHead>
                  <TableHead>Friday</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>9:00 AM - 10:00 AM</TableCell>
                  <TableCell>Algorithms</TableCell>
                  <TableCell>Data Structures</TableCell>
                  <TableCell>Operating Systems</TableCell>
                  <TableCell>Software Engineering</TableCell>
                  <TableCell>Database Systems</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10:30 AM - 11:30 AM</TableCell>
                  <TableCell>Computer Networks</TableCell>
                  <TableCell>Artificial Intelligence</TableCell>
                  <TableCell>Web Development</TableCell>
                  <TableCell>Mobile Development</TableCell>
                  <TableCell>Cybersecurity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12:00 PM - 1:00 PM</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1:30 PM - 2:30 PM</TableCell>
                  <TableCell>Machine Learning</TableCell>
                  <TableCell>Distributed Systems</TableCell>
                  <TableCell>Computer Graphics</TableCell>
                  <TableCell>Parallel Computing</TableCell>
                  <TableCell>Blockchain</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3:00 PM - 4:00 PM</TableCell>
                  <TableCell>Quantum Computing</TableCell>
                  <TableCell>Natural Language Processing</TableCell>
                  <TableCell>Computer Vision</TableCell>
                  <TableCell>Robotics</TableCell>
                  <TableCell>Internet of Things</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button>Regenerate</Button>
            <Button variant="outline">Filter</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Business Administration Timetable</CardTitle>
            <CardDescription>
              View and manage the timetable for the Business Administration
              program.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Monday</TableHead>
                  <TableHead>Tuesday</TableHead>
                  <TableHead>Wednesday</TableHead>
                  <TableHead>Thursday</TableHead>
                  <TableHead>Friday</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>9:00 AM - 10:00 AM</TableCell>
                  <TableCell>Principles of Management</TableCell>
                  <TableCell>Accounting</TableCell>
                  <TableCell>Marketing</TableCell>
                  <TableCell>Finance</TableCell>
                  <TableCell>Human Resources</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10:30 AM - 11:30 AM</TableCell>
                  <TableCell>Organizational Behavior</TableCell>
                  <TableCell>Operations Management</TableCell>
                  <TableCell>Business Law</TableCell>
                  <TableCell>Strategic Management</TableCell>
                  <TableCell>Entrepreneurship</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12:00 PM - 1:00 PM</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                  <TableCell>Lunch Break</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1:30 PM - 2:30 PM</TableCell>
                  <TableCell>Business Analytics</TableCell>
                  <TableCell>International Business</TableCell>
                  <TableCell>Project Management</TableCell>
                  <TableCell>Business Ethics</TableCell>
                  <TableCell>Supply Chain Management</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3:00 PM - 4:00 PM</TableCell>
                  <TableCell>Negotiation Skills</TableCell>
                  <TableCell>Corporate Finance</TableCell>
                  <TableCell>Digital Marketing</TableCell>
                  <TableCell>Organizational Change</TableCell>
                  <TableCell>Business Consulting</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button>Regenerate</Button>
            <Button variant="outline">Filter</Button>
          </CardFooter>
        </Card>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
    //   </div>
    // </div>
  );
};

export default Timetable;
