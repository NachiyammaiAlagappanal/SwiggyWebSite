const getData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
    }

export default getData;