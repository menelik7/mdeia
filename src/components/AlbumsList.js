import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

export default function AlbumsList({ user }) {
	const { data, error, isLoading } = useFetchAlbumsQuery(user);
	const [addAlbum, results] = useAddAlbumMutation();

	const handleAddAlbum = () => {
		addAlbum(user);
	};

	let content;

	if (isLoading) {
		return <Skeleton numberOfLines={3} />;
	} else if (error) {
		return <div>Error loading content...</div>;
	} else {
		content = data.map((album) => {
			const header = <div>{album.title}</div>;

			return (
				<ExpandablePanel key={album.id} header={header}>
					List of photos in the album
				</ExpandablePanel>
			);
		});
	}

	return (
		<div>
			<div className="flex flex-row justify-between items-center mb-3">
				<div>Albums for {user.name}</div>
				<Button onClick={handleAddAlbum}>+ add Album</Button>
			</div>
			<div>{content}</div>
		</div>
	);
}
