import { Input } from "../atoms/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../atoms/table";

const TableWrap = () => {
  return (
    <div>
      <label className="mb-4 text-xl font-bold text-primary dark:text-primary-dark">
        Table
      </label>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center gap-2">
                <Input type="checkbox" role="checkbox" className="w-4 h-4" />
                Invoice
              </div>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3].map((entry) => (
            <TableRow>
              <TableCell key={entry}>test</TableCell>
              <TableCell>lorem</TableCell>
              <TableCell>lorem</TableCell>
              <TableCell className="text-right">100</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TableWrap;
