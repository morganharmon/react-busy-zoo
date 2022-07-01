import MaterialTable from 'material-table';
import { customers } from './data.js';

export default function MyTable() {
  return (
    <div>
      <MaterialTable columns={
        [
          { title: 'id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'Location', field: 'location' }
        ]
      } data={customers} />
    </div>
  );
}