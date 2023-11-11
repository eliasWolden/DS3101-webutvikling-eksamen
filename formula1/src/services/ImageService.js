import axios from "axios";

const imageUploadService = () => {

    const imagecontroller = 'http://localhost:5257/api/Image/Driver';

    const uploadImage = async (imageFile, imageName) => {
        //lager formdata
        const formData = new FormData();
        formData.append('file', imageFile, imageName);

        // sender formdata til api
        const result = await axios({
            method: 'POST',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data',},
        });

        formData.delete("file");
    }
    return {
        uploadImage
    }
}

export default imageUploadService;
