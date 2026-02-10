import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataTable } from '@/components/produce/data-table';
import { userColumns } from '@/components/admin/user-columns';
import { columns as produceColumns } from '@/components/produce/produce-columns';
import { users, produce } from '@/lib/data';

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">
          Admin Management
        </h1>
        <p className="text-muted-foreground">
          Manage users and view all produce records in the system.
        </p>
      </div>

      <Tabs defaultValue="users">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="produce">All Produce Records</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>
                Manage all registered users and their roles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={userColumns}
                data={users}
                filterColumnId="name"
                filterPlaceholder="Filter by user name..."
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="produce">
          <Card>
            <CardHeader>
              <CardTitle>All Produce</CardTitle>
              <CardDescription>
                A comprehensive list of every produce item ever registered.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={produceColumns}
                data={produce}
                filterColumnId="name"
                filterPlaceholder="Filter by produce name..."
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
