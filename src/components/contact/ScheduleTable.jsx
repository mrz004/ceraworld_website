import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function ScheduleTable({ data }) {
  return (
    <div className="schedule-table w-[90%] sm:w-3/4 lg:w-1/2 mx-auto">
      <Table className="text-[.5em] sm:text-[1em]" striped>
        <TableHead>
          <TableHeadCell>Day</TableHeadCell>
          <TableHeadCell>Schedule</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {Object.keys(data).map((key) => (
            <TableRow
              key={key}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {key}
              </TableCell>
              <TableCell>{data[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ScheduleTable;
