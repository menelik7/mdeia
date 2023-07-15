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
		return <Skeleton className="h-10 w-full" numberOfLines={3} />;
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
				<h3 className="text-lg font-bold">Albums for {user.name}</h3>
				<Button
					className="justify-center min-w-[108px]"
					loading={results.isLoading}
					onClick={handleAddAlbum}
				>
					+ add Album
				</Button>
			</div>
			<div>{content}</div>
		</div>
	);
}
