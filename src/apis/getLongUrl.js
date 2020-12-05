import axios from "axios";

const url = "https://url-al.herokuapp.com/api/url/shorten";

export const getUrlToDom = async (copiedUrl) => {
  try {
    const response = await axios.post(url, {
      longUrl: copiedUrl,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
