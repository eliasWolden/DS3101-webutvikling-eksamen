import axios from "axios";

const imageUploadService = (
    () => {

    const imagecontroller = 'http://localhost:5257/api/Image';

    const postImage = async (image: File, subfolder: string) => {
        //lager formdata
        const formData = new FormData();
        formData.append('file', image);

        // sender formdata til api
        const result = await axios({
            url: imagecontroller + "/" + subfolder + "/",
            method: 'POST',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data',},
        });
        console.log(result);

        formData.delete("file");
    }

    return {
        postImage
        }
    }
)();

export default imageUploadService;
