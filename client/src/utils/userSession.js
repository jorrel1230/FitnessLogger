var UserSession = (() => {
    var id = ''

    var getId = () => {
        return id;
    };

    var setId = (userId) => {
        id = userId;
    };

    return({
        getId: getId,
        setId: setId
    });
})();

export default UserSession;