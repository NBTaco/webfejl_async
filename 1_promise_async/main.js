const service = new Service();
const data = new ViewDataController();
service.init().then((array) => {
    data.renderData(array);
})