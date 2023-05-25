import { useState } from "preact/hooks";
import { api } from "~/utils/api.ts";

interface OwnersListProps {
  lastName: string;
}
export default function OwnersList({ lastName }: OwnersListProps) {
  // const [owners, setOwners] = useState<Awaited<ReturnType<typeof api.owners.list.query>>>([]);
  // const fetchOwners = () => api.owners.list.useQuery({ lastName }).then(setOwners);
  const { data, isLoading } = api.owners.list.useQuery({ lastName });

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
