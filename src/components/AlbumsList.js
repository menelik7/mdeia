import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

export default function AlbumsList({ user }) {
	const { data, error, isFetching } = useFetchAlbumsQuery(user);
	const [addAlbum, results] = useAddAlbumMutation();

	const handleAddAlbum = () => {
		addAlbum(user);
	};

	let content;

	if (isFetching) {
		return <Skeleton className="h-10 w-full" numberOfLines={3} />;
	} else if (error) {
		return <div>Error loading content...</div>;
	} else {
		content = data.map((album) => {
			return <AlbumsListItem key={album.id} album={album} />;
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
