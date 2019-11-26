module.exports = () => {
    return async (ctx, next) => {
        if (ctx.state.user.username === 'admin') {
            next()
        } else {
            ctx.body = {
                message: 'Authentication Error',
                code: -1
            }
        }
    }
}