const User = require('./User');

class UserController {
    /**
     * Display a listing of the resource.
     * 
     * @param {Object} request
     * @param {Object} response
     *
     * @return {Array}
     */
    index(request, response) {
        return response.status(200).json({
            data: User.all(),
            cout: request.query.count || 0,
            skip: request.query.skip || 0,
            limit: request.query.limit || 0,
            status: 200
        });
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return {Object} response
     */
    create() { }

    /**
     * Store a newly created resource in storage.
     *
     * @param {Object} request
     * 
     * @return {Object} response
     */
    store(request, response) {
        return response.status(201).json(request.body);
    }

    /**
     * Display the specified resource.
     *
     * @param {Object} request
     * @param {Object} response
     * 
     * @return {Object} User
     */
    show(request, response) {
        const user = User.all().find(u => u.id === parseInt(request.params.id, 10));

        if (user) {
            return response.status(200).json(user);
        }

        return response.status(204).json({});
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param {Integer} id
     * 
     * @return {Object} response
     */
    edit() { }

    /**
     * Update the specified resource in storage.
     *
     * @param {Object} request
     * @param {Integer} id
     * 
     * @return {Object} response
     */
    update() { }

    /**
     * Remove the specified resource from storage.
     *
     * @param {Integer} id
     * 
     * @return {Object} response
     */
    destroy() { }
}

module.exports = UserController;