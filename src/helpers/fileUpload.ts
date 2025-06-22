

export const fileUpload = async( file: File ) => {
	if ( !file ) throw new Error('No hay ningún archivo a subir')
		
	const cloudUrl = 'https://api.cloudinary.com/v1_1/daqldjwuy/image/upload';

	const formData = new FormData();
	formData.append('upload_preset', 'journal-app');
	formData.append('file', file);

	try {
		const resp = await fetch( cloudUrl, {
			method: 'POST',
			body: formData
		});

		if ( !resp.ok ) throw new Error('No se pudo subir el archivo');
		
		const cloudResp = await resp.json();

		return cloudResp.secure_url;
		
	} catch (error) {
		console.log(error);
		
		throw new Error('Error al subir el archivo');
	}
}