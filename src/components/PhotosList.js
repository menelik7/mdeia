import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

export default function PhotosList({ album }) {
	const { data, error, isFetching } = useFetchPhotosQuery(album);
	const [addPhoto, results] = useAddPhotoMutation();

	const handleAddPhoto = () => {
		addPhoto(album);
	};

	let content;
	if (isFetching) {
		content = <Skeleton className="h-8 w-8" numberOfLines={3} />;
	} else if (error) {
		content = <div>Error fetching photos...</div>;
	} else {
		content = data.map((photo) => {
			return <PhotosListItem key={photo.id} photo={photo} />;
		});
	}

	return (
		<div>
			<div className="flex flex-row justify-between items-center m-2">
				<h3 className="text-lg font-bold">Photos in {album.title}</h3>
				<Button loading={results.isLoading} onClick={handleAddPhoto}>
					+ Add Photo
				</Button>
			</div>
			<div className="flex flex-row flex-wrap justify-center mx-8">
				{content}
			</div>
		</div>
	);
}
