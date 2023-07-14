import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export function UsersListItem({ user }) {
	const [doRemoveUser, isLoading, error] = useThunk(removeUser);

	const handleClick = () => {
		doRemoveUser(user);
	};

	const header = (
		<>
			<Button danger className="mr-3" loading={isLoading} onClick={handleClick}>
				<GoTrash />
			</Button>
			{error && <div>Error removing user...</div>}
			{user.name}
		</>
	);

	return (
		<ExpandablePanel header={header}>
			<AlbumsList user={user} />
		</ExpandablePanel>
	);
}
