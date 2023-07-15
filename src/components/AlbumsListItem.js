import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

export default function AlbumsListItem({ album }) {
	const [removeAlbum, results] = useRemoveAlbumMutation();

	const handleRemoveAlbum = () => {
		removeAlbum(album);
	};

	const header = (
		<>
			<Button
				danger
				outline
				loading={results.isLoading}
				className="mr-2 border-none"
				onClick={handleRemoveAlbum}
			>
				<GoTrash />
			</Button>
			{album.title}
		</>
	);

	return (
		<ExpandablePanel header={header}>
			<PhotosList album={album} />
		</ExpandablePanel>
	);
}
