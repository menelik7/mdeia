import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

export default function AlbumsList({ user }) {
	const { data, error, isLoading } = useFetchAlbumsQuery(user);

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
			<div>Albums for {user.name}</div>
			<div>{content}</div>
		</div>
	);
}
