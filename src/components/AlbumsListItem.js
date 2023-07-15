import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

export default function AlbumsListItem({ album }) {
	const [removeAlbum, results] = useRemoveAlbumMutation();

	const handleRemoveAlbum = () => {
		removeAlbum(album);
	};

	const header = (
		<>
			<Button
				loading={results.isLoading}
				className="mr-2"
				onClick={handleRemoveAlbum}
			>
				<GoTrash />
			</Button>
			{album.title}
		</>
	);

	return (
		<ExpandablePanel header={header}>
			List of photos in the album
		</ExpandablePanel>
	);
}
